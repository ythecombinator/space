// Zach's solution to keep Chromium between builds.
// Please refer to: https://www.zachleat.com/web/chromium-missing/

module.exports = {
  async onPreBuild({ utils }) {
    await utils.cache.restore('/opt/buildhome/.cache/puppeteer/');
  },
  async onPostBuild({ utils }) {
    await utils.cache.save('/opt/buildhome/.cache/puppeteer/');
  },
};
