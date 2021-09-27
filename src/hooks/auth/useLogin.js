import { useCallback } from "react";
import { ApiRequestType } from "../../utils/constants";
import useMutation from "../generics/useMutation";

export const useLogin = () => {
  const {
    error,
    isLoading,
    isSuccess,
    handleRequest,
    successResponse,
  } = useMutation({});

  const sendRequest = useCallback(
    async (email, password) => {
      return await handleRequest({
        url: `/auth/signin`,
        requestType: ApiRequestType.POST,
        data: { email, password },
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

export default useLogin;