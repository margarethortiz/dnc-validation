 const dncValidation = require('./index');
dncValidation()
  .then((response) => {
    console.log('Response from dncValidation:', response);

    const phoneNumber = dncValidation.getPhoneNumber();
    console.log('Phone Number:', phoneNumber);

  })
  .catch((error) => {
    console.error('Error calling dncValidation:', error);
  });
