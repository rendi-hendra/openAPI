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
import ApiClient from '../ApiClient';

/**
 * The CreateOrUpdateTodolist model module.
 * @module model/CreateOrUpdateTodolist
 * @version 1.0
 */
export default class CreateOrUpdateTodolist {
  /**
   * Constructs a new <code>CreateOrUpdateTodolist</code>.
   * @alias module:model/CreateOrUpdateTodolist
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateOrUpdateTodolist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateOrUpdateTodolist} obj Optional instance to populate.
   * @return {module:model/CreateOrUpdateTodolist} The populated <code>CreateOrUpdateTodolist</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateOrUpdateTodolist();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
CreateOrUpdateTodolist.prototype.name = undefined;

/**
 * @member {Number} priority
 */
CreateOrUpdateTodolist.prototype.priority = undefined;

/**
 * @member {Array.<String>} tags
 */
CreateOrUpdateTodolist.prototype.tags = undefined;

