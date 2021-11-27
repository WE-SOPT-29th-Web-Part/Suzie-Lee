import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
  return (
    <>
      {/* Swith,exact 없어짐
    component->element로 변경
    Switch -> Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/write" element={<Write />} />
          <Route path="/article/edit/:id" element={<Write />} />

          <Route path="/article/:id" element={<Article />} />

          <Route path="/*" element={<Home />} />

          <Route element={() => <div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
