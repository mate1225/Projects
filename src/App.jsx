import { useState } from "react";
import "./App.css";
//jsx

import FrontendMentor from "./components/Frontend_Mentor/FrontendMentor";
function App() {
  return (
    <article className=" m-5 flex  items-center justify-center lg:m-5">
      <main className="max-w-[1440px]">
        <FrontendMentor />
      </main>
    </article>
  );
}

export default App;
