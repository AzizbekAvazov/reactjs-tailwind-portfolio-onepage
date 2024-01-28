import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Layout/Navbar/Nav";

function App() {
  return (
      <BrowserRouter>
          <Nav />
          <Routes>
              <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
