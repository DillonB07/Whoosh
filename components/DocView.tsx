import { rcss, tokens } from "rui";
import getCssVarName from '../utils/getCssVarName';

const DocView = ({ pkgName }: { pkgName: string | undefined; }) => {
  const htmlStyles = getComputedStyle(document.documentElement);

  const params = new URLSearchParams();

  params.set('color', htmlStyles.getPropertyValue(getCssVarName(tokens.foregroundDefault)));
  params.set('background-color', htmlStyles.getPropertyValue(getCssVarName(tokens.backgroundDefault)));

  return (
    <iframe src={`${process.env.NEXT_PUBLIC_SERVER}/docs/${pkgName}?${params}`} css={[{
      border: 'none'
    }, rcss.flex.grow(1)]} />
  );
}; 10 / 10;
export default DocView;