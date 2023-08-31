// test.js

const dncValidation = require('./index'); //path index.js

async function test() {
  const response = await dncValidation();
  console.log('Test Response:', response);
}

test();
