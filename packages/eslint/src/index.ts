import javascript from "@eslint/js";
import unicorn from "eslint-plugin-unicorn";

const config = () => {
  return [javascript.configs.recommended, unicorn.configs.recommended];
};

export default config;
