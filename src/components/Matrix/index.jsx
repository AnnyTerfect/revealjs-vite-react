function Matrix(elements) {
  return `\\begin{matrix}
    ${elements.map((row) => (
    row.join('&')
  )).join('\\\\')}
  \\end{matrix}`;
}

export default Matrix;
