import { useContext } from "react";

import ApiContext from "./ApiContext";

/**
 * Context Hook holding farmer instance during farmer form process
 */
const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within an ApiContext");
  }

  return context;
};

export default useApi;