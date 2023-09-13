let responseData = null; // Define responseData as a shared variable

async function dncValidation() {
  try {
    var Client_URL = window.location.href;
    //var Client_URL = "http://seniorsavingsalerts.com/flex-v4?clickid=123&angle=1";

    var apiEndpoint =
      "https://workspace-api2-age0a270.wl.gateway.dev/api/validate-visitor";

    const response = await fetch(apiEndpoint, {
      method: "get",
      headers: {
        "Client-URL": Client_URL,
      },
    });
    if (!response.ok) {
      throw new Error("API request failed");
    }
    responseData = await response.json();
    console.log("API Response:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error making API call:", error);
    return null;
  }
}

// Define utility functions as properties of dncValidation

dncValidation.getPhoneNumber = function () {
  if (responseData && responseData.phone_number) {
    return responseData.phone_number;
  } else {
    return null; //not found.
  }
};

dncValidation.getPath = function () {
  if (responseData && responseData.metadata && responseData.metadata.path) {
    return responseData.metadata.path;
  } else {
    return null; //not found.
  }
};

dncValidation.getIsValid = function () {
  if (responseData && responseData.isValid !== undefined) {
    return responseData.isValid;
  } else {
    return null; //not found.
  }
};

dncValidation.getUserAgent = function () {
  if (
    responseData &&
    responseData.metadata &&
    responseData.metadata.userAgent
  ) {
    return responseData.metadata.userAgent;
  } else {
    return null; //not found.
  }
};

dncValidation.getIsOpen = function () {
  if (
    responseData &&
    responseData.metadata &&
    responseData.metadata.isValidResp
  ) {
    return responseData.metadata.isValidResp.isOpen;
  } else {
    return null; //not found.
  }
};

dncValidation.getIsMobile = function () {
  if (
    responseData &&
    responseData.metadata &&
    responseData.metadata.isValidResp
  ) {
    return responseData.metadata.isValidResp.isMobile;
  } else {
    return null; //not found.
  }
};

dncValidation.getHasParams = function () {
  if (
    responseData &&
    responseData.metadata &&
    responseData.metadata.isValidResp
  ) {
    return responseData.metadata.isValidResp.hasParams;
  } else {
    return null; //not found.
  }
};

dncValidation.getIsDesktop = function () {
  if (
    responseData &&
    responseData.metadata &&
    responseData.metadata.isValidResp
  ) {
    return responseData.metadata.isValidResp.isDesktop;
  } else {
    return null; //not found.
  }
};

dncValidation.getDomain = function () {
  if (responseData && responseData.metadata && responseData.metadata.dominio) {
    return responseData.metadata.dominio;
  } else {
    return null; //not found.
  }
};

dncValidation.getValidation = function () {
  if (
    responseData &&
    responseData.metadata &&
    responseData.metadata.isValidResp
  ) {
    return responseData.metadata.isValidResp.validation;
  } else {
    return null; //not found.
  }
};

dncValidation.getNumberpool_url = function () {
  if (responseData && responseData.numberpool_url) {
    return responseData.numberpool_url;
  } else {
    return null; //not found.
  }
};

module.exports = dncValidation;
