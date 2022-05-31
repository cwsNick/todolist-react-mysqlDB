import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/TaskTable";
import View from "./pages/View";
import Header from "./pages/components/Header"
import Footer from "./pages/components/Footer"
import TaskCard from "./pages/TaskCard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/card" element={<TaskCard/>} />
          <Route path="/addTask" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </div>
      <Footer / >
    </BrowserRouter>
  );
}

export default App;
