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
    root.ProWritingAidApi.TextAnalysisRequest = factory(root.ProWritingAidApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TextAnalysisRequest model module.
   * @module model/TextAnalysisRequest
   * @version v1
   */

  /**
   * Constructs a new <code>TextAnalysisRequest</code>.
   * @alias module:model/TextAnalysisRequest
   * @class
   * @param text {String} Text to be processed
   * @param reports {Array.<String>} List of reports   <example>  [\"grammar\",\"overused\"]  </example><remarks>  List of currently supported reports:  acronym,alliteration,allrepeats,allsentences,  cliche,closerepeat,combo,complex,consistency,  core,corporate,dialog,diction,dva,eloquence,  grammar,grammarplus,homonym,house,initial,nlp,  overused,overusedonly,overview,pacing,passive,  phrases,plagiarism,plength,preadability,slength,  ssentences,ssentences_noglue,structure,thesaurus,  transition,vague,wordcloud,wordsandphrases,wordsphrases  </remarks>
   * @param style {module:model/TextAnalysisRequest.StyleEnum} Document's writing style
   * @param language {module:model/TextAnalysisRequest.LanguageEnum} Document's language  <remarks>  Set correct UK/US language to get region-specific suggestions  </remarks>
   */
  var exports = function(text, reports, style, language) {
    var _this = this;

    _this['Text'] = text;
    _this['Reports'] = reports;
    _this['Style'] = style;
    _this['Language'] = language;
  };

  /**
   * Constructs a <code>TextAnalysisRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TextAnalysisRequest} obj Optional instance to populate.
   * @return {module:model/TextAnalysisRequest} The populated <code>TextAnalysisRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Text')) {
        obj['Text'] = ApiClient.convertToType(data['Text'], 'String');
      }
      if (data.hasOwnProperty('Reports')) {
        obj['Reports'] = ApiClient.convertToType(data['Reports'], ['String']);
      }
      if (data.hasOwnProperty('Style')) {
        obj['Style'] = ApiClient.convertToType(data['Style'], 'String');
      }
      if (data.hasOwnProperty('Language')) {
        obj['Language'] = ApiClient.convertToType(data['Language'], 'String');
      }
    }
    return obj;
  };

  /**
   * Text to be processed
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;
  /**
   * List of reports   <example>  [\"grammar\",\"overused\"]  </example><remarks>  List of currently supported reports:  acronym,alliteration,allrepeats,allsentences,  cliche,closerepeat,combo,complex,consistency,  core,corporate,dialog,diction,dva,eloquence,  grammar,grammarplus,homonym,house,initial,nlp,  overused,overusedonly,overview,pacing,passive,  phrases,plagiarism,plength,preadability,slength,  ssentences,ssentences_noglue,structure,thesaurus,  transition,vague,wordcloud,wordsandphrases,wordsphrases  </remarks>
   * @member {Array.<String>} Reports
   */
  exports.prototype['Reports'] = undefined;
  /**
   * Document's writing style
   * @member {module:model/TextAnalysisRequest.StyleEnum} Style
   */
  exports.prototype['Style'] = undefined;
  /**
   * Document's language  <remarks>  Set correct UK/US language to get region-specific suggestions  </remarks>
   * @member {module:model/TextAnalysisRequest.LanguageEnum} Language
   */
  exports.prototype['Language'] = undefined;


  /**
   * Allowed values for the <code>Style</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StyleEnum = {
    /**
     * value: "NotSet"
     * @const
     */
    "NotSet": "NotSet",
    /**
     * value: "General"
     * @const
     */
    "General": "General",
    /**
     * value: "Academic"
     * @const
     */
    "Academic": "Academic",
    /**
     * value: "Business"
     * @const
     */
    "Business": "Business",
    /**
     * value: "Technical"
     * @const
     */
    "Technical": "Technical",
    /**
     * value: "Creative"
     * @const
     */
    "Creative": "Creative",
    /**
     * value: "Casual"
     * @const
     */
    "Casual": "Casual",
    /**
     * value: "Web"
     * @const
     */
    "Web": "Web"  };

  /**
   * Allowed values for the <code>Language</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LanguageEnum = {
    /**
     * value: "en_US"
     * @const
     */
    "en_US": "en_US",
    /**
     * value: "en_UK"
     * @const
     */
    "en_UK": "en_UK",
    /**
     * value: "en"
     * @const
     */
    "en": "en",
    /**
     * value: "es"
     * @const
     */
    "es": "es"  };


  return exports;
}));


