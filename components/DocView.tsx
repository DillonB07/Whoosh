import { rcss, tokens } from "rui";

const DocView = ({ pkgName }: { pkgName: string | undefined; }) => {
  const htmlStyles = getComputedStyle(document.documentElement);

  const hash = new URLSearchParams();

  hash.set('color', htmlStyles.getPropertyValue('--foreground-default'));
  hash.set('background', htmlStyles.getPropertyValue('--background-default'));

  return (
    <iframe src={`${process.env.NEXT_PUBLIC_SERVER}/docs/${pkgName}#${hash}`} css={[{
      border: 'none'
    }, rcss.flex.grow(1)]} />
  );
};
export default DocView;