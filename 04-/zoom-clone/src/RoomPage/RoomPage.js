import React from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection.js/VideoSection";
import ChatSection from "./ChatSection/ChatSection";

import "./RoomPage.css";

const RoomPage = () => {
  return <div className="room_container">
    <ParticipantsSection />
    <VideoSection />
    <ChatSection />
  </div>;
};

export default RoomPage;
