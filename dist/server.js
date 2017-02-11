module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _app = __webpack_require__(4);

	var _app2 = _interopRequireDefault(_app);

	var _template = __webpack_require__(8);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = (0, _express2.default)();

	server.use('/assets', _express2.default.static('assets'));

	server.get('/', function (req, res) {
	  var isMobile = true;
	  var initialState = { isMobile: isMobile };
	  var appString = (0, _server.renderToString)(_react2.default.createElement(_app2.default, initialState));

	  res.send((0, _template2.default)({
	    body: appString,
	    title: 'Estimations.co|We estimate everything',
	    initialState: JSON.stringify(initialState)
	  }));
	});

	server.listen(process.env.PORT || 3000);
	console.log('listening');

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _hero = __webpack_require__(5);

	var _hero2 = _interopRequireDefault(_hero);

	var _footer = __webpack_require__(6);

	var _footer2 = _interopRequireDefault(_footer);

	var _section = __webpack_require__(7);

	var _section2 = _interopRequireDefault(_section);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var headerData = {
	        Title: 'Estimations.co',
	        SubTitle: 'We estimate any IT projects',
	        Color: 'is-primary'
	      };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_hero2.default, headerData),
	        _react2.default.createElement(
	          _section2.default,
	          {
	            Title: 'Provide your project information. We will estimate it.'
	          },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'label',
	              { className: 'label' },
	              'Name'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'control' },
	              _react2.default.createElement('input', { className: 'input', type: 'text', placeholder: 'Your Name' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'label',
	              { className: 'label' },
	              'Email'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'control' },
	              _react2.default.createElement('input', { className: 'input', type: 'text', placeholder: 'Your Email' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'label',
	              { className: 'label' },
	              'Project You Want To Estimate'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'control' },
	              _react2.default.createElement('input', { className: 'input', type: 'text', placeholder: 'Project Name' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'label',
	              { className: 'label' },
	              'Project Description'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'control' },
	              _react2.default.createElement('textarea', { className: 'textarea', placeholder: 'Describe your project' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'control is-grouped' },
	            _react2.default.createElement(
	              'p',
	              { className: 'control' },
	              _react2.default.createElement(
	                'button',
	                { className: 'button is-primary' },
	                'Submit'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'control' },
	              _react2.default.createElement(
	                'button',
	                { className: 'button is-link' },
	                'Cancel'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_footer2.default, null)
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;


	App.propTypes = {};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hero = function (_Component) {
	  _inherits(Hero, _Component);

	  function Hero() {
	    _classCallCheck(this, Hero);

	    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
	  }

	  _createClass(Hero, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "section",
	        { className: "hero " + this.props.Color },
	        _react2.default.createElement(
	          "div",
	          { className: "hero-body" },
	          _react2.default.createElement(
	            "div",
	            { className: "container" },
	            _react2.default.createElement(
	              "h1",
	              { className: "title" },
	              this.props.Title
	            ),
	            _react2.default.createElement(
	              "h2",
	              { className: "subtitle" },
	              this.props.SubTitle,
	              this.props.children
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Hero;
	}(_react.Component);

	exports.default = Hero;


	Hero.propTypes = {
	  Title: _react.PropTypes.string,
	  SubTitle: _react.PropTypes.string,
	  Color: _react.PropTypes.string
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Footer = function (_Component) {
	    _inherits(Footer, _Component);

	    function Footer() {
	        _classCallCheck(this, Footer);

	        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	    }

	    _createClass(Footer, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "footer",
	                { className: "footer" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "container" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "content has-text-centered" },
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            _react2.default.createElement(
	                                "strong",
	                                null,
	                                "Estimations.co"
	                            ),
	                            " by ",
	                            _react2.default.createElement(
	                                "a",
	                                { href: "http://jgthms.com" },
	                                "Duke Mai"
	                            ),
	                            ". The source code is licensed",
	                            _react2.default.createElement(
	                                "a",
	                                { href: "http://opensource.org/licenses/mit-license.php" },
	                                "MIT"
	                            ),
	                            ". The website content is licensed ",
	                            _react2.default.createElement(
	                                "a",
	                                { href: "http://creativecommons.org/licenses/by-nc-sa/4.0/" },
	                                "CC ANS 4.0"
	                            ),
	                            "."
	                        ),
	                        _react2.default.createElement("p", null)
	                    )
	                )
	            );
	        }
	    }]);

	    return Footer;
	}(_react.Component);

	exports.default = Footer;


	Footer.propTypes = {};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Section = function (_Component) {
	    _inherits(Section, _Component);

	    function Section() {
	        _classCallCheck(this, Section);

	        return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
	    }

	    _createClass(Section, [{
	        key: 'render',
	        value: function render() {
	            var titleBlock = void 0,
	                subTitleBlock = void 0;
	            if (this.props.Title) {
	                titleBlock = _react2.default.createElement(
	                    'h1',
	                    { className: 'title' },
	                    this.props.Title
	                );
	            } else {
	                titleBlock = '';
	            }

	            if (this.props.SubTitle) {
	                subTitleBlock = _react2.default.createElement(
	                    'h2',
	                    { className: 'subtitle' },
	                    this.props.SubTitle
	                );
	            } else {
	                subTitleBlock = '';
	            }

	            return _react2.default.createElement(
	                'section',
	                { className: 'section' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container' },
	                    titleBlock,
	                    subTitleBlock,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'section__body' },
	                        this.props.children
	                    )
	                )
	            );
	        }
	    }]);

	    return Section;
	}(_react.Component);

	exports.default = Section;


	Section.propTypes = {
	    Title: _react.PropTypes.string,
	    SubTitle: _react.PropTypes.string,
	    Color: _react.PropTypes.string
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var body = _ref.body,
	      title = _ref.title,
	      initialState = _ref.initialState;

	  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <meta charset=\"utf-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <meta name=\"description\" content=\"Estimations.co, we estimate software projects\">\n        <title>" + title + "</title>\n        <link rel=\"stylesheet\" href=\"/assets/index.css\" />\n      </head>\n      \n      <body>\n        <div id=\"root\" class=\"container-fluid\">\n          " + body + "\n        </div>        \n      </body>\n      \n      <script src=\"/assets/bundle.js\"></script>\n    </html>\n  ";
	};

/***/ }
/******/ ]);