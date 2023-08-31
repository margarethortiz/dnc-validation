// index.js

async function dncValidation() {
    const apiKey = process.env.API_KEY;

    try {

    var Client_URL = window.location.href;
      
      var apiEndpoint = 'https://policybind-workspace.ngrok.io/api/validate-visitor';
  
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
  