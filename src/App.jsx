import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Error from "./Pages/Error";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;

