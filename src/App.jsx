import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./HomePage";
import { VideoPage } from "./VideoPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/room/:roomId",
      element: <VideoPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
