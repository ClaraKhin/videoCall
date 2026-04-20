import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    if (roomId) {
      navigate(`/room/${roomId}`);
    } else {
      alert("Please enter a room ID");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1
        className="text-4xl font-bold text-white"
        style={{ marginBottom: "2rem" }}
      >
        Welcome to the Video App
      </h1>
      <input
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        type="text"
        placeholder="Enter Room ID"
        className=" border-none bg-black bg-opacity-50"
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          width: "300px",
          textAlign: "center",
          fontSize: "1rem",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          outline: "none",
        }}
      />
      <button
        onClick={handleJoinRoom}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        style={{
          fontSize: "1rem",
          padding: "0.5rem 1rem",
          border: "none",
          cursor: "pointer",
          width: "300px",
          textAlign: "center",
          backgroundColor: "#007BFF",
          color: "#fff",
          borderRadius: "4px",
        }}
      >
        Join Room
      </button>
    </div>
  );
};
