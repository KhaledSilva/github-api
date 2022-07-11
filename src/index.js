import React from "react";
import {createRoot} from "react-dom/client";
import Providers from "./providers";
const Wrapper = document.getElementById('root');
const root = createRoot(Wrapper);
root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
);