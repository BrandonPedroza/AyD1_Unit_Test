const assert = require('chai').assert;
const app = require('../app');

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('Archivo App', function(){
  describe('sayHello()', function(){
    it(`sayHello deberia devolber 'hello'`, function(){
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello deberia retornar tipo string', function(){
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function(){
    it('addNumbers deberia ser mayor que 5', function(){
      assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers deberia ser tipo number', function(){
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});
