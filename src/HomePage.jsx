import React from "react";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1
        className="text-4xl font-bold text-white"
        style={{ marginBottom: "2rem" }}
      >
        Welcome to the Video App
      </h1>
      <input
        type="text"
        placeholder="Enter Room ID"
        className=" outline-none rounded"
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          width: "300px",
          textAlign: "center",
          fontSize: "1rem",
          border: "1px solid #ccc",
          color: "#fff",
        }}
      />
      <button
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
