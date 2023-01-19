export function scrollRight(element, width) {
  if (window.innerWidth > width) {
    element.scrollLeft += (window.innerWidth * 0.8) / 2 - 10;
  } else {
    element.scrollLeft += window.innerWidth * 0.9 - 15;
  }
}
export function scrollLeft(element, width) {
  if (window.innerWidth > width) {
    element.scrollLeft -= (window.innerWidth * 0.8) / 2 - 10;
  } else {
    element.scrollLeft -= window.innerWidth * 0.9 - 15;
  }
}
