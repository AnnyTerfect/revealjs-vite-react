function Align({ children }) {
  return `\\begin{align}
    ${children.map((row) => (
    row.join('&')
  )).join('\\\\')}
  \\end{align}`;
}

export default Align;
