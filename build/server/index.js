module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	(function exposeCodeSplitWebpackRegistry() {
/******/ 	              const registry = {"modules":{"e54819b92b0f":0,"6c2d11f3d263":8,"b2e1741da0b6":10,"097d8549b23c":13,"2a96272ba387":14,"6a72d4d46e9b":15,"dee842b4e1d4":16,"436f0fb90119":17,"3b642af8b7e1":18,"f140c69a3ef1":19,"41a2a515b824":20,"57b3e79ef160":21,"e17e8b0af6c6":22,"aff1d3a51bfe":23,"fd6cb1d59768":24,"ce422e7ae60f":25,"410521791233":26,"f2045b4a32c2":27,"863d577ca41e":28,"cd5eab695f98":29,"0cfce2157481":30,"4bc3c875a5b7":31,"15391283de39":32,"bdd7345e8985":33,"8afd7e1178c2":34,"75c354ef84a5":35,"c9cb35e191c5":36,"28341910857f":37,"c2a58989387f":38,"7010a8899a45":39,"d1d37fa5016c":40,"07c6bcb24686":42},"chunks":{"index":0}};
/******/ 	              if (typeof global !== 'undefined') {
/******/ 	                global.__CODE_SPLIT_MODULE_CHUNK_MAPPING__ = registry;
/******/ 	              } else if (typeof window !== 'undefined') {
/******/ 	                window.__CODE_SPLIT_MODULE_CHUNK_MAPPING__ = registry;
/******/ 	              }
/******/ 	          }());
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internals_environmentVars__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internals_filterObject__ = __webpack_require__(16);
// Application Configuration.
//
// Please see the /docs/APPLICATION_CONFIG.md documentation for more info.
//
// Note: all file/folder paths should be relative to the project root. The
// absolute paths should be resolved during runtime by our build tools/server.




// This protects us from accidentally including this configuration in our
// client bundle. That would be a big NO NO to do. :)
if (false) {
  throw new Error("You shouldn't be importing the `./config` directly into your 'client' or 'shared' source as the configuration object will get included in your client bundle. Not a safe move! Instead, use the `safeConfigGet` helper function (located at `./src/shared/utils/config`) within the 'client' or 'shared' source files to reference configuration values in a safe manner.");
}

