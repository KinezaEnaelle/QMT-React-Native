import { useCallback } from "react";
import { ApiRequestType } from "../../utils/constants";
import useMutation from "../generics/useMutation";

export const useTransaction = () => {
  const {
    error,
    isLoading,
    isSuccess,
    handleRequest,
    successResponse,
  } = useMutation({});

  const sendRequest = useCallback(
    async () => {
      return await handleRequest({
        url: `/transaction/viewTransaction`,
        requestType: ApiRequestType.GET,
      });
    },
    [handleRequest]
  );

  return {
    isLoading,
    error,
    sendRequest,
    isSuccess,
    successResponse,
  };
};

export default useTransaction;