import { useEffect, useLayoutEffect } from "react";

/**
 * intelligently switches between useLayoutEffect on the client,
 * and useEffect on the server where useLayoutEffect is not supported.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
