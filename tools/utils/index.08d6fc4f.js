// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cHXvT":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "03253c1008d6fc4f";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"cLKWb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// eslint-disable-next-line import/prefer-default-export
parcelHelpers.export(exports, "doSearch", ()=>doSearch
);
var _fieldsJs = require("../fields.js");
var _sitemapJs = require("../sitemap.js");
var _utilsJs = require("../utils.js");
var _searchJs = require("./search.js");
const PARENT_SELECTOR = '.search';
const SEARCH_BUTTON = document.querySelector(`${PARENT_SELECTOR} #searchButton`);
const SEARCH_STATUS_PANEL = document.querySelector(`${PARENT_SELECTOR} #searchStatus`);
const SEARCH_RESULTS_PANEL = document.querySelector(`${PARENT_SELECTOR} #searchResults`);
const config = {};
let totalSize = 0;
let totalFiles = 0;
let totalSearched = 0;
let totalFilesMatched = 0;
let startTime = new Date();
let endTime = 0;
function updateStatus() {
    const seconds = Math.floor((endTime - startTime) / 100) / 10;
    let bar = SEARCH_STATUS_PANEL.querySelector('sp-progress-bar');
    let div = SEARCH_STATUS_PANEL.querySelector('div');
    if (!bar) {
        bar = document.createElement('sp-progress-bar');
        bar.setAttribute('size', 'm');
        bar.setAttribute('label', 'Searching...');
        SEARCH_STATUS_PANEL.appendChild(bar);
        div = document.createElement('div');
        SEARCH_STATUS_PANEL.appendChild(div);
    }
    if (totalSearched === totalFiles) bar.setAttribute('label', 'Done.');
    bar.setAttribute('progress', Math.floor(100 * totalSearched / totalFiles));
    div.innerHTML = `Matched Files: ${totalFilesMatched} / ${totalFiles} (${_utilsJs.humanFileSize(totalSize, true)}) ${seconds}s`;
}
async function edit(url, y) {
    try {
        const config1 = _utilsJs.toHelixConfig(url);
        const statusRes = await fetch(`https://admin.hlx.page/status/${config1.owner}/${config1.repo}/${config1.ref}${config1.path}?editUrl=auto`);
        const status = await statusRes.json();
        const editUrl = status.edit && status.edit.url;
        if (y) // scroll back to original position
        window.scrollTo(0, y);
        if (editUrl) window.open(editUrl);
        else throw new Error('admin did not return an edit url');
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(`failed to get edit url for ${path}`, e);
        // eslint-disable-next-line no-alert
        alert(`failed to get edit url for ${path}`);
    }
}
function displayResult(result) {
    totalSize += result.size;
    totalSearched += 1;
    totalFilesMatched += result.found ? 1 : 0;
    if (result.found) {
        const p = document.createElement('p');
        p.innerHTML = `${_utilsJs.humanFileSize(result.size, true).padStart(9, ' ')} `;
        const link = document.createElement('sp-link');
        link.setAttribute('size', 'm');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', result.url);
        link.innerHTML = result.pathname;
        p.append(link);
        p.innerHTML += ` (${result.status})`;
        const editButton = document.createElement('sp-action-button');
        editButton.setAttribute('size', 'm');
        editButton.innerHTML = '<sp-icon-edit slot="icon"></sp-icon-edit>';
        editButton.onclick = ()=>edit(result.url, window.scrollY)
        ;
        p.append(' ', editButton);
        SEARCH_RESULTS_PANEL.appendChild(p);
    }
}
function onResultFound(result) {
    displayResult(result);
    endTime = new Date();
    updateStatus();
}
async function doSearch() {
    totalSize = 0;
    totalFiles = 0;
    totalSearched = 0;
    totalFilesMatched = 0;
    startTime = new Date();
    endTime = new Date();
    SEARCH_RESULTS_PANEL.textContent = '';
    let rp = config.fields.searchRootPath;
    if (!rp || rp === '/') rp = '';
    const searchIn = config.fields.searchIn || '/';
    const sitemapURLs = await _sitemapJs.loadSitemap(`${rp}/sitemap.xml`, config.fields.searchHost);
    let pattern = config.fields.searchFor; // document.getElementById('input').value;
    let connections = 10;
    if (pattern.includes(' -c ')) [pattern, connections] = pattern.split(' -c ');
    const filteredURLs = sitemapURLs.filter((url)=>{
        const u = new URL(url);
        return u.pathname.startsWith(`${rp}${searchIn}`);
    });
    totalFiles = filteredURLs.length;
    await _searchJs.search(filteredURLs, config.fields.searchHost, pattern, +connections, onResultFound);
}
const attachListeners = ()=>{
    _fieldsJs.attachOptionFieldsListeners(config.fields, PARENT_SELECTOR);
    SEARCH_BUTTON.addEventListener('click', doSearch);
};
const init = ()=>{
    config.fields = _fieldsJs.initOptionFields(PARENT_SELECTOR);
    attachListeners();
};
init();

},{"../fields.js":"c1t4u","../sitemap.js":"cpUCd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../utils.js":"en4he","./search.js":"krI91"}],"c1t4u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOptionFields", ()=>getOptionFields
);
parcelHelpers.export(exports, "initOptionFields", ()=>initOptionFields
);
parcelHelpers.export(exports, "attachOptionFieldsListeners", ()=>attachOptionFieldsListeners
);
const getOptionFields = (parent)=>{
    return document.querySelectorAll(`${parent} .optionField`);
};
const attachOptionFieldsListeners = (fields, parent)=>{
    const optionFields = getOptionFields(parent);
    optionFields.forEach((field)=>{
        field.addEventListener('change', ()=>{
            const value = field.type === 'checkbox' ? field.checked : field.value;
            fields[field.id] = value;
            localStorage.setItem(`option-field-${field.id}`, value);
        });
    });
};
const initOptionFields = (parent)=>{
    const fields = {};
    const optionFields = getOptionFields(parent);
    optionFields.forEach((field)=>{
        const value = localStorage.getItem(`option-field-${field.id}`);
        if (value !== null) {
            if (field.type === 'checkbox') field.checked = value === 'true';
            else field.value = value;
        }
        fields[field.id] = field.type === 'checkbox' ? field.checked : field.value;
    });
    return fields;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpUCd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadSitemap", ()=>loadSitemap
);
parcelHelpers.export(exports, "loadURLsFromRobots", ()=>loadURLsFromRobots
);
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ async function loadSitemap(sitemapURL, origin) {
    const url = new URL(sitemapURL, origin);
    const resp = await fetch(`${origin}${url.pathname}${url.search}`);
    if (resp.ok) {
        const xml = await resp.text();
        const sitemap = new window.DOMParser().parseFromString(xml, 'text/xml');
        const subSitemaps = [
            ...sitemap.querySelectorAll('sitemap loc')
        ];
        let urls = [];
        const promises = subSitemaps.map((loc)=>new Promise((resolve)=>{
                const subSitemapURL = new URL(loc.textContent, origin);
                loadSitemap(subSitemapURL.pathname, origin).then((result)=>{
                    urls = urls.concat(result);
                    resolve(true);
                });
            })
        );
        await Promise.all(promises);
        const urlLocs = sitemap.querySelectorAll('url loc');
        urlLocs.forEach((loc)=>{
            const u = new URL(loc.textContent, origin);
            urls.push(u.toString());
        });
        return urls;
    }
    return [];
}
async function loadURLsFromRobots(origin) {
    let urls = [];
    const url = new URL(`/robots.txt`, origin);
    const res = await fetch(url.toString());
    if (res.ok) {
        const text = await res.text();
        // eslint-disable-next-line no-console
        console.log('found robots.txt', text);
        const regex = /^[Ss]itemap:\s*(.*)$/gm;
        let m;
        const sitemaps = [];
        // eslint-disable-next-line no-cond-assign
        while((m = regex.exec(text)) !== null){
            if (m.index === regex.lastIndex) regex.lastIndex += 1;
            sitemaps.push(m[1]);
        }
        const promises = sitemaps.map((sitemap)=>new Promise((resolve)=>{
                loadSitemap(sitemap, origin).then((u)=>{
                    urls = urls.concat(u);
                    resolve();
                });
            })
        );
        await Promise.all(promises);
    } else {
        // eslint-disable-next-line no-console
        console.log('No robots.txt found - trying sitemap.xml');
        return loadSitemap('/sitemap.xml', origin);
    }
    return urls;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "humanFileSize", ()=>humanFileSize
);
parcelHelpers.export(exports, "toHelixConfig", ()=>toHelixConfig
);
function humanFileSize(bytes, si = false, dp = 1) {
    let numBytes = bytes;
    const thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) return `${bytes} B`;
    const units = si ? [
        'kB',
        'MB',
        'GB',
        'TB',
        'PB',
        'EB',
        'ZB',
        'YB'
    ] : [
        'KiB',
        'MiB',
        'GiB',
        'TiB',
        'PiB',
        'EiB',
        'ZiB',
        'YiB'
    ];
    let u = -1;
    const r = 10 ** dp;
    do {
        numBytes /= thresh;
        u += 1;
    }while (Math.round(Math.abs(numBytes) * r) / r >= thresh && u < units.length - 1)
    return `${numBytes.toFixed(dp)} ${units[u]}`;
}
function toHelixConfig(url) {
    const u = new URL(url);
    const split = u.host.split('--');
    const owner = split[2].split('.')[0];
    return {
        ref: split[0],
        repo: split[1],
        owner,
        path: u.pathname,
        host: u.hostname
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krI91":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "search", ()=>search
);
async function fgrep(url, host, pattern) {
    const u = new URL(url);
    let pathname = u.pathname;
    if (pathname.endsWith('/')) pathname = `${pathname}index`;
    const resp = await fetch(`${host}${pathname}.md`);
    const text = await resp.text();
    let found = false;
    if (text.indexOf(pattern) >= 0) found = true;
    const { status  } = resp;
    const size = +resp.headers.get('content-length');
    return {
        found,
        size,
        status,
        pathname: u.pathname,
        url: `${host}${u.pathname}`
    };
}
async function fgrepNextFile(host, queue, pattern, onResultFound) {
    const url = queue.shift();
    if (url) fgrep(url, host, pattern).then((result)=>{
        if (onResultFound) onResultFound(result);
        // displayResult(result);
        if (queue[0]) fgrepNextFile(host, queue, pattern, onResultFound);
    // updateStatus();
    });
}
async function fgrepFiles(sitemap, host, pattern, connections, onResultFound) {
    const queue = [
        ...sitemap
    ];
    for(let c = 0; c < connections; c += 1)fgrepNextFile(host, queue, pattern, onResultFound);
}
async function search(sitemap, host, pattern, connections, onResultFound) {
    return fgrepFiles(sitemap, host, pattern, connections, onResultFound);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cHXvT","cLKWb"], "cLKWb", "parcelRequire99f1")

//# sourceMappingURL=index.08d6fc4f.js.map