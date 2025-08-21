// Custom auth: user provides Zyto Base URL and a Zyto API token
module.exports = {
  type: 'custom',
  fields: [
    { key: 'base_url', label: 'Zyto Base URL', type: 'string', required: true, helpText: 'e.g. https://api.your-zyto.com' },
    { key: 'zyto_token', label: 'Zyto API Token', type: 'string', required: true }
  ],
  // Simple health check on your API
  test: {
    url: '{{bundle.authData.base_url}}/health'
  },
  connectionLabel: 'Zyto @ {{bundle.authData.base_url}}'
};
