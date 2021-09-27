import { useCallback, useState } from "react";
import { useApi } from "../../context/Api";

export const useMutation = ({ defaultLoadingState = false }) => {
  /** Api request states */
  const api = useApi(); // api context value
  const [isError, setIsError] = useState(false); // on error hook
  const [error, setError] = useState(); // on error hook
  const [isLoading, setIsLoading] = useState(defaultLoadingState); // on loading hook
  const [isSuccess, setIsSuccess] = useState(false); // on success hook
  const [successResponse, setSuccessResponse] = useState(false); // on success hook

  /**
   * hook will process api action and
   * handle states according to response
   *
   */
  const handleRequest = useCallback(
    async ({ url, requestType, data, config = {} }) => {
      // Set request state as started
      console.log("started__");
      setIsLoading(true);
      setError(null);
      setIsError(false);
      setIsSuccess(false);
      try {
        const response = await api[requestType](url, data, config); // process api request async
        // Set request state as ended and successful
        setIsLoading(false);
        setSuccessResponse(response?.data || response);
        setIsSuccess(true);
        setIsSuccess(false);
      } catch (e) {
          console.log(e);
        // Set request state as ended and failed
        setError(e?.response || { data: { error: "Could not make request" } });
        setIsError(true);
        setIsLoading(false);
        setIsError(false);
      }
    },
    [api]
  );

  return {
    isLoading,
    error,
    isError,
    handleRequest,
    isSuccess,
    successResponse,
  };
};

export default useMutation;