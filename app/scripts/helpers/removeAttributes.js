export default function removeAttributes(element, ...attrs) {
  attrs.forEach((attr) => element.removeAttribute(attr));
}
