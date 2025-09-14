// dragManager.js
let currentZIndex = 10;

export function makeDraggable(element, container) {
  let isDragging = false;
  let offsetX, offsetY;

  element.addEventListener('mousedown', function(e) {
    isDragging = true;
    bringToFront(element);

    const rect = element.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    e.preventDefault();
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;

    const x = e.clientX - offsetX - container.getBoundingClientRect().left;
    const y = e.clientY - offsetY - container.getBoundingClientRect().top;

    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
  });
}

export function bringToFront(element) {
  currentZIndex++;
  element.style.zIndex = currentZIndex;
}