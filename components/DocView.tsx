import { rcss, tokens } from "rui";
import getCssVarName from '../utils/getCssVarName';

const DocView = ({ pkgName }: { pkgName: string | undefined; }) => {
  const htmlStyles = getComputedStyle(document.documentElement);

  const hash = new URLSearchParams();

  hash.set('color', htmlStyles.getPropertyValue(getCssVarName(tokens.foregroundDefault)));
  hash.set('background', htmlStyles.getPropertyValue(getCssVarName(tokens.backgroundDefault)));

  return (
    <iframe src={`${process.env.NEXT_PUBLIC_SERVER}/docs/${pkgName}#${hash}`} css={[{
      border: 'none'
    }, rcss.flex.grow(1)]} />
  );
};
export default DocView;