const config = {
  // The host on which the server should run.
  host: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internals_environmentVars__["a" /* getStringEnvVar */])('SERVER_HOST', 'localhost'),

  // The port on which the server should run.
  port: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internals_environmentVars__["b" /* getIntEnvVar */])('SERVER_PORT', process.env.PORT || 5000),

  // The port on which the client bundle development server should run.
  clientDevServerPort: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internals_environmentVars__["b" /* getIntEnvVar */])('CLIENT_DEVSERVER_PORT', 7331),

  // This is an example environment variable which is consumed within the
  // './client.js' config.  See there for more details.
  welcomeMessage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__internals_environmentVars__["a" /* getStringEnvVar */])('WELCOME_MSG', 'Hello world!'),

  // Disable server side rendering?
  disableSSR: false,

  // How long should we set the browser cache for the served assets?
  // Don't worry, we add hashes to the files, so if they change the new files
  // will be served to browsers.
  // We are using the "ms" format to set the length.
  // @see https://www.npmjs.com/package/ms
  browserCacheMaxAge: '365d',

  // Path to the public assets that will be served off the root of the
  // HTTP server.
  publicAssetsPath: './public',

  // Where does our build output live?
  buildOutputPath: './build',

  // Should we optimize production builds (i.e. minify etc).
  // Sometimes you don't want this to happen to aid in debugging complex
  // problems.  Having this configuration flag here allows you to quickly
  // toggle the feature.
  optimizeProductionBuilds: true,

  // Do you want to included source maps (will be served as seperate files)
  // for production builds?
  includeSourceMapsForProductionBuilds: false,

  // Path to the shared src between the bundles.
  bundlesSharedSrcPath: './src/shared',

  // These extensions are tried when resolving src files for our bundles..
  bundleSrcTypes: ['js', 'jsx', 'json'],

  // Additional asset types to be supported for our bundles.
  // i.e. you can import the following file types within your source and the
  // webpack bundling process will bundle them with your source and create
  // URLs for them that can be resolved at runtime.
  bundleAssetTypes: ['jpg', 'jpeg', 'png', 'gif', 'ico', 'eot', 'svg', 'ttf', 'woff', 'woff2', 'otf'],

  // What should we name the json output file that webpack generates
  // containing details of all output files for a bundle?
  bundleAssetsFileName: 'assets.json',

  // Extended configuration for the Content Security Policy (CSP)
  // @see src/server/middleware/security for more info.
  cspExtensions: {
    childSrc: [],
    connectSrc: [],
    defaultSrc: [],
    fontSrc: [],
    imgSrc: [],
    mediaSrc: [],
    manifestSrc: [],
    objectSrc: [],
    scriptSrc: [],
    styleSrc: []
  },

  // node_modules are not included in any bundles that target "node" as a runtime
  // (i.e. the server bundle).
  // The node_modules may however contain files that will need to be processed by
  // one of our webpack loaders.
  // Add any required file types to the list below.
  nodeBundlesIncludeNodeModuleFileTypes: [/\.(eot|woff|woff2|ttf|otf)$/, /\.(svg|png|jpg|jpeg|gif|ico)$/, /\.(mp4|mp3|ogg|swf|webp)$/, /\.(css|scss|sass|sss|less)$/],

  // Note: you can only have a single service worker instance.  Our service
  // worker implementation is bound to the "client" and "server" bundles.
  // It includes the "client" bundle assets, as well as the public folder assets,
  // and it is served by the "server" bundle.
  serviceWorker: {
    // Enabled?
    enabled: true,
    // Service worker name
    fileName: 'sw.js',
    // Paths to the public assets which should be included within our
    // service worker. Relative to our public folder path, and accepts glob
    // syntax.
    includePublicAssets: [
    // NOTE: This will include ALL of our public folder assets.  We do
    // a glob pull of them and then map them to /foo paths as all the
    // public folder assets get served off the root of our application.
    // You may or may not want to be including these assets.  Feel free
    // to remove this or instead include only a very specific set of
    // assets.
    './**/*'],
    // Path to the template used by HtmlWebpackPlugin to generate an offline
    // page that will be used by the service worker to render our application
    // offline.
    offlinePageTemplate: './tools/webpack/offlinePage',
    // Offline page file name.
    offlinePageFileName: 'offline.html'
  },

  // We use the polyfill.io service which provides the polyfills that a
  // client needs, which is far more optimal than the large output
  // generated by babel-polyfill.
  // Note: we have to keep this seperate from our "htmlPage" configuration
  // as the polyfill needs to be loaded BEFORE any of our other javascript
  // gets parsed.
  polyfillIO: {
    enabled: true,
    url: 'https://cdn.polyfill.io/v2/polyfill.min.js'
  },

  // Configuration for the HTML pages (headers/titles/scripts/css/etc).
  // We make use of react-helmet to consume the values below.
  // @see https://github.com/nfl/react-helmet
  htmlPage: {
    htmlAttributes: { lang: 'en' },
    titleTemplate: 'React, Universally - %s',
    defaultTitle: 'React, Universally',
    meta: [{
      name: 'description',
      content: 'A starter kit giving you the minimum requirements for a production ready universal react application.'
    },
    // Default content encoding.
    { name: 'charset', content: 'utf-8' },
    // @see http://bit.ly/2f8IaqJ
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    // This is important to signify your application is mobile responsive!
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // Providing a theme color is good if you are doing a progressive
    // web application.
    { name: 'theme-color', content: '#2b2b2b' }],
    links: [
    // When building a progressive web application you need to supply
    // a manifest.json as well as a variety of icon types. This can be
    // tricky. Luckily there is a service to help you with this.
    // http://realfavicongenerator.net/
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }, { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' }, { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }, { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#00a9d9' },
    // Make sure you update your manifest.json to match your application.
    { rel: 'manifest', href: '/manifest.json' }],
    scripts: [
      // Example:
      // { src: 'http://include.com/pathtojs.js', type: 'text/javascript' },
    ]
  },

  bundles: {
    client: {
      // Src entry file.
      srcEntryFile: './src/client/index.js',

      // Src paths.
      srcPaths: ['./src/client', './src/shared',
      // The service worker offline page generation needs access to the
      // config folder.  Don't worry we have guards within the config files
      // to ensure they never get included in a client bundle.
      './config'],

      // Where does the client bundle output live?
      outputPath: './build/client',

      // What is the public http path at which we must serve the bundle from?
      webPath: '/client/',

      // Configuration settings for the development vendor DLL.  This will be created
      // by our development server and provides an improved dev experience
      // by decreasing the number of modules that webpack needs to process
      // for every rebuild of our client bundle.  It by default uses the
      // dependencies configured in package.json however you can customise
      // which of these dependencies are excluded, whilst also being able to
      // specify the inclusion of additional modules below.
      devVendorDLL: {
        // Enabled?
        enabled: true,

        // Specify any dependencies that you would like to include in the
        // Vendor DLL.
        //
        // NOTE: It is also possible that some modules require specific
        // webpack loaders in order to be processed (e.g. CSS/SASS etc).
        // For these cases you don't want to include them in the Vendor DLL.
        include: ['code-split-component', 'react', 'react-dom', 'react-helmet', 'react-router'],

        // The name of the vendor DLL.
        name: '__dev_vendor_dll__'
      }
    },

    server: {
      // Src entry file.
      srcEntryFile: './src/server/index.js',

      // Src paths.
      srcPaths: ['./src/server', './src/shared', './config'],

      // Where does the server bundle output live?
      outputPath: './build/server'
    }
  },

  additionalNodeBundles: {
    // NOTE: The webpack configuration and build scripts have been built so
    // that you can add arbitrary additional node bundle configurations here.
    //
    // A common requirement for larger projects is to add additional "node"
    // target bundles (e.g an APi server endpoint). Therefore flexibility has been
    // baked into our webpack config factory to allow for this.
    //
    // Simply define additional configurations similar to below.  The development
    // server will manage starting them up for you.  The only requirement is that
    // within the entry for each bundle you create and return the "express"
    // listener.
    /*
    apiServer: {
      srcEntryFile: './src/api/index.js',
      srcPaths: [
        './src/api',
        './src/shared',
        './config',
      ],
      outputPath: './build/api',
    }
    */
  },

  // These plugin definitions provide you with advanced hooks into customising
  // the project without having to reach into the internals of the tools.
  //
  // We have decided to create this plugin approach so that you can come to
  // a centralised configuration folder to do most of your application
  // configuration adjustments.  Additionally it helps to make merging
  // from the origin starter kit a bit easier.
  plugins: {
    // This plugin allows you to provide final adjustments your babel
    // configurations for each bundle before they get processed.
    //
    // This function will be called once for each for your bundles.  It will be
    // provided the current webpack config, as well as the buildOptions which
    // detail which bundle and mode is being targetted for the current function run.
    babelConfig: (babelConfig, buildOptions) => {
      // eslint-disable-next-line no-unused-vars
      const { target, mode } = buildOptions;

      // Example
      /*
      if (target === 'server' && mode === 'development') {
        babelConfig.presets.push('foo');
      }
      */

      return babelConfig;
    },

    // This plugin allows you to provide final adjustments your webpack
    // configurations for each bundle before they get processed.
    //
    // I would recommend looking at the "webpack-merge" module to help you with
    // merging modifications to each config.
    //
    // This function will be called once for each for your bundles.  It will be
    // provided the current webpack config, as well as the buildOptions which
    // detail which bundle and mode is being targetted for the current function run.
    webpackConfig: (webpackConfig, buildOptions) => {
      // eslint-disable-next-line no-unused-vars
      const { target, mode } = buildOptions;

      // Example:
      /*
      if (target === 'server' && mode === 'development') {
        webpackConfig.plugins.push(new MyCoolWebpackPlugin());
      }
      */

      // Debugging/Logging Example:
      /*
      if (target === 'server') {
        console.log(JSON.stringify(webpackConfig, null, 4));
      }
      */

      return webpackConfig;
    }
  }
};

// Export the client configuration object.
const clientConfig = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__internals_filterObject__["a" /* default */])(
// We will filter our full application configuration object...
config,
// using the rules below in order to create our filtered client configuration
// object.
//
// This object will be bound to the window.__CLIENT_CONFIG__
// property which is where client code should be referencing it from.
// As we generally have shared code between our node/browser code we have
// created a helper function in "./src/shared/utils/config" that you can used
// to request config values from.  It will make sure that either the
// application config file is used (i.e. this file), or the
// window.__CLIENT_CONFIG__ is used.  This avoids boilerplate throughout your
// shared code.  We recommend using this helper anytime you need a config
// value within either the "client" or "shared" folder (i.e. any folders
// that contain code which will end up in the browser).
//
// This is a filter that will be applied to our configuration in order to
// determine which of our configuration values will be provided to the client
// bundle.
//
// For security reasons you wouldn't want to make all of the configuration values
// accessible by client bundles as these values would essentially be getting
// transported over the wire to user's browsers.  There are however cases
// where you may want to expose one or two of the values within a client bundle.
//
// This filter object must match the shape of the configuration object, however
// you need not specify every property that is defined within the configuration
// object.  Simply define the properties you would like to be included in the
// client config, supplying a truthy value to them in order to ensure they
// get included in the client bundle.
{
  // This is here as an example showing that you can expose environment
  // variables too.
  welcomeMessage: true,
  // We only need to expose the enabled flag of the service worker.
  serviceWorker: {
    enabled: true
  },
  // We need to expose all the polyfill.io settings.
  polyfillIO: true,
  // We need to expose all the htmlPage settings.
  htmlPage: true,
  additionalNodeBundles: true
});
/* harmony export (immutable) */ exports["clientConfig"] = clientConfig;


