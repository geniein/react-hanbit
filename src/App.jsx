import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Policy from "./pages/Policy";
import Service from "./pages/Service";
import Article from "./pages/Article";
import Direction from "./pages/Direction";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="intro" element={<Intro />} />
          <Route path="policy" element={<Policy />} />
          <Route path="service" element={<Service />} />
          <Route path="article" element={<Article />} />
          <Route path="direction" element={<Direction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
