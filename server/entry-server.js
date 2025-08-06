import { jsx, jsxs } from "react/jsx-runtime";
import { StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Outlet } from "react-router-dom";
function App() {
  return /* @__PURE__ */ jsx("div", { id: "detail", children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function render(_url, options) {
  return renderToPipeableStream(
    /* @__PURE__ */ jsxs(StrictMode, { children: [
      /* @__PURE__ */ jsx(App, {}),
      /* @__PURE__ */ jsx("vite-streaming-end", {})
    ] }),
    options
  );
}
export {
  render
};
