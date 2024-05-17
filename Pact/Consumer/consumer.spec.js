const { Pact } = require('@pact-foundation/pact');
const { eachLike, like } = require('@pact-foundation/pact/dsl/matchers');

const provider = new Pact({
  consumer: 'Consumer',
  provider: 'Provider',
  port: 1234, // The port where your provider service runs
});

describe('Pact with Provider', () => {
  before(() => provider.setup());
  afterEach(() => provider.verify());
  after(() => provider.finalize());

  context('when a request to create an order is made', () => {
    it('creates a new order', async () => {
      await provider.addInteraction({
        state: 'a new order',
        uponReceiving: 'a request to create an order',
        withRequest: {
          method: 'POST',
          path: '/orders',
          headers: { 'Content-Type': 'application/json' },
          body: like({ productId: 123, quantity: 5 }),
        },
        willRespondWith: {
          status: 201,
          headers: { 'Content-Type': 'application/json' },
          body: like({ orderId: 1 }),
        },
      });

      // Make the actual request to the provider
      // and assert the response
    });
  });
});
