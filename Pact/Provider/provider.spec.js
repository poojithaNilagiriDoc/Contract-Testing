const { Verifier } = require('@pact-foundation/pact');
const path = require('path');

describe('Pact verification', () => {
  it('validates the expectations of Consumer', () => {
    const opts = {
      providerBaseUrl: 'http://localhost:1234',
      pactUrls: [path.resolve(__dirname, '../consumer/pacts/consumer-provider.json')],
    };

    return new Verifier().verifyProvider(opts);
  });
});
