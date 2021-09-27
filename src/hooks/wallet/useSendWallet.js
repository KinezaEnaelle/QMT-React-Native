import { useCallback } from "react";
import { ApiRequestType } from "../../utils/constants";
import useMutation from "../generics/useMutation";
import { getData } from "../../helper/storageHelper";

export const useSendWallet = () => {
  const {
    error,
    isLoading,
    isSuccess,
    handleRequest,
    successResponse,
  } = useMutation({});

  const sendRequest = useCallback(
    async (amount, phoneNumber, password) => {
      const token = await getData('token')
      return await handleRequest({
        url: `/wallet/transfer`,
        requestType: ApiRequestType.PUT,
        data: { amount, phoneNumber ,password },
        config: {headers: {token}}
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

export default useSendWallet;