// Export the main config as the default export.
/* harmony default export */ exports["default"] = config;

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("app-root-dir");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("react-helmet");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("code-split-component");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("react-router");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = safeConfigGet;
/* eslint-disable no-console */
/* eslint-disable import/global-require */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */

// This resolves the correct configuration source based on the execution
// environment.  For node we use the standard config file, however, for browsers
// we need to access the configuration object that would have been bound to
// the "window" by our "reactApplication" middleware.
let configCache;
function resolveConfigForExecutionEnv() {
  if (configCache) {
    return configCache;
  }

  // NOTE: By using the "process.env.IS_NODE" flag here this block of code
  // will be removed when "process.env.IS_NODE === true".
  // If no "IS_NODE" env var is undefined we can assume that we are running outside
  // of a webpack run, and will therefore return the config file.
  if (true) {
    // i.e. running in our server/node process.
    configCache = __webpack_require__(0).default;
    return configCache;
  }

  // To get here we are likely running in the browser.

  if (typeof window !== 'undefined' && typeof window.__CLIENT_CONFIG__ === 'object') {
    configCache = window.__CLIENT_CONFIG__;
  } else {
    // To get here we must be running in the browser.
    console.warn('No client configuration object was bound to the window.');
    configCache = {};
  }

  return configCache;
}

/**
 * This function wraps up the boilerplate needed to access the correct
 * configuration depending on whether your code will get executed in the
 * browser/node.
 *
 * i.e.
 *  - For the browser the config values are available at window.__CLIENT_CONFIG__
 *  - For a node process they are within the "./config" root project folder.
 *
 * To request a configuration value you must provide the repective path. For
 * example, f you had the following configuration structure:
 *   {
 *     foo: {
 *       bar: [1, 2, 3]
 *     },
 *     bob: 'bob'
 *   }
 *
 * You could use this function to access "bar" like so:
 *   import { safeConfigGet } from '../config';
 *   const value = safeConfigGet(['foo', 'bar']);
 *
 * And you could access "bob" like so:
 *   import { safeConfigGet } from '../config';
 *   const value = safeConfigGet(['bob']);
 *
 * If any part of the path isn't available as a configuration key/value then
 * an error will be thrown indicating that a respective configuration value
 * could not be found at the given path.
 */
function safeConfigGet(path) {
  if (path.length === 0) {
    throw new Error('You must provide the path to the configuration value you would like to consume.');
  }
  let result = resolveConfigForExecutionEnv();
  for (let i = 0; i < path.length; i += 1) {
    if (result === undefined) {
      const errorMessage = `Failed to resolve configuration value at "${ path.join('.') }".`;
      // This "if" block gets stripped away by webpack for production builds.
      if (false) {
        throw new Error(`${ errorMessage } We have noticed that you are trying to access this configuration value from the client bundle (i.e. browser) though.  For configuration values to be exposed to the client bundle you must ensure that the path is added to the client configuration filter file, which is located at "config/clientConfigFilter.js".`);
      }
      throw new Error(errorMessage);
    }
    result = result[path[i]];
  }
  return result;
}

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_root_dir__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_root_dir___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_app_root_dir__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middleware_reactApplication__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middleware_security__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__middleware_clientBundle__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__middleware_serviceWorker__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__middleware_offlinePage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__middleware_errorHandlers__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__(0);
/* eslint-disable no-console */













// Create our express based server.
const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

// Don't expose any software information to potential hackers.
app.disable('x-powered-by');

// Security middlewares.
app.use(...__WEBPACK_IMPORTED_MODULE_5__middleware_security__["a" /* default */]);

// Gzip compress the responses.
app.use(__WEBPACK_IMPORTED_MODULE_1_compression___default()());

// When in production mode, we will serve our service worker which was generated
// by the offline-plugin webpack plugin. See the webpack plugins section for
// more information.
// Note: the service worker needs to be served from the http root of your
// application for it to work correctly.
if ("production" === 'production' && __WEBPACK_IMPORTED_MODULE_10__config__["default"].serviceWorker.enabled) {
  app.get(`/${ __WEBPACK_IMPORTED_MODULE_10__config__["default"].serviceWorker.fileName }`, __WEBPACK_IMPORTED_MODULE_7__middleware_serviceWorker__["a" /* default */]);
  app.get(`${ __WEBPACK_IMPORTED_MODULE_10__config__["default"].bundles.client.webPath }${ __WEBPACK_IMPORTED_MODULE_10__config__["default"].serviceWorker.offlinePageFileName }`, __WEBPACK_IMPORTED_MODULE_8__middleware_offlinePage__["a" /* default */]);
}

// Configure serving of our client bundle.
app.use(__WEBPACK_IMPORTED_MODULE_10__config__["default"].bundles.client.webPath, __WEBPACK_IMPORTED_MODULE_6__middleware_clientBundle__["a" /* default */]);

// Configure static serving of our "public" root http path static files.
// Note: these will be served off the root (i.e. '/') of our application.
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["resolve"])(__WEBPACK_IMPORTED_MODULE_3_app_root_dir___default.a.get(), __WEBPACK_IMPORTED_MODULE_10__config__["default"].publicAssetsPath)));

// The React application middleware.
app.get('*', __WEBPACK_IMPORTED_MODULE_4__middleware_reactApplication__["a" /* default */]);

// Error Handler middlewares.
app.use(...__WEBPACK_IMPORTED_MODULE_9__middleware_errorHandlers__["a" /* default */]);

// Create an http listener for our express app.
const listener = app.listen(__WEBPACK_IMPORTED_MODULE_10__config__["default"].port, __WEBPACK_IMPORTED_MODULE_10__config__["default"].host, () => console.log(`Server listening on port ${ __WEBPACK_IMPORTED_MODULE_10__config__["default"].port }`));

// We export the listener as it will be handy for our development hot reloader,
// or for exposing a general extension layer for application customisations.
/* harmony default export */ exports["default"] = listener;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(41).install();


