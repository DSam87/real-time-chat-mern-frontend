import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import { motion } from "framer-motion";
import WelcomePopup from "./pages/WelcomPopup";
import MainDisplay from "./pages/MainDisplay";
import Home from "./pages/Home";
import { Login } from "./pages";
import Dashboard from "./pages/Dashboard";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div
      id="home"
      className="App h-screen w-screen bg-zinc-900 flex justify-between items-center relative overflow-hidden snap-y snap-always scroll-smooth snap-mandatory"
    >
      <MainDisplay>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dash" element={<Dashboard />}></Route>
        </Routes>
      </MainDisplay>
      {/* 
        MainDisplay is the container

        MainPage is the welcome with the ball

        Under is hidden signin

        Under is hidden login


        Chat room is on a diffrent page




      
       */}
      {/* <SideNav></SideNav> */}

      {/* <WelcomePopup /> */}
      {/* <Welcome /> */}
      {/* <Routes>
        <Route path="/" element={<ChatBox />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
