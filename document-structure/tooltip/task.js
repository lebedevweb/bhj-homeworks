'use strict';

const hasTooltips = Array.from(document.querySelectorAll('a.has-tooltip'));
const tooltipDiv = document.createElement('div');
tooltipDiv.className = "tooltip tooltip_active";
let activeTooltip;

document.addEventListener('scroll', () => tooltipDiv.remove());
hasTooltips.forEach((tooltip) =>
  tooltip.addEventListener('click', (evt) => {
    evt.preventDefault();
    let currentElement = evt.target;
    if (currentElement === activeTooltip) {
      tooltipDiv.remove()
      activeTooltip = '';
      return;
    }
    activeTooltip = currentElement;
    document.body.append(tooltipTemplate(currentElement))
  }));

function tooltipTemplate(currentElement) {
  tooltipDiv.innerHTML = currentElement.title;
  let coords = currentElement.getBoundingClientRect();
  tooltipDiv.setAttribute('style', `left: ${coords.left}px; top: ${coords.top + coords.height}px`);
  return tooltipDiv;
}
