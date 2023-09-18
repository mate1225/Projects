import { useState } from "react";
import "./App.css";
//jsx
import HeaderComponent from "./components/HeaderComponents/HeaderComponent";
import FrontendMentor from "./components/Frontend_Mentor/FrontendMentor";
function App() {
  return (
    <article className="flex  flex-col items-center justify-center ">
      <HeaderComponent />
      <main className="mb-5 mt-8 max-w-[1440px]">
        <FrontendMentor />
      </main>
    </article>
  );
}

export default App;
