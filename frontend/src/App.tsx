import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto p-4 font-primary">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
