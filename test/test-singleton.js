/** Tests! */
var assert = require('chai').assert

Singleton = require('../singleton/Singleton').Singleton;

describe('Abstract Factory tests', function () {

  it('two different instances are not equal', function() {
    assert.notEqual(new Object(), new Object());
  });

  it('singleton creates the same instance of an object', function() {

    var factory1 = Singleton.getInstance();
    var factory2 = Singleton.getInstance();

    assert.equal(factory1, factory2);
  });

  it('singleton create instance method is private', function() {
    assert.isFunction(Singleton.getInstance);
    assert.isNotFunction(Singleton.createInstance);
  });
  
});