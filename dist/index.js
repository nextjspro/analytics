"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const script_1 = __importDefault(require("next/script"));
const Analytics = ({ gid }) => {
    const gidPattern = /^G-[A-Z0-9]+$/;
    if (!gidPattern.test(gid)) {
        console.warn(`Invalid Google Analytics Tracking ID: ${gid}`);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(script_1.default, { strategy: "lazyOnload", src: `https://www.googletagmanager.com/gtag/js?id=${gid}` }),
        react_1.default.createElement(script_1.default, { id: "Nlytics", strategy: "lazyOnload" }, `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gid}', {
            page_path: window.location.pathname,
          });
        `)));
};
exports.default = Analytics;
