/**
 * ProWritingAid API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApi) {
      root.ProWritingAidApi = {};
    }
    root.ProWritingAidApi.ContextualThesaurusRequest = factory(root.ProWritingAidApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ContextualThesaurusRequest model module.
   * @module model/ContextualThesaurusRequest
   * @version v1
   */

  /**
   * Constructs a new <code>ContextualThesaurusRequest</code>.
   * @alias module:model/ContextualThesaurusRequest
   * @class
   * @param context {String} the word for the thesaurus call with surrounding context
   * @param contextStart {Integer} the start position of the word to get suggestions for. 0 based
   * @param contextEnd {Integer} the end position of the word to get suggestions for. 0 based. Would be the same as the start pos for a 1 letter word
   */
  var exports = function(context, contextStart, contextEnd) {
    var _this = this;

    _this['Context'] = context;
    _this['ContextStart'] = contextStart;
    _this['ContextEnd'] = contextEnd;
  };

  /**
   * Constructs a <code>ContextualThesaurusRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContextualThesaurusRequest} obj Optional instance to populate.
   * @return {module:model/ContextualThesaurusRequest} The populated <code>ContextualThesaurusRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Context')) {
        obj['Context'] = ApiClient.convertToType(data['Context'], 'String');
      }
      if (data.hasOwnProperty('ContextStart')) {
        obj['ContextStart'] = ApiClient.convertToType(data['ContextStart'], 'Integer');
      }
      if (data.hasOwnProperty('ContextEnd')) {
        obj['ContextEnd'] = ApiClient.convertToType(data['ContextEnd'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * the word for the thesaurus call with surrounding context
   * @member {String} Context
   */
  exports.prototype['Context'] = undefined;
  /**
   * the start position of the word to get suggestions for. 0 based
   * @member {Integer} ContextStart
   */
  exports.prototype['ContextStart'] = undefined;
  /**
   * the end position of the word to get suggestions for. 0 based. Would be the same as the start pos for a 1 letter word
   * @member {Integer} ContextEnd
   */
  exports.prototype['ContextEnd'] = undefined;



  return exports;
}));


