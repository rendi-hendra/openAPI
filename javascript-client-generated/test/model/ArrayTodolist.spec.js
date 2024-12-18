/*
 * Todolist Restful API
 * OpenAPI for Todolist Restful API
 *
 * OpenAPI spec version: 1.0
 * Contact: rendi2004@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.64
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TodolistRestfulApi);
  }
}(this, function(expect, TodolistRestfulApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ArrayTodolist', function() {
      beforeEach(function() {
        instance = new TodolistRestfulApi.ArrayTodolist();
      });

      it('should create an instance of ArrayTodolist', function() {
        // TODO: update the code to test ArrayTodolist
        expect(instance).to.be.a(TodolistRestfulApi.ArrayTodolist);
      });

    });
  });

}));
