'use strict';

const mock = require('egg-mock');

describe('test/egg-myPlugin.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-myPlugin-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggMyPlugin')
      .expect(200);
  });
});
