const assert = require('chai').assert;
const app = require('../app');

describe('App2', function(){
  describe('sayHello()', function(){
    it('sayHello should return hello', function(){
      let result = app.sayHello();
      assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function(){
      let result = app.sayHello();
      assert.typeOf(result, 'string');
    });
  });

  describe('addNumbers()', function(){
    it('addNumbers should be above 5', function(){
      let result = app.addNumbers(5,5);
      assert.isAbove(result, 5);
    });

    it('addNumbers should return type number', function(){
      let result = app.addNumbers(5,5);
      assert.typeOf(result, 'number');
    });
  });



  
});