/***/ },
/* 12 */
/***/ function(module, exports) {



/***/ },
/* 13 */
/***/ function(module, exports) {



/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = "/client/93a2b06556deb55b214bb0cfbce8a4e0.png";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_root_dir__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_root_dir___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_app_root_dir__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_user_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_user_home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_user_home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_colors_safe__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_colors_safe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_colors_safe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__package_json__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__package_json__);
/* harmony export (immutable) */ exports["a"] = getStringEnvVar;
/* harmony export (immutable) */ exports["b"] = getIntEnvVar;
/* unused harmony export getBoolVar */








function registerEnvFile() {
  const envName = "production" || 'development';
  const envFile = '.env';

  // This is the order in which we will try to resolve an environment configuration
  // file.
  const envFileResolutionOrder = [
  // Is there an environment config file at the app root for our target
  // environment name?
  // e.g. /projects/react-universally/.env.development
  __WEBPACK_IMPORTED_MODULE_2_path___default.a.resolve(__WEBPACK_IMPORTED_MODULE_3_app_root_dir___default.a.get(), `${ envFile }.${ envName }`),
  // Is there an environment config file at the app root?
  // e.g. /projects/react-universally/.env
  __WEBPACK_IMPORTED_MODULE_2_path___default.a.resolve(__WEBPACK_IMPORTED_MODULE_3_app_root_dir___default.a.get(), envFile),
  // Is there an environment config file in the executing user's home dir
  // that is targetting the specific environment?
  // e.g. /Users/ctrlplusb/.config/react-universally/.env.development
  __WEBPACK_IMPORTED_MODULE_2_path___default.a.resolve(__WEBPACK_IMPORTED_MODULE_4_user_home___default.a, '.config', __WEBPACK_IMPORTED_MODULE_6__package_json___default.a.name, `${ envFile }.${ envName }`),
  // Is there an environment config file in the executing user's home dir?
  // e.g. /Users/ctrlplusb/.config/react-universally/.env
  __WEBPACK_IMPORTED_MODULE_2_path___default.a.resolve(__WEBPACK_IMPORTED_MODULE_4_user_home___default.a, '.config', __WEBPACK_IMPORTED_MODULE_6__package_json___default.a.name, envFile)];

  // Find the first env file path match.
  const envFilePath = envFileResolutionOrder.find(filePath => __WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(filePath));

  // If we found an env file match the register it.
  if (envFilePath) {
    console.log( // eslint-disable-line no-console
    __WEBPACK_IMPORTED_MODULE_5_colors_safe___default.a.bgBlue.white(`==> Registering environment variables from: ${ envFilePath }`));
    __WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config({ path: envFilePath });
  }
}

// Ensure that we first register any environment variables from an existing
// env file.
registerEnvFile();

function getStringEnvVar(name, defaultVal) {
  return process.env[name] || defaultVal;
}

function getIntEnvVar(name, defaultVal) {
  return process.env[name] ? parseInt(process.env[name], 10) : defaultVal;
}

function getBoolVar(name, defaultVal) {
  return process.env[name] ? process.env[name] === 'true' : defaultVal;
}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = filterObject;
function filterObjectLoop(obj, filters, basePropPath = '') {
  return Object.keys(filters).reduce((acc, key) => {
    const propPath = basePropPath !== '' ? `${ basePropPath }.${ key }` : key;

    if (typeof filters[key] === 'object') {
      if (typeof obj[key] !== 'object') {
        throw new Error(`Expected prop at path "${ propPath }" to be an object`);
      }
      acc[key] = filterObjectLoop(obj[key], filters[key], propPath); // eslint-disable-line no-param-reassign,max-len
    } else if (filters[key]) {
      if (typeof obj[key] === 'undefined') {
        throw new Error(`Filter set an "allow" on path "${ propPath }", however, this path was not found on the source object.`);
      }
      acc[key] = obj[key]; // eslint-disable-line no-param-reassign
    }
    return acc;
  }, {});
}

// Applies a given set of filters to filter a given object's structure.
//
// The filters object should match the shape of the source object and should
// have a truthy/falsey value indicating if the property should be included/
// excluded.  If the filters do not contain a property that exists on the
// source object then the respective property will be excluded.
//
// Example:
//   filter(
//     // source
//     {
//       foo: { bar: 'bar', qux: 'qux' },
//       bob: 'bob',
//       poop: { plop: 'splash' }
//     },
//     // filters
//     {
//       foo: { bar: true },
//       poop: true
//     }
//   )
//
// Results in:
//   {
//     foo: { bar: 'bar' },
//     poop: { plop: 'splash' }
//   },
function filterObject(obj, filters) {
  return filterObjectLoop(obj, filters);
}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_root_dir__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_root_dir___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_app_root_dir__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(0);





// Middleware to server our client bundle.
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_path__["resolve"])(__WEBPACK_IMPORTED_MODULE_2_app_root_dir___default.a.get(), __WEBPACK_IMPORTED_MODULE_3__config__["default"].bundles.client.outputPath), { maxAge: __WEBPACK_IMPORTED_MODULE_3__config__["default"].browserCacheMaxAge });

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const errorHandlersMiddleware = [
// Handle 404 errors.
// Note: the react application middleware hands 404 paths, but it is good to
// have this backup for paths not handled by the universal middleware. For
// example you may bind a /api path to express.
function notFoundMiddlware(req, res, next) {
  res.status(404).send('Sorry, that resource was not found.');
},

// Handle all unhandled errors.
// Typically you want to return a "500" response status.
// Note: You must provide specify all 4 parameters on this callback function
// even if they aren't used, otherwise it won't be used.
function unhandledErrorMiddleware(err, req, res, next) {
  if (err) {
    console.log(err);
    console.log(err.stack);
  }
  res.status(500).send('Sorry, an unexpected error occurred.');
}];

/* harmony default export */ exports["a"] = errorHandlersMiddleware;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_root_dir__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_root_dir___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_app_root_dir__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(0);
/* harmony export (immutable) */ exports["a"] = offlinePageMiddleware;
/* eslint-disable no-unused-vars */






/**
 * We need a middleware to intercept calls to our offline page to ensure that
 * inline scripts get the correct nonce value injected into them.  Otherwise
 * we can't provide client config values to the offline page.
 */
function offlinePageMiddleware(req, res, next) {
  // We should have had a nonce provided to us.  See the server/index.js for
  // more information on what this is.
  if (typeof res.locals.nonce !== 'string') {
    throw new Error('A "nonce" value has not been attached to the response');
  }
  const nonce = res.locals.nonce;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fs__["readFile"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_path__["resolve"])(__WEBPACK_IMPORTED_MODULE_2_app_root_dir___default.a.get(), __WEBPACK_IMPORTED_MODULE_3__config__["default"].bundles.client.outputPath, __WEBPACK_IMPORTED_MODULE_3__config__["default"].serviceWorker.offlinePageFileName), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error returning offline page.');
      return;
    }
    const withNonce = data.replace('NONCE_TARGET', nonce);
    res.send(withNonce);
  });
}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serialize_javascript__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_code_split_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_code_split_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_code_split_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getAssetsForClientChunks__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(0);
/* harmony export (immutable) */ exports["a"] = generateHTML;
// This module is responsible for generating the HTML page response for
// the react application middleware.
//
// NOTE: If you are using a service worker to support offline mode for your
// application then please make sure that you keep the structure of the html
// within this module in sync with the module used to generate the offline
// HTML page.
// @see ./tools/webpack/offlinePage/generate.js






