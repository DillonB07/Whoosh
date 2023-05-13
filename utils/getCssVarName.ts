export default function getCssVarName(css: string) {
  const m = css ? css.trim().match(/^var\((--.+?)(,.*)?\)$/) : null;
  return m ? m[1] : "";
}
