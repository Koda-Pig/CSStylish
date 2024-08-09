export function shuffleTitleColour(
  titleElement: HTMLButtonElement,
  themeCheckboxElement: HTMLInputElement
) {
  let index = 0;

  titleElement.addEventListener("click", () => {
    const saturation = Math.floor(Math.random() * 51) + 40;
    const lightness = Math.floor(Math.random() * 51) + 40;
    titleElement.style.color = `hsl(${
      index * 10
    }deg, ${saturation}%, ${lightness}%)`;

    index = index >= 360 ? 0 : index + 10;
  });
}
