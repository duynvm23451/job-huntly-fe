import ChatArea from "@/components/disposable/ChatArea";
import SearchIcon2 from "@/components/icons/SearchIcon2";
import { formatTimeDifference, formatTimestampToDate } from "@/utils/hepler";
import { getChatRooms } from "@/utils/http";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";

const Messages = () => {
  const token = useRouteLoaderData("root");
  const [chatRooms, setChatRooms] = useState([]);
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [selectedChatRoom, setSelectedChatRoom] = useState(null);
  const params = useParams();
  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const response = await getChatRooms({}, token);
        setChatRooms(response.data);
        if (selectedChatRoom == null && params.chatRoomId == null) {
          setSelectedChatRoom(response.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchChatRooms();
  }, []);
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="m-6 flex justify-between">
        <h1 className="text-2xl font-bold">Tin nhắn</h1>
        <button
          className="border-1 border-custom-neutral-2 text-custom-violet text-lg font-semibold rounded-sm px-5 pt-1.5 pb-2"
          onClick={handleClick}
        >
          Trở về dashboard
        </button>
      </div>
      <div className="pl-6 border-t-1 border-custom-neutral-2 flex relative">
        <nav className="w-fit h-screen pt-4 pr-6 border-r-1 border-custom-neutral-2 sticky top-0">
          <div className="relative">
            <input
              className="pl-10 border-custom-neutral-2 focus:outline-none focus:border-none focus:ring-1 focus:ring-custom-neutral-2"
              placeholder="Nhập từ khóa"
            />
            <SearchIcon2 className="absolute bottom-2.5 w-6 h-6 left-2 text-custom-neutral-2" />
          </div>
          <ul className="mt-4">
            {chatRooms.length !== 0 &&
              chatRooms &&
              chatRooms.map((el) => (
                <Link
                  to={el.id}
                  key={el.id}
                  className={`p-3 flex items-center border-b-1 ${
                    el.id == params.chatRoomId ||
                    (selectedChatRoom && el.id == selectedChatRoom.id)
                      ? "bg-violet-50 border-violet-50"
                      : "border-custom-neutral-2"
                  }`}
                >
                  <img
                    src="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
                    alt="avatar"
                    className="w-10 h-10 mr-4 rounded-full"
                  />
                  <div>
                    <span className="font-semibold">
                      {loggedInUser.role === "EMPLOYEE"
                        ? el.company.name
                        : el.user.fullName}
                    </span>
                    <p className="text-sm text-gray-500">
                      {formatTimeDifference(el.updatedAt)}
                    </p>
                  </div>
                </Link>
              ))}
          </ul>
        </nav>
        {selectedChatRoom && <ChatArea chatRoomId={selectedChatRoom.id} />}
        <Outlet />
      </div>
    </div>
  );
};

export default Messages;
