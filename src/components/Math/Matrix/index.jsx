function Matrix({ children }) {
  return `\\begin{matrix}
    ${children.map((row) => (
    row.join('&')
  )).join('\\\\')}
  \\end{matrix}`;
}

export default Matrix;
