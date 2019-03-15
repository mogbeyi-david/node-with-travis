const expect = require('chai').expect;
const server = require('./index.test');

describe('test', () => {
  it('first test', () => {
    expect('ci with travis a simple change').to.equal('ci with travis a simple change');
  });

  it('second test', () => {
    expect('This is another test').to.equal('This is another test');
  });

  it('third test', () => {
    expect('Testing if it will build from a merge').to.equal('Testing if it will build from a merge');
  });
});
