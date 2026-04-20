import React from "react";
import { useParams } from "react-router-dom";

export const VideoPage = () => {
  const params = useParams();
  const roomId = params.roomId;
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-4xl font-bold text-white">Room ID: {roomId}</h1>
    </div>
  );
};
