import { useState } from "react";
import "./App.css";
//jsx
import Lv1 from "./components/lv1";
import Lv2 from "./components/lv2";
function App() {
  return (
    <article className=" m-5 flex  items-center justify-center lg:m-5">
      <main className="max-w-[1440px]">
        <Lv1 />
        <Lv2 />
      </main>
    </article>
  );
}

export default App;
