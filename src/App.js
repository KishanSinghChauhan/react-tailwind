import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Insrtructor from "./components/Instructor";
import Message from "./components/Message";
import Introduction from "./components/Introduction";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Insrtructor />
      <Message />
      <Introduction />
    </>
  );
};

export default App;
