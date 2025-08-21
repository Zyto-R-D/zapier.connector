// Starts a Zyto run from Zapier with freeform input text
const perform = async (z, bundle) => {
  const url = `${bundle.authData.base_url}/runs`;
  const response = await z.request({
    url,
    method: 'POST',
    // 'beforeRequest' adds Authorization. We send JSON payload here:
    json: {
      userId: 'zapier',
      input: bundle.inputData.input
    }
  });
  // Zapier automatically parses JSON; `response.data` is the parsed body
  return response.data; // expect: { runId: '...' }
};

module.exports = {
  key: 'run_action',
  noun: 'Run',
  display: {
    label: 'Start Zyto Run',
    description: 'Send a prompt to Zyto and kick off the linked workflow.'
  },
  operation: {
    inputFields: [
      {
        key: 'input',
        label: 'Prompt / Instruction',
        type: 'text',
        required: true,
        helpText: 'Describe what Zyto should do (e.g., "Create a sales report and email it to ops").'
      }
    ],
    perform
  }
};
