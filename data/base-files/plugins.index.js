module.exports = (on) => {
  on(`task`, {
    error(message) {
      console.error('\x1b[31m', 'ERROR:', message, '\x1b[0m');
      return true;
    },
    warn(message) {
      console.warn('\x1b[33m', 'WARNING:', message, '\x1b[0m');
      return true;
    },
  });
};
