import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  manifest: {
    web_accessible_resources: [
      {
        matches: ['*://*.redmine.xt-xarid.uz/*'],
        resources: ["*.css"]
      }
    ],
    permissions: ['storage']
  }
});