function styleTags(styles) {
  return styles.map(style => `<link href="${ style }" media="screen, projection" rel="stylesheet" type="text/css" />`).join('\n');
}

function scriptTag(jsFilePath) {
  return `<script type="text/javascript" src="${ jsFilePath }"></script>`;
}

function scriptTags(jsFilePaths) {
  return jsFilePaths.map(scriptTag).join('\n');
}

function generateHTML(args) {
  const { reactAppString, initialState, nonce, helmet, codeSplitState } = args;

  // The chunks that we need to fetch the assets (js/css) for and then include
  // said assets as script/style tags within our html.
  const chunksForRender = [
  // We always manually add the main entry chunk for our client bundle. It
  // must always be the first item in the collection.
  'index'];

  if (codeSplitState) {
    // We add all the chunks that our CodeSplitProvider tracked as being used
    // for this render.  This isn't actually required as the rehydrate function
    // of code-split-component which gets executed in our client bundle will
    // ensure all our required chunks are loaded, but its a nice optimisation as
    // it means the browser can start fetching the required files before it's
    // even finished parsing our client bundle entry script.
    // Having the assets.json file available to us made implementing this
    // feature rather arbitrary.
    codeSplitState.chunks.forEach(chunk => chunksForRender.push(chunk));
  }

  // Now we get the assets (js/css) for the chunks.
  const assetsForRender = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getAssetsForClientChunks__["a" /* default */])(chunksForRender);

  // Creates an inline script definition that is protected by the nonce.
  const inlineScript = body => `<script nonce="${ nonce }" type='text/javascript'>
       ${ body }
     </script>`;

  return `<!DOCTYPE html>
    <html ${ helmet ? helmet.htmlAttributes.toString() : '' }>
      <head>
        ${ helmet ? helmet.title.toString() : '' }
        ${ helmet ? helmet.meta.toString() : '' }
        ${ helmet ? helmet.link.toString() : '' }
        ${ styleTags(assetsForRender.css) }
        ${ helmet ? helmet.style.toString() : '' }
      </head>
      <body>
        <div id='app'>${ reactAppString || '' }</div>
        ${
  // Binds the client configuration object to the window object so
  // that we can safely expose some configuration values to the
  // client bundle that gets executed in the browser.
  inlineScript(`window.__CLIENT_CONFIG__=${ __WEBPACK_IMPORTED_MODULE_0_serialize_javascript___default()(__WEBPACK_IMPORTED_MODULE_3__config__["clientConfig"]) }`) }
        ${
  // Bind the initial application state based on the server render
  // so the client can register the correct initial state for the view.
  initialState ? inlineScript(`window.__APP_STATE__=${ __WEBPACK_IMPORTED_MODULE_0_serialize_javascript___default()(initialState) };`) : '' }
        ${
  // Bind our code split state so that the client knows which server
  // rendered modules need to be rehydrated.
  codeSplitState ? inlineScript(`window.${ __WEBPACK_IMPORTED_MODULE_1_code_split_component__["STATE_IDENTIFIER"] }=${ __WEBPACK_IMPORTED_MODULE_0_serialize_javascript___default()(codeSplitState) };`) : '' }
        ${
  // Enable the polyfill io script?
  // This can't be configured within a react-helmet component as we
  // may need the polyfill's before our client bundle gets parsed.
  __WEBPACK_IMPORTED_MODULE_3__config__["default"].polyfillIO.enabled ? scriptTag(__WEBPACK_IMPORTED_MODULE_3__config__["default"].polyfillIO.url) : '' }
        ${
  // When we are in development mode our development server will generate a
  // vendor DLL in order to dramatically reduce our compilation times.  Therefore
  // we need to inject the path to the vendor dll bundle below.
  // @see /tools/development/ensureVendorDLLExists.js
   false ? scriptTag(`${ config.bundles.client.webPath }${ config.bundles.client.devVendorDLL.name }.js?t=${ Date.now() }`) : '' }
        ${ scriptTags(assetsForRender.js) }
        ${ helmet ? helmet.script.toString() : '' }
      </body>
    </html>`;
}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_root_dir__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_root_dir___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_app_root_dir__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(0);
// This file resolves the assets available from our client bundle.






const assetsFilePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_path__["resolve"])(__WEBPACK_IMPORTED_MODULE_2_app_root_dir___default.a.get(), __WEBPACK_IMPORTED_MODULE_3__config__["default"].bundles.client.outputPath, `./${ __WEBPACK_IMPORTED_MODULE_3__config__["default"].bundleAssetsFileName }`);

if (!__WEBPACK_IMPORTED_MODULE_0_fs___default.a.existsSync(assetsFilePath)) {
  throw new Error(`We could not find the "${ assetsFilePath }" file, which contains a list of the assets of the client bundle.  Please ensure that the client bundle has been built.`);
}

const readAssetsJSONFile = () => JSON.parse(__WEBPACK_IMPORTED_MODULE_0_fs___default.a.readFileSync(assetsFilePath, 'utf8'));
const assetsJSON = readAssetsJSONFile();
const assetsJSONResolver = () =>  false
// In development mode we always read the assets json file from disk to avoid
// any cases where an older version gets cached.
? readAssetsJSONFile()
// Otherwise we return the initially parsed JSON file.
: assetsJSON;

/**
 * Retrieves the js/css for the named chunks that belong to our client bundle.
 *
 * Note: the order of the chunk names is important. The same ordering will be
 * used when rendering the scripts.
 *
 * This is useful to us for a couple of reasons:
 *   - It allows us to target the assets for a specific chunk, thereby only
 *     loading the assets we know we will need for a specific request.
 *   - The assets are hashed, and therefore they can't be "manually" added
 *     to the render logic.  Having this method allows us to easily fetch
 *     the respective assets simply by using a chunk name. :)
 */
function getAssetsForClientChunks(chunks) {
  return chunks.reduce((acc, chunkName) => {
    const chunkAssets = assetsJSONResolver()[chunkName];
    if (chunkAssets) {
      if (chunkAssets.js) {
        acc.js.push(chunkAssets.js);
      }
      if (chunkAssets.css) {
        acc.css.push(chunkAssets.css);
      }
    }
    return acc;
  }, { js: [], css: [] });
}

