const dncValidation = require('./index');

dncValidation()
  .then((response) => {
    console.log('Response from dncValidation:', response);
  })
  .catch((error) => {
    console.error('Error calling dncValidation:', error);
  });
