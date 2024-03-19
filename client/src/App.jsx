import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddQuestionPage from "./pages/AddQuestionPage";
import EditQuestionPage from "./pages/EditQuestionPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/addquestion",
    element: <AddQuestionPage />,
  },
  {
    path: "/editquestion",
    element: <EditQuestionPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
