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
    define(['ApiClient', 'model/AnalysisSummaryItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalysisSummaryItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApi) {
      root.ProWritingAidApi = {};
    }
    root.ProWritingAidApi.AnalysisSummary = factory(root.ProWritingAidApi.ApiClient, root.ProWritingAidApi.AnalysisSummaryItem);
  }
}(this, function(ApiClient, AnalysisSummaryItem) {
  'use strict';




  /**
   * The AnalysisSummary model module.
   * @module model/AnalysisSummary
   * @version v1
   */

  /**
   * Constructs a new <code>AnalysisSummary</code>.
   * Represents report summary
   * @alias module:model/AnalysisSummary
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AnalysisSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalysisSummary} obj Optional instance to populate.
   * @return {module:model/AnalysisSummary} The populated <code>AnalysisSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ReportDisplayName')) {
        obj['ReportDisplayName'] = ApiClient.convertToType(data['ReportDisplayName'], 'String');
      }
      if (data.hasOwnProperty('ReportName')) {
        obj['ReportName'] = ApiClient.convertToType(data['ReportName'], 'String');
      }
      if (data.hasOwnProperty('SummaryItems')) {
        obj['SummaryItems'] = ApiClient.convertToType(data['SummaryItems'], [AnalysisSummaryItem]);
      }
      if (data.hasOwnProperty('NumberOfIssues')) {
        obj['NumberOfIssues'] = ApiClient.convertToType(data['NumberOfIssues'], 'Integer');
      }
      if (data.hasOwnProperty('ReportDescription')) {
        obj['ReportDescription'] = ApiClient.convertToType(data['ReportDescription'], 'String');
      }
    }
    return obj;
  }

  /**
   * Report's display name
   * @member {String} ReportDisplayName
   */
  exports.prototype['ReportDisplayName'] = undefined;
  /**
   * Report's ID
   * @member {String} ReportName
   */
  exports.prototype['ReportName'] = undefined;
  /**
   * Found issues
   * @member {Array.<module:model/AnalysisSummaryItem>} SummaryItems
   */
  exports.prototype['SummaryItems'] = undefined;
  /**
   * Number of found issues
   * @member {Integer} NumberOfIssues
   */
  exports.prototype['NumberOfIssues'] = undefined;
  /**
   * Short report description
   * @member {String} ReportDescription
   */
  exports.prototype['ReportDescription'] = undefined;



  return exports;
}));


