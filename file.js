const fs = require('fs');
const content = 'Hello Node';

// Write the content to the file
fs.writeFileSync('welcome.txt', content);

console.log('File "welcome.txt" has been created with the content: ', content);