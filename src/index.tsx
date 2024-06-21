
import ReactDOM from "react-dom";
import App from "./App";
import NavBar from "./components/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Trainers from './pages/Trainers'; 

const root = ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/trainers" element={<Trainers />} /> 
    </Routes>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
