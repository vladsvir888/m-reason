export default function calcScrollHeight(element) {
  return `${element.scrollHeight / parseInt(window.getComputedStyle(document.body).fontSize, 10)}rem`;
}
