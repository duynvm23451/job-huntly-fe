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
import { current } from "@reduxjs/toolkit";

const ChatArea = ({ chatRoomId }) => {
  const token = useRouteLoaderData("root");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [message, setMessage] = useState("");
  const clientRef = useRef(null);

  const connectWebSocket = () => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = Stomp.over(socket);

    stompClient.debug = () => {};

    stompClient.connect({}, (frame) => {
      console.log("Connected: " + frame);

      stompClient.subscribe("/topic/messages", (message) => {
        const response = JSON.parse(message.body);
        if (response.code === 200) {
          refetchMessages(); // Trigger data refetch
        }
      });

      clientRef.current = stompClient;
    });
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (clientRef.current) {
        clientRef.current.disconnect();
      }
    };
  }, []);

  const sendMessage = (content) => {
    if (clientRef.current) {
      const messagePayload = JSON.stringify({
        chatRoomId: dataChatRoom.id,
        message: content,
        loggedInUserId: loggedInUser.id,
      });
      clientRef.current.send("/app/chat", {}, messagePayload);
    }
  };

  const params = useParams();
  const id = chatRoomId || params.chatRoomId;
  const [hasMoreMessages, setHasMoreMessages] = useState(true);
  const [page, setPage] = useState(1);
  const queryParams = useMemo(
    () => ({
      id,
      token,
      page: 1,
      size: 40,
    }),
    [id, token]
  );

  const {
    isLoading: isLoadingChatRoom,
    error: errorChatRom,
    data: dataChatRoom,
  } = useGetData(getChatRoomById, queryParams);

  const {
    isLoading: isLoadingMessages,
    error: errorMessages,
    data: dataMessages,
    refetch: refetchMessages,
  } = useGetData(getMessagesList, queryParams);

  if (errorMessages || errorChatRom) {
    let error = errorMessages || errorChatRom;
    const errorMessage = error?.message || "An unknown error occurred.";
    return (
      <div className="h-screen bg-custom-neutral flex flex-col justify-center items-center text-xl font-medium text-red-500">
        <WarningIcon className="w-20 h-20 mb-4 text-center" />
        {errorMessage}
      </div>
    );
  }
  if (isLoadingChatRoom || isLoadingMessages) {
    return <div>Loading...</div>;
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    if (message !== "") {
      setMessage("");
      sendMessage(message);
    }
  };

  return (
    <div className="w-full relative bg-violet-50">
      {dataChatRoom && (
        <div className="px-4 py-3 sticky top-0 border-b-1 bg-white border-custom-neutral-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
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
      <div className="flex flex-col justify-end pb-28 px-4 chat-container">
        <ul className="flex flex-col-reverse">
          {dataMessages &&
            groupMessages(dataMessages.content).map((group, index) => (
              <li key={index} className="my-2">
                <p className="text-gray-400 text-sm font-semibold text-center mb-4">
                  {formatTimeDifference(group[0].createdAt)}
                </p>
                <div className="flex">
                  <img
                    src={defaultAvatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4 flex flex-col-reverse ">
                    {group.map((el) => (
                      <div
                        className="my-2 bg-violet-300 p-2 min-w-20 rounded-lg"
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
    </div>
  );
};

export default ChatArea;
