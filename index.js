async function dncValidation() {
    try {
    var Client_URL = window.location.href;
    //var Client_URL = "https://healthsubsidyplan.com/v2/"
      var apiEndpoint = 'https://srv.workspace.policybind.com/api/validate-visitor';
      const response = await fetch(apiEndpoint, {
        method: 'get',
        headers: {
          'Client-URL': Client_URL
        }
      });
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const responseData = await response.json();
      console.log('API Response:', responseData);
      return responseData;
    } catch (error) {
      console.error('Error making API call:', error);
      return null;
    }
  }
  module.exports = dncValidation;