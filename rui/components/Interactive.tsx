import { tokens as globalTokens } from "../themes";
import { TRANSITIONS } from "../constants";

export const interactiveTokens = {
  interactiveBackground: "--interactive-background",
  interactiveBackgroundActive: "--interactive-background--active",

  interactiveBorder: "--interactive-border",
  interactiveBorderHover: "--interactive-border--hover",
};

export const interactiveVars = {
  interactiveBackground: `var(${interactiveTokens.interactiveBackground})`,
  interactiveBackgroundActive: `var(${interactiveTokens.interactiveBackgroundActive})`,

  interactiveBorder: `var(${interactiveTokens.interactiveBorder})`,
  interactiveBorderHover: `var(${interactiveTokens.interactiveBorderHover})`,
};

const borderActive = globalTokens.accentPrimaryDefault;

/** focus ring styles. see rcss.focusRing for info */
export const focusRing = {
  ":focus": {
    boxShadow: "0 0 0 2px " + borderActive,
    /* Visible in Windows high-contrast themes */
    outline: "2px solid transparent",
    outlineOffset: "4px",
    ":not(:focus-visible)": {
      outline: "none",
      boxShadow: "none",
    },
  },
} as const;

/**
 * `Interactive` is a set of utilities you can use to build interactive components, like `Button`, `Checkbox` or `MenuItem`. Interactive elements come with hover, focus, active, and disabled styles out of the box. Additionally, elements that use an `Interactive` utility will get elevation-specific rendering out of the box when placed in a `Surface`.
 *
 * You can use interactive utilities in your element by importing and passing them to the `css` prop:
 */
export const interactive = {
  nofill: {
    transitionProperty: "background-color, box-shadow",
    transitionDuration: TRANSITIONS.duration,
    transitionTimingFunction: TRANSITIONS.timingFunction,
    borderRadius: globalTokens.borderRadius8,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    ":not([disabled])": {
      ...focusRing,
      cursor: "pointer",
      "@media (hover: hover)": {
        ":hover": {
          backgroundColor: interactiveVars.interactiveBackground,
        },
      },
      ":not(textarea):active": {
        backgroundColor: interactiveVars.interactiveBackground,
        borderColor: borderActive,
      },
    },
  },
  filled: {
    transitionProperty: "background-color, box-shadow",
    transitionDuration: TRANSITIONS.duration,
    transitionTimingFunction: TRANSITIONS.timingFunction,
    borderRadius: globalTokens.borderRadius8,
    backgroundColor: interactiveVars.interactiveBackground,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    ":not([disabled])": {
      ...focusRing,
      cursor: "pointer",
      "@media (hover: hover)": {
        ":hover": {
          backgroundColor: interactiveVars.interactiveBackgroundActive,
        },
      },
      ":active": {
        backgroundColor: interactiveVars.interactiveBackgroundActive,
        borderColor: borderActive,
      },
    },
  },
  outlined: {
    transitionProperty: "background-color, box-shadow",
    transitionDuration: TRANSITIONS.duration,
    transitionTimingFunction: TRANSITIONS.timingFunction,
    borderRadius: globalTokens.borderRadius8,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: interactiveVars.interactiveBorder,
    ":not([disabled])": {
      ...focusRing,
      cursor: "pointer",
      "@media (hover: hover)": {
        ":hover": {
          backgroundColor: interactiveVars.interactiveBackground,
        },
      },
      ":not(textarea):active": {
        borderColor: borderActive,
      },
    },
  },
  filledAndOutlined: {
    transitionProperty: "border-color, box-shadow",
    transitionDuration: TRANSITIONS.duration,
    transitionTimingFunction: TRANSITIONS.timingFunction,
    borderRadius: globalTokens.borderRadius8,
    backgroundColor: interactiveVars.interactiveBackground,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    ":not([disabled])": {
      borderColor: interactiveVars.interactiveBorder,
      ...focusRing,
      cursor: "pointer",
      "@media (hover: hover)": {
        ":hover": {
          borderColor: interactiveVars.interactiveBorderHover,
        },
      },
      ":not(textarea):active": {
        borderColor: borderActive,
        transition: "none",
      },
    },
  },
  listItem: {
    transitionProperty: "box-shadow",
    transitionDuration: TRANSITIONS.duration,
    transitionTimingFunction: TRANSITIONS.timingFunction,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    ":not([disabled])": {
      ...focusRing,
      cursor: "pointer",
      "@media (hover: hover)": {
        ":hover": {
          backgroundColor: interactiveVars.interactiveBackground,
        },
      },
      ":not(textarea):active": {
        backgroundColor: interactiveVars.interactiveBackgroundActive,
        borderColor: borderActive,
      },
    },
  },
} as const;
