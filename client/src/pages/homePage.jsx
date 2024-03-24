import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import HomeNavbar from "../components/HomeNavbar";
import CreateQuestion from "../components/CreateQuestion";
import Questions from "../components/Questions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomePage = () => {
  // const { currentUser } = useContext(AuthContext);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-slate-50">
        <HomeNavbar />
        <CreateQuestion />
        <hr className="my-3 mt-4 w-[40%] mx-auto" />
        <div>
          <Questions />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default HomePage;
