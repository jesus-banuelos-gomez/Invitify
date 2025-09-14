// js/clearDesign.js
export function clearDesign(container, lienzo) {
    while (lienzo.firstChild) {
        lienzo.removeChild(lienzo.firstChild);
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}