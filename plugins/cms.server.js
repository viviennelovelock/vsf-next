const fs = require('fs');
const path = require('path');

export default {
  path: '/cms',
  async handler(_, res) {
    return fs.readdir(path.join('cms'), async (error, files) => {
      if (error) return console.warn(`VSF: Unable to read cms directory: ${error}`);
      res.end(JSON.stringify(files));
    });
  }
}
