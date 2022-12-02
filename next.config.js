const path = require('path')
const withImages = require('next-images')

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features
// const withTM = require('next-transpile-modules')([
//   '@fullcalendar/common',
//   '@fullcalendar/react',
//   '@fullcalendar/daygrid',
//   '@fullcalendar/list',
//   '@fullcalendar/timegrid'
// ])

const execSync = require("child_process").execSync;

const lastCommitCommand = "git rev-parse HEAD";

module.exports = withImages({
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  async generateBuildId() {
    return execSync(lastCommitCommand).toString().trim();
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
})
