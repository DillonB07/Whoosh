import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import autosize from "autosize";
import * as React from "react";

export default function useAutosize() {
  const [el, setEl] = React.useState<HTMLTextAreaElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!el) {
      return;
    }

    autosize(el);

    return () => {
      autosize.destroy(el);
    };
  }, [el]);

  return {
    ref: setEl,
    update: () => {
      if (el) {
        autosize.update(el);
      }
    },
  };
}
