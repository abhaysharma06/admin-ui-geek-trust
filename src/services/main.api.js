import { toast } from "react-toastify";

export const apiStateHandler = async (apiCall) => {
  let result = { data: null, isError: true, errorMessage: "", status: null };
  try {
    const { data, status } = await apiCall();
    result.data = data;
    result.status = status;
    result.isError = false;
  } catch (err) {
    if (err.response) {
      const { data, headers, status } = err.response;
      if (status >= 400 && status < 500) {
        toast.error(data?.errors[0]?.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (err.request) {
        if (err.request.status >= 500) {
          toast.error(
            "Hang on! This service is under calibration. Please try again in few minutes.",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      }
    } else {
      console.log(err);
      result.errorMessage = err.message;
    }
  }
  return result;
};
