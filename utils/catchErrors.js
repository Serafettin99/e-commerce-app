const catchErrors = (error, displayError) => {
  let errorMsg;
  if (error.response) {
    // The request was made and the server responded with a
    // status code that is not in the range of 2XX

    errorMsg = error.response.data;
    console.error({ errorResponse: errorMsg });

    // For Cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error;
    }
  } else if (error.request) {
    // The request was made, but no response was received
    errorMsg = error.request;
    console.error({ errorRequest: errorMsg });
  } else {
    // Something else happened in making the request that triggered an error
    errorMsg = error.message;
    console.error({ errorMessage: errorMsg });
  }
  displayError(errorMsg);
};

export default catchErrors;
