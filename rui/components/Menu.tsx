import * as React from "react";

import { rcss, tokens, Surface } from "..";

function MenuComponent({
  children,
  className,
  innerRef,
}: {
  children: React.ReactNode;
  /** Allows customizing button look via `css` prop */
  className?: string;
  innerRef?: React.ForwardedRef<HTMLUListElement>;
}) {
  return (
    <Surface
      className={className}
      tag="ul"
      elevated
      innerRef={innerRef}
      css={[
        {
          zIndex: 999,
          maxHeight: 300,
          position: "absolute" as "absolute",
          overflowY: "auto" as "auto",
          width: "100%",
          left: 0,
          top: tokens.space8,
          border: "1px solid",
          borderColor: tokens.outlineDimmest,
          listStyle: "none",
        },
        rcss.borderRadius(8),
      ]}
    >
      {children}
    </Surface>
  );
}

export const Menu = React.forwardRef<
  HTMLUListElement,
  Omit<React.ComponentProps<typeof MenuComponent>, "innerRef">
>((props, ref) => <MenuComponent innerRef={ref} {...props} />);