/* harmony default export */ exports["a"] = getAssetsForClientChunks;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_code_split_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_code_split_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_code_split_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generateHTML__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_DemoApp__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(0);










/**
 * An express middleware that is capabable of service our React application,
 * supporting server side rendering of the application.
 */
function reactApplicationMiddleware(request, response) {
  // We should have had a nonce provided to us.  See the server/index.js for
  // more information on what this is.
  if (typeof response.locals.nonce !== 'string') {
    throw new Error('A "nonce" value has not been attached to the response');
  }
  const nonce = response.locals.nonce;

  // It's possible to disable SSR, which can be useful in development mode.
  // In this case traditional client side only rendering will occur.
  if (__WEBPACK_IMPORTED_MODULE_7__config__["default"].disableSSR) {
    if (false) {
      // eslint-disable-next-line no-console
      console.log('==> Handling react route without SSR');
    }
    // SSR is disabled so we will just return an empty html page and will
    // rely on the client to initialize and render the react application.
    const html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__generateHTML__["a" /* default */])({
      // Nonce which allows us to safely declare inline scripts.
      nonce
    });
    response.status(200).send(html);
    return;
  }

  // First create a context for <ServerRouter>, which will allow us to
  // query for the results of the render.
  const reactRouterContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router__["createServerRenderContext"])();

  // We also create a context for our <CodeSplitProvider> which will allow us
  // to query which chunks/modules were used during the render process.
  const codeSplitContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_code_split_component__["createRenderContext"])();

  // Create our React application and render it into a string.
  const reactAppString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_code_split_component__["CodeSplitProvider"],
    { context: codeSplitContext },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_router__["ServerRouter"],
      { location: request.url, context: reactRouterContext },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__shared_components_DemoApp__["a" /* default */], null)
    )
  ));

  // Generate the html response.
  const html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__generateHTML__["a" /* default */])({
    // Provide the full app react element.
    reactAppString,
    // Nonce which allows us to safely declare inline scripts.
    nonce,
    // Running this gets all the helmet properties (e.g. headers/scripts/title etc)
    // that need to be included within our html.  It's based on the rendered app.
    // @see https://github.com/nfl/react-helmet
    helmet: __WEBPACK_IMPORTED_MODULE_4_react_helmet___default.a.rewind(),
    // We provide our code split state so that it can be included within the
    // html, and then the client bundle can use this data to know which chunks/
    // modules need to be rehydrated prior to the application being rendered.
    codeSplitState: codeSplitContext.getState()
  });

  // Get the render result from the server render context.
  const renderResult = reactRouterContext.getResult();

  // Check if the render result contains a redirect, if so we need to set
  // the specific status and redirect header and end the response.
  if (renderResult.redirect) {
    response.status(301).setHeader('Location', renderResult.redirect.pathname);
    response.end();
    return;
  }

  response.status(renderResult.missed
  // If the renderResult contains a "missed" match then we set a 404 code.
  // Our App component will handle the rendering of an Error404 view.
  ? 404
  // Otherwise everything is all good and we send a 200 OK status.
  : 200).send(html);
}

/* harmony default export */ exports["a"] = reactApplicationMiddleware;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hpp__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hpp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hpp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helmet__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(0);





const cspConfig = {
  directives: {
    childSrc: ["'self'"],
    // Note: Setting this to stricter than * breaks the service worker. :(
    // I can't figure out how to get around this, so if you know of a safer
    // implementation that is kinder to service workers please let me know.
    connectSrc: ['*'], // ["'self'", 'ws:'],
    defaultSrc: ["'self'"],
    imgSrc: ["'self'"],
    fontSrc: ["'self'"],
    objectSrc: ["'self'"],
    mediaSrc: ["'self'"],
    manifestSrc: ["'self'"],
    scriptSrc: [
    // Allow scripts hosted from our application.
    "'self'",
    // Allow scripts from https://cdn.polyfill.io so that we can import the polyfill.
    'https://cdn.polyfill.io',
    // Note: We will execution of any inline scripts that have the following
    // nonce identifier attached to them.
    // This is useful for guarding your application whilst allowing an inline
    // script to do data store rehydration (redux/mobx/apollo) for example.
    // @see https://helmetjs.github.io/docs/csp/
    (req, res) => `'nonce-${ res.locals.nonce }'`,
    // This is a know workaround for browsers that don't support nonces.
    // It will be ignored by browsers that do support nonces as they will
    // recognise that we have also provided a nonce configuration and 
    // use the stricter rule.
    "'unsafe-inline'"],
    styleSrc: ["'self'",
    // Webpack generates JS that loads our CSS, so this is needed:
    "'unsafe-inline'", 'blob:']
  }
};

// Add any additional CSP from the static config.
Object.keys(__WEBPACK_IMPORTED_MODULE_3__config__["default"].cspExtensions).forEach(key => {
  if (cspConfig.directives[key]) {
    cspConfig.directives[key] = cspConfig.directives[key].concat(__WEBPACK_IMPORTED_MODULE_3__config__["default"].cspExtensions[key]);
  } else {
    cspConfig.directives[key] = __WEBPACK_IMPORTED_MODULE_3__config__["default"].cspExtensions[key];
  }
});

if (false) {
  // When in development mode we need to add our secondary express server that
  // is used to host our client bundle to our csp config.
  Object.keys(cspConfig.directives).forEach(directive => {
    cspConfig.directives[directive].push(`${ config.host }:${ config.clientDevServerPort }`);
  });
}

// Attach a unique "nonce" to every response.  This allows use to declare
// inline scripts as being safe for execution against our content security policy.
// @see https://helmetjs.github.io/docs/csp/
function nonceMiddleware(req, res, next) {
  // eslint-disable-next-line no-param-reassign
  res.locals.nonce = __WEBPACK_IMPORTED_MODULE_0_uuid___default.a.v4();
  next();
}

