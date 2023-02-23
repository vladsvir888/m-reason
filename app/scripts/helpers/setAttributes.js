export default function setAttributes(element, attrs) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (const key in attrs) {
    element.setAttribute(key, attrs[key]);
  }
}
