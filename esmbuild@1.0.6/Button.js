// src/Button.tsx
import {
  createElement
} from "react";

// esbuild-css-modules-plugin-namespace:/var/folders/lp/f1kdb05d0z12ssgn1cxz80200000gn/T/tmp-3617-eDmqklN0MdHP/example-framer-esm-setup/src/Button.modules.css.js
var digest = "e67623ed9bd3d1923105522c1f137a1f45085677ab1ab79e36881b7a17b9c3ec";
var css = `._button_kpmle_1 {
  background-color: #c8d5ff;
}
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Button_modules_css_default = { "button": "_button_kpmle_1" };

// src/Button.tsx
function Button({ title = "Title" }) {
  return /* @__PURE__ */ createElement("button", {
    className: Button_modules_css_default.button
  }, title);
}
export {
  Button
};
