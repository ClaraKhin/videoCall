import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/room/:roomId",
      element: <h1>Room</h1>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
