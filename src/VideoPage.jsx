import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export const VideoPage = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const videoContainer = useRef(null);

  useEffect(() => {
    if (!roomId || !videoContainer.current) {
      navigate("/", { replace: true });
      return undefined;
    }

    const appId = Number(
      import.meta.env.VITE_ZEGO_APP_ID ?? "1121175212"
    );
    const serverSecret =
      import.meta.env.VITE_ZEGO_SERVER_SECRET ??
      "3ba7ccdfd3e453c6251627dc6ebde135";

    if (!appId || !serverSecret) {
      console.error("Missing Zego configuration.");
      navigate("/", { replace: true });
      return undefined;
    }

    document.body.classList.add("room-page");

    const storedUserId =
      sessionStorage.getItem("video-chat-user-id") ??
      crypto.randomUUID().replaceAll("-", "");
    const storedUserName =
      sessionStorage.getItem("video-chat-user-name") ??
      `Guest-${storedUserId.slice(-6)}`;

    sessionStorage.setItem("video-chat-user-id", storedUserId);
    sessionStorage.setItem("video-chat-user-name", storedUserName);

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      storedUserId,
      storedUserName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
        container: videoContainer.current,
        sharedLinks: [
          {
            name: "Copy Link",
            url: window.location.href,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
        showScreenSharingButton: true,
        showUserList: true,
        showTextChat: true,
        onLeaveRoom: () => {
          navigate("/", { replace: true });
        },
    });

    return () => {
      document.body.classList.remove("room-page");
      zp.destroy();
    };
  }, [navigate, roomId]);

  return <div ref={videoContainer} style={{ width: "100vw", height: "100vh" }} />;
};
