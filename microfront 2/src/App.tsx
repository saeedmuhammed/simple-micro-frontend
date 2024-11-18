import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
const Button = React.lazy(() => import("host/Button"));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div className="mt-10 text-3xl mx-auto max-w-6xl flex justify-center items-center ">
      <div className="w-96 h-96 bg-slate-500 rounded-md flex flex-col gap-5 justify-center items-center text-center">
        <div className="text-white">This is the second micro front end app</div>
        <Suspense fallback={<div>Loading...</div>}>
          <Button className={"!bg-blue-500"} />
        </Suspense>
      </div>
    </div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
