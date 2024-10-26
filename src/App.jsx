import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";
import { ViewOne } from "./pages/ViewOne";
import { ViewTwo } from "./pages/ViewTwo";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/view-one" element={<ViewOne />} />
          <Route path="/view-two" element={<ViewTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
