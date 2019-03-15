const expect = require('chai').expect;
const server = require('./index.test');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis a simple change').to.equal('ci with travis a simple change');
  });

  it('should return a string', () => {
    expect('This is another test').to.equal('This is another test');
  });
});
