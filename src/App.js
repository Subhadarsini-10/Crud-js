import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Layout/Navbar";
import Error from "./components/Pages/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUsers from "./components/Users/AddUsers";
import EditUser from "./components/Users/EditUser";
import User from "./components/Users/User";
import Login from "./components/Pages/Login";
import MainPage from "./components/Pages/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/user/add" element={<AddUsers />}></Route>
          <Route exact path="/user/edit/:id" element={<EditUser />}></Route>
          <Route exact path="/user/:id" element={<User />}></Route>
          <Route exact path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
