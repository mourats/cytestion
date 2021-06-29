const fs = require('fs');

module.exports = (on) => {
  on(`task`, {
    error(message) {
      console.error('\x1b[31m', 'ERROR:', message, '\x1b[0m');
      return true;
    },
    isFileExisted(filePath) {
      return fs.existsSync(filePath);
    },
  });
};
