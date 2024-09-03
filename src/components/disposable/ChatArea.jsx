import { getChatRoomById, getMessagesList } from "@/utils/http";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import WarningIcon from "../icons/WarningIcon";
import useGetData from "@/hooks/useGetData";
import RectangleButton from "../shared/RectangleButton";
import { useSelector } from "react-redux";
import PinIcon from "../icons/PinIcon";
import StarIcon from "../icons/StarIcon";
import ThreeDotVertical from "../icons/ThreeDotVertical";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { formatTimeDifference, groupMessages } from "@/utils/hepler";
import defaultAvatar from "@/assets/image/default-avatar.png";

const ChatArea = ({ chatRoomId }) => {
  const token = useRouteLoaderData("root");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageSent, setMessageSent] = useState(false);
  const clientRef = useRef(null);
  const chatRoomRef = useRef(null);

  const connectWebSocket = () => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = Stomp.over(socket);

    stompClient.debug = () => {};

    stompClient.connect({}, (frame) => {
      console.log("Connected: " + frame);

      stompClient.subscribe("/topic/messages", (message) => {
        const response = JSON.parse(message.body);
        if (response.code === 200) {
          setMessages((prevMessages) => {
            const messageExists = prevMessages.some(
              (msg) => msg.id === response.data.id
            );
            if (!messageExists) {
              return [response.data, ...prevMessages];
            }
            return prevMessages;
          });
        }
      });

      clientRef.current = stompClient;
    });
  };

  const sendMessage = (content) => {
    if (clientRef.current) {
      setMessage("");
      const messagePayload = JSON.stringify({
        chatRoomId: dataChatRoom.id,
        message: content,
        loggedInUserId: loggedInUser.id,
      });
      // Send the message via the WebSocket client
      clientRef.current.send("/app/chat", {}, messagePayload);
    }
  };

  const params = useParams();
  const id = chatRoomId || params.chatRoomId;
  const [hasMoreMessages, setHasMoreMessages] = useState(true);
  const [page, setPage] = useState(0);
  const queryParams = useMemo(
    () => ({
      id,
      token,
      page,
      size: 20,
    }),
    [id, page, token]
  );

  const {
    isLoading: isLoadingChatRoom,
    error: errorChatRom,
    data: dataChatRoom,
  } = useGetData(getChatRoomById, queryParams);

  if (errorChatRom) {
    return (
      <div className="h-screen bg-custom-neutral flex flex-col justify-center items-center text-xl font-medium text-red-500">
        <WarningIcon className="w-20 h-20 mb-4 text-center" />
        {errorChatRom.message}
      </div>
    );
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const scrollToBottom = () => {
    chatRoomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = () => {
    if (message !== "") {
      sendMessage(message);
    }
  };

  const fetchData = async () => {
    try {
      const response = await getMessagesList(queryParams);

      const newMessages = response.data.content.filter(
        (newMessage) => !messages.some((msg) => msg.id === newMessage.id)
      );

      // Only update state if there are new messages
      if (newMessages.length > 0) {
        setMessages((prevMessages) => [...prevMessages, ...newMessages]);
        scrollToBottom();
      }
      setPage((prePage) => prePage + 1); // Increment the page number for the next fetch
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [queryParams]);

  useEffect(() => {
    connectWebSocket();

    return () => {
      clientRef.current.disconnect();
    };
  }, []);
  return (
    <div className="w-full min-h-screen relative bg-violet-50">
      {dataChatRoom && (
        <div className="px-4 py-3 sticky top-0 border-b-1 bg-white border-custom-neutral-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={dataChatRoom.company.logo}
              alt="logo"
              className="w-12 h-12 rounded-full mr-4"
            />
            <p className="text-lg font-semibold">
              {loggedInUser && loggedInUser.role === "EMPLOYEE"
                ? dataChatRoom.company.name
                : dataChatRoom.user.fullName}
            </p>
          </div>
          <div className="flex items-center">
            <PinIcon className="mr-4" />
            <StarIcon className="mr-4" />
            <ThreeDotVertical />
          </div>
        </div>
      )}
      <div className="flex flex-col justify-end pb-28 px-4">
        <ul className="flex flex-col-reverse">
          {messages.length != 0 &&
            groupMessages(messages).map((group, index) => (
              <li key={index} className="my-2">
                <p className="text-gray-400 text-sm font-semibold text-center mb-4">
                  {formatTimeDifference(group[0].createdAt)}
                </p>
                <div
                  className={`flex ${
                    loggedInUser.id == group[0].user.id && "flex-row-reverse"
                  } `}
                >
                  <img
                    src={defaultAvatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div
                    className={`flex flex-col-reverse ${
                      loggedInUser.id == group[0].user.id
                        ? "items-end mr-4"
                        : "ml-4"
                    }`}
                  >
                    {group.map((el) => (
                      <div
                        className={`my-2 ${
                          loggedInUser.id == group[0].user.id
                            ? "bg-violet-300"
                            : "bg-white"
                        } p-2 min-w-20 w-fit rounded-lg`}
                        key={el.id}
                      >
                        {el.content}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="absolute bottom-8 right-24 left-24 p-2 border-1 border-custom-neutral-2 bg-white flex">
        <input
          onChange={handleChange}
          value={message}
          className="w-full focus:outline-none border-none focus:ring-0 text-gray-400"
          placeholder="Gửi tin nhắn"
        />
        <RectangleButton onClick={handleClick}>Gửi</RectangleButton>
      </div>
      <div style={{ float: "left", clear: "both" }} ref={chatRoomRef}></div>
    </div>
  );
};

export default ChatArea;