const securityMiddleware = [nonceMiddleware,

// Prevent HTTP Parameter pollution.
// @see http://bit.ly/2f8q7Td
__WEBPACK_IMPORTED_MODULE_1_hpp___default()(),

// The xssFilter middleware sets the X-XSS-Protection header to prevent
// reflected XSS attacks.
// @see https://helmetjs.github.io/docs/xss-filter/
__WEBPACK_IMPORTED_MODULE_2_helmet___default.a.xssFilter(),

// Frameguard mitigates clickjacking attacks by setting the X-Frame-Options header.
// @see https://helmetjs.github.io/docs/frameguard/
__WEBPACK_IMPORTED_MODULE_2_helmet___default.a.frameguard('deny'),

// Sets the X-Download-Options to prevent Internet Explorer from executing
// downloads in your site’s context.
// @see https://helmetjs.github.io/docs/ienoopen/
__WEBPACK_IMPORTED_MODULE_2_helmet___default.a.ieNoOpen(),

// Don’t Sniff Mimetype middleware, noSniff, helps prevent browsers from trying
// to guess (“sniff”) the MIME type, which can have security implications. It
// does this by setting the X-Content-Type-Options header to nosniff.
// @see https://helmetjs.github.io/docs/dont-sniff-mimetype/
__WEBPACK_IMPORTED_MODULE_2_helmet___default.a.noSniff(),

// Content Security Policy
//
// If you are unfamiliar with CSPs then I highly recommend that you do some
// reading on the subject:
//  - https://content-security-policy.com/
//  - https://developers.google.com/web/fundamentals/security/csp/
//  - https://developer.mozilla.org/en/docs/Web/Security/CSP
//  - https://helmetjs.github.io/docs/csp/
//
// If you are relying on scripts/styles/assets from other servers (internal
// or external to your company) then you will need to explicitly configure
// the CSP below to allow for this.  For example you can see I have had to
// add the polyfill.io CDN in order to allow us to use the polyfill script.
// It can be a pain to manage these, but it's a really great habit to get
// in to.
//
// You may find CSPs annoying at first, but it is a great habit to build.
// The CSP configuration is an optional item for helmet, however you should
// not remove it without making a serious consideration that you do not
// require the added security.
__WEBPACK_IMPORTED_MODULE_2_helmet___default.a.contentSecurityPolicy(cspConfig)];

/* harmony default export */ exports["a"] = securityMiddleware;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_root_dir__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_root_dir___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_app_root_dir__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(0);
/* eslint-disable no-unused-vars */





// Middleware to server our service worker.
function serviceWorkerMiddleware(req, res, next) {
  res.sendFile(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_path__["resolve"])(__WEBPACK_IMPORTED_MODULE_1_app_root_dir___default.a.get(), __WEBPACK_IMPORTED_MODULE_2__config__["default"].bundles.client.outputPath, __WEBPACK_IMPORTED_MODULE_2__config__["default"].serviceWorker.fileName));
}

/* harmony default export */ exports["a"] = serviceWorkerMiddleware;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Contributor__ = __webpack_require__(27);




const contributors = [{ name: 'Alin Porumb', twitter: 'alinporumb' }, { name: 'Benjamin Kniffler', twitter: 'bkniffler' }, { name: 'Carson Perrotti', twitter: 'carsonp' }, { name: 'Christian Glombek', twitter: 'LorbusChris' }, { name: 'Christoph Werner', twitter: 'code_punkt' },
// TODO: Get David's twitter handle.
// { name: 'David Edmondson', twitter: '' },
// TODO: Get Evgeny's twitter handle.
// { name: 'Evgeny Boxer', twitter: '' },
{ name: 'Joe Kohlmann', twitter: 'jkohlmann' }, { name: 'Lucian Lature', twitter: 'lucianlature' }, { name: 'Steven Enten', twitter: 'steven_enten' }, { name: 'Sean Matheson', twitter: 'controlplusb' }, { name: 'Steven Truesdell', twitter: 'StruesCO' }];

function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: { textAlign: 'center' } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, { title: 'About' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Produced with \u2764\uFE0F by...'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { style: { marginTop: '1rem' } },
      contributors.map(({ name, twitter }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: name },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Contributor__["a" /* default */], { name: name, twitter: twitter })
      ))
    )
  );
}

/* harmony default export */ exports["a"] = About;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function Contributor({ name, twitter }) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "a",
    {
      href: `https://twitter.com/${ twitter }`,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    name
  );
}

Contributor.propTypes = {
  name: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  twitter: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};

/* harmony default export */ exports["a"] = Contributor;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Contributor__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Contributor__["a"]; });


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__About__ = __webpack_require__(25);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__About__["a"]; });


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_code_split_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_code_split_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_code_split_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalize_css_normalize_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_normalize_css_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_normalize_css_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__globals_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Error404__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Header__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_config__ = __webpack_require__(8);










function DemoApp() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: { padding: '10px' } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_helmet___default.a, {
      htmlAttributes: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_config__["a" /* safeConfigGet */])(['htmlPage', 'htmlAttributes']),
      titleTemplate: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_config__["a" /* safeConfigGet */])(['htmlPage', 'titleTemplate']),
      defaultTitle: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_config__["a" /* safeConfigGet */])(['htmlPage', 'defaultTitle']),
      meta: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_config__["a" /* safeConfigGet */])(['htmlPage', 'meta']),
      link: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_config__["a" /* safeConfigGet */])(['htmlPage', 'links']),
      script: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_config__["a" /* safeConfigGet */])(['htmlPage', 'scripts'])
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Header__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Match"], {
      exactly: true,
      pattern: '/',
      render: routerProps => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_code_split_component__["CodeSplit"],
        { chunkName: 'home', modules: { Home: __webpack_require__(39) }, moduleMap: {
            Home: '7010a8899a45'
          },
          mode: 'server',
          transpiled: true
        },
        ({ Home }) => Home && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Home, routerProps)
      )
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Match"], {
      pattern: '/about',
      render: routerProps => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_code_split_component__["CodeSplit"],
        { chunkName: 'about', modules: { About: __webpack_require__(28) }, moduleMap: {
            About: '863d577ca41e'
          },
          mode: 'server',
          transpiled: true
        },
        ({ About }) => About && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(About, routerProps)
      )
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Miss"], { component: __WEBPACK_IMPORTED_MODULE_6__Error404__["a" /* default */] })
  );
}

/* harmony default export */ exports["a"] = DemoApp;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function Error404() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Sorry, that page was not found.'
  );
}

/* harmony default export */ exports["a"] = Error404;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error404__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Error404__["a"]; });


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Logo__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu__ = __webpack_require__(36);




function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: { textAlign: 'center', marginBottom: '1rem' } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Logo__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'React, Universally'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'strong',
      null,
      'A starter kit giving you the minimum requirements for a modern universal react application.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Menu__["a" /* default */], null)
  );
}

/* harmony default export */ exports["a"] = Header;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_png__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__logo_png__);



function Logo() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_1__logo_png___default.a, alt: 'Logo', style: { width: '100px' } });
}

/* harmony default export */ exports["a"] = Logo;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Logo__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Logo__["a"]; });


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);



function Menu() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { style: { marginTop: '1rem' } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
        { to: '/' },
        'Home'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
        { to: '/about' },
        'About'
      )
    )
  );
}

/* harmony default export */ exports["a"] = Menu;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Menu__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Menu__["a"]; });


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Header__["a"]; });


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config__ = __webpack_require__(8);




