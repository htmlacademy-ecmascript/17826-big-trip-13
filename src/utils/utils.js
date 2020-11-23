export const render = (template, place, container) => {
  if (container) {
    container.insertAdjacentHTML(place, template);
  }
  return;
};
