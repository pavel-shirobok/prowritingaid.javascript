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
    define([
      'ApiClient',
      'model/SummaryAnalysisRequest',
      'model/SummaryAnalysisResponse',
      'api/AsyncAwaiter',
      'api/AsyncSummaryApi',
      'api/AsyncSummaryResultApi'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('../model/SummaryAnalysisRequest'),
      require('../model/SummaryAnalysisResponse'),
      require('../api/AsyncAwaiter'),
      require('../api/AsyncSummaryApi'),
      require('../api/AsyncSummaryResultApi'));
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApi) {
      root.ProWritingAidApi = {};
    }
    root.ProWritingAidApi.SummaryApi = factory(
      root.ProWritingAidApi.ApiClient,
      root.ProWritingAidApi.SummaryAnalysisRequest,
      root.ProWritingAidApi.SummaryAnalysisResponse,
      root.ProWritingAidApi.AsyncAwaiter,
      root.ProWritingAidApi.AsyncSummaryApi,
      root.ProWritingAidApi.AsyncSummaryResultApi
    );
  }
}(this, function(
  ApiClient,
  SummaryAnalysisRequest,
  SummaryAnalysisResponse,
  AsyncAwaiter,
  AsyncSummaryApi,
  AsyncSummaryResultApi
) {
  'use strict';

  /**
   * Summary service.
   * @module api/SummaryApi
   * @version v1
   */

  /**
   * Constructs a new SummaryApi. 
   * @alias module:api/SummaryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/SummaryAnalysisRequest} request
     * @param {String} licenseCode API key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SummaryAnalysisResponse}
     */
    this.summaryPost = function(request, licenseCode) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling summaryPost";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = SummaryAnalysisResponse;

      return this.apiClient.callApi(
        '/api/summary', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, licenseCode
      );
    }

    /**
     * @param {module:model/SummaryAnalysisRequest} request
     * @param {String} licenseCode API key
     * @param settings object with defined TimeoutInMs and AwaitCallDelay
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SummaryAnalysisResponse}
     */
    this.summaryPostAsync = function (request, licenseCode, settings) {
      return new AsyncAwaiter().await(
        settings,
        new AsyncSummaryApi(this.apiClient),
        new AsyncSummaryResultApi(this.apiClient),
        request,
        licenseCode);
    }
  };

  return exports;
}));
