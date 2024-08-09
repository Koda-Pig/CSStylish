export function shuffleTitleColour(
  cardElement: HTMLButtonElement,
  styles: CSSStyleDeclaration
) {
  let index = 1;

  const transitionDuration = parseInt(
    styles.getPropertyValue("--transition-glow")
  );

  const gradients = [
    "#f6e96b, #bedc74, #a2ca71, #387f39, #f6e96b",
    "#7C00FE, #F9E400, #FFAF00, #F5004F, #7C00FE",
    "#6C946F, #FFD35A, #FFA823, #DC0083, #6C946F",
    "#77E4C8, #36C2CE, #478CCF, #4535C1, #77E4C8",
    "#D6EFD8, #80AF81, #508D4E, #1A5319, #D6EFD8"
  ];

  cardElement.addEventListener("click", () => {
    cardElement.classList.add("glow");
    cardElement.style.pointerEvents = "none";
    setTimeout(() => {
      cardElement.classList.remove("glow");
      cardElement.style.pointerEvents = "";
    }, transitionDuration);
    cardElement.style.setProperty("--gradient-1", gradients[index]);
    index = index === gradients.length - 1 ? 0 : index + 1;
  });
}
