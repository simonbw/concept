import { useCallback } from "react";
import { isLockdownEnabled } from "../../../server/utils/envUtils";
import { useDocumentEvent, useKeyDown } from "../../hooks/useKeyDown";

// Used for making sure the users can't get off the page
export const Lockdown: React.FC = () => {
  useKeyDown(
    useCallback((event) => {
      // Get rid of any possible shortcuts
      if (isLockdownEnabled() && event.metaKey) {
        event.preventDefault();
        event.stopPropagation();
      }
      // TODO: Get rid of function keys
    }, []),
  );

  useDocumentEvent(
    "contextmenu",
    useCallback((event) => {
      event.preventDefault();
    }, []),
  );

  return null;
};
