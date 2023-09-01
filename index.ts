async function dncValidation(): Promise<any | null> {
  try {
    const Client_URL: string = window.location.href;
    const apiEndpoint: string = 'https://srv.workspace.policybind.com/api/validate-visitor';

    const response: Response = await fetch(apiEndpoint, {
      method: 'get',
      headers: {
        'Client-URL': Client_URL,
      },
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const responseData: any = await response.json();
    console.log('API Response:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error making API call:', error);
    return null;
  }
}

export default dncValidation;
