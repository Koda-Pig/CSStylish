import "./style.scss";
import { shuffleTitleColour } from "./shuffle.ts";

const titleElem = document.querySelector<HTMLButtonElement>("#shuffle");
const themeCheckboxElem = document.querySelector<HTMLInputElement>(
  "#switch-theme-checkbox"
);

if (titleElem && themeCheckboxElem) {
  shuffleTitleColour(titleElem);
}
