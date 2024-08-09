import "./style.scss";
import { shuffleTitleColour } from "./shuffle.ts";

const element = document.documentElement;
const styles = getComputedStyle(element);

const cardElem = document.querySelector<HTMLButtonElement>("#shuffle");

if (cardElem && styles) {
  shuffleTitleColour(cardElem, styles);
}
