export default function If({ teste, children }) {
  if (teste) return children;
  return false;
}