function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'article',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, { title: 'Home' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* safeConfigGet */])(['welcomeMessage'])
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'This starter kit contains all the build tooling and configuration you need to kick off your next universal React project, whilst containing a minimal project set up allowing you to make your own architecture decisions (Redux/Mobx etc).'
    )
  );
}

/* harmony default export */ exports["a"] = Home;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Home__ = __webpack_require__(38);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Home__["a"]; });


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DemoApp__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__DemoApp__["a"]; });


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

var SourceMapConsumer = __webpack_require__(51).SourceMapConsumer;
var path = __webpack_require__(2);
var fs = __webpack_require__(4);

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  try {
    // Use SJAX if we are in the browser
    if (isInBrowser()) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, false);
      xhr.send(null);
      var contents = null
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText
      }
    }

    // Otherwise, use the filesystem
    else {
      var contents = fs.readFileSync(path, 'utf8');
    }
  } catch (e) {
    var contents = null;
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', source, false);
    xhr.send(null);
    fileData = xhr.readyState === 4 ? xhr.responseText : null;

    // Support providing a sourceMappingURL via the SourceMap header
    var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                          xhr.getResponseHeader("X-SourceMap");
    if (sourceMapHeader) {
      return sourceMapHeader;
    }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/)[ \t]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = new Buffer(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map) {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame) {
  if(frame.isNative()) {
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    if (line === 1 && !isInBrowser() && !frame.isEval()) {
      column -= 62;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    frame = cloneCallSite(frame);
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  return error + stack.map(function(frame) {
    return '\n    at ' + wrapCallSite(frame);
  }).join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs.existsSync(source)) {
      contents = fs.readFileSync(source, 'utf8');
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  process.exit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    var Module = __webpack_require__(48);
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};


/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = {
	"name": "react-universally",
	"version": "12.0.0",
	"description": "A starter kit giving you the minimum requirements for a modern universal react application.",
	"main": "build/server/index.js",
	"engines": {
		"node": ">=6"
	},
	"scripts": {
		"preinstall": "node tools/scripts/preinstall",
		"clean": "babel-node tools/scripts/clean",
		"development": "babel-node tools/development",
		"build": "cross-env NODE_ENV=production babel-node tools/scripts/build",
		"analyze": "babel-node tools/scripts/analyze",
		"start": "cross-env NODE_ENV=production node build/server",
		"deploy": "babel-node tools/scripts/deploy",
		"lint": "eslint src",
		"test": "jest",
		"test:coverage": "jest --coverage"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/ctrlplusb/react-universally.git"
	},
	"keywords": [
		"react",
		"boilerplate",
		"starter kit",
		"universal",
		"javascript",
		"express",
		"webpack"
	],
	"contributors": [
		"Alin Porumb",
		"Benjamin Kniffler <bkniffler@me.com>",
		"Carson Perrotti <carsonperrotti@gmail.com>",
		"Christian Glombek <christian.glombek@rwth-aachen.de>",
		"Christoph Werner",
		"David Edmondson",
		"Evgeny Boxer",
		"Joe Kohlmann <kohlmannj@mac.com>",
		"Lucian Lature <lucian.lature@gmail.com>",
		"Steven Enten <steven@enten.fr>",
		"Sean Matheson <sean@ctrlplusb.com>",
		"Steven Truesdell <steven@strues.io>"
	],
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/ctrlplusb/react-universally/issues"
	},
	"homepage": "https://github.com/ctrlplusb/react-universally#readme",
	"jest": {
		"collectCoverageFrom": [
			"src/**/*.{js,jsx}"
		],
		"snapshotSerializers": [
			"<rootDir>/node_modules/enzyme-to-json/serializer"
		],
		"testPathIgnorePatterns": [
			"<rootDir>/(build|tools|node_modules|flow-typed|public)/"
		]
	},
	"dependencies": {
		"app-root-dir": "1.0.2",
		"code-split-component": "2.0.0-alpha.5",
		"colors": "1.1.2",
		"compression": "1.6.2",
		"dotenv": "4.0.0",
		"express": "4.14.0",
		"helmet": "3.3.0",
		"hpp": "0.2.1",
		"normalize.css": "5.0.0",
		"offline-plugin": "4.5.4",
		"react": "15.4.2",
		"react-dom": "15.4.2",
		"react-helmet": "3.3.0",
		"react-router": "4.0.0-alpha.6",
		"serialize-javascript": "1.3.0",
		"user-home": "2.0.0",
		"uuid": "3.0.1"
	},
	"devDependencies": {
		"assets-webpack-plugin": "3.5.0",
		"babel-cli": "6.18.0",
		"babel-core": "6.21.0",
		"babel-eslint": "7.1.1",
		"babel-jest": "18.0.0",
		"babel-loader": "6.2.10",
		"babel-plugin-transform-react-jsx-self": "6.11.0",
		"babel-plugin-transform-react-jsx-source": "6.9.0",
		"babel-polyfill": "6.20.0",
		"babel-preset-env": "1.1.7",
		"babel-preset-latest": "6.16.0",
		"babel-preset-react": "6.16.0",
		"babel-preset-stage-3": "6.17.0",
		"babel-template": "6.16.0",
		"chokidar": "1.6.1",
		"cross-env": "3.1.4",
		"css-loader": "0.26.1",
		"enzyme": "2.7.0",
		"enzyme-to-json": "1.4.5",
		"eslint": "3.13.0",
		"eslint-config-airbnb": "14.0.0",
		"eslint-plugin-flowtype": "2.29.2",
		"eslint-plugin-import": "2.2.0",
		"eslint-plugin-jsx-a11y": "3.0.2",
		"eslint-plugin-react": "6.9.0",
		"extract-text-webpack-plugin": "2.0.0-beta.4",
		"file-loader": "0.9.0",
		"glob": "7.1.1",
		"happypack": "3.0.2",
		"html-webpack-plugin": "2.26.0",
		"jest": "18.1.0",
		"md5": "2.2.1",
		"node-notifier": "4.6.1",
		"react-addons-test-utils": "15.4.2",
		"react-hot-loader": "3.0.0-beta.6",
		"regenerator-runtime": "0.10.1",
		"rimraf": "2.5.4",
		"semver": "5.3.0",
		"source-map-support": "0.4.8",
		"style-loader": "0.13.1",
		"webpack": "2.2.0-rc.3",
		"webpack-bundle-analyzer": "2.2.1",
		"webpack-dev-middleware": "1.9.0",
		"webpack-hot-middleware": "2.15.0",
		"webpack-md5-hash": "0.0.5",
		"webpack-node-externals": "1.5.4"
	}
};

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("colors/safe");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("dotenv");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("helmet");

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("hpp");

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("module");

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = require("serialize-javascript");

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = require("source-map");

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = require("user-home");

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = require("uuid");

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(11);
module.exports = __webpack_require__(10);


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map