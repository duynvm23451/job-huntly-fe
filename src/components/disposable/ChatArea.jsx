import { getChatRoomById, getMessagesList } from "@/utils/http";
import React, { useMemo } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import WarningIcon from "../icons/WarningIcon";
import useGetData from "@/hooks/useGetData";
import RectangleButton from "../shared/RectangleButton";
import { useSelector } from "react-redux";
import PinIcon from "../icons/PinIcon";
import StarIcon from "../icons/StarIcon";
import ThreeDotVertical from "../icons/ThreeDotVertical";

const ChatArea = ({ chatRoomId }) => {
  const token = useRouteLoaderData("root");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const params = useParams();
  let id;
  if (chatRoomId) {
    id = chatRoomId;
  } else {
    id = params.chatRoomId;
  }
  const queryParams = useMemo(
    () => ({
      id,
      token,
    }),
    [params]
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
  } = useGetData(getMessagesList, queryParams);
  if (isLoadingMessages || isLoadingChatRoom) {
    return <p>Loading...</p>;
  }
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
  return (
    <div className="w-full relative">
      {dataChatRoom && (
        <div className="px-4 py-3 border-b-1 border-custom-neutral-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
              alt="logo"
              className="w-12 h-12 rounded-full mr-4"
            />
            <p className="text-lg font-semibold">
              {loggedInUser && loggedInUser.role == "EMPLOYEE"
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
      <p>ChatArea {id}</p>
      <div className="absolute bottom-8 right-24 left-24 p-2 border-1 border-custom-neutral-2 bg-white flex">
        <input
          className="w-full focus:outline-none border-none focus:ring-0 text-gray-400"
          placeholder="Gửi tin nhắn"
        />
        <RectangleButton>Gửi</RectangleButton>
      </div>
    </div>
  );
};

export default ChatArea;
