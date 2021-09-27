import { useCallback } from "react";
import { ApiRequestType } from "../../utils/constants";
import useMutation from "../generics/useMutation";

export const useWallet = () => {
  const {
    error,
    isLoading,
    isSuccess,
    handleRequest,
    successResponse,
  } = useMutation({});

  const sendRequest = useCallback(
    async (userId) => {
      return await handleRequest({
        url: `/wallet/${userId}`,
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

export default useWallet;