import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  manifest: {
    name: 'Redmine for zoomers',
    version: '0.0.1',
    short_name: 'Redmine for zoomers',
    description: 'Redmine UI sucks, solution for zoomers',
    web_accessible_resources: [
      {
        matches: ['*://*.redmine.xt-xarid.uz/*'],
        resources: ["*.css"]
      }
    ],
    permissions: ['storage']
  }
});
