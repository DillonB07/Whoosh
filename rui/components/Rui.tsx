import { useThemeValues } from "@replit/extensions-react";
import { replitDarkTokens as replitDark } from "../themes/replitDark";
import { globalTokens, rcss } from "../themes";
import React from "react";
import { Surface } from "./Surface";

export default function Rui({ children }: any) {
  const themeValues = useThemeValues();
  return (
    <React.Fragment>
      <style>
        {`
              :root,
        .replit-ui-theme-root {
          ${[
            ...Object.entries(themeValues || replitDark || {}),
            ...Object.entries(globalTokens || {}),
          ]
            .map(([key, val]) =>
              key === "__typename"
                ? ""
                : `  --${key
                    .replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())
                    .replace(/[a-z][0-9]/g, (c) => `${c[0]}-${c[1]}`)}: ${val};`
            )
            .join("\n")}
        }`}
      </style>
      <Surface
        background="root"
        elevated
        className="replit-ui-theme-root"
        css={[
          rcss.flex.column,
          rcss.colWithGap(8),
          rcss.center,
          rcss.minWidth("100vw"),
          rcss.minHeight("100vh"),
        ]}
      >
        {children}
      </Surface>
    </React.Fragment>
  );
}
