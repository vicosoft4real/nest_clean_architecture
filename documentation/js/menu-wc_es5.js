'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">foojiapp documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/ApiModule.html\" data-type=\"entity-link\" >ApiModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-ApiModule-0dca4248cabf3a6f9c99260baed9fa936173b00e8f658fd8a8b499a9e28a6d38d6155f30d2bed3cb505eb9da6bf8db067b793d5a9512898856375cfb4796dd6d"' : 'data-target="#xs-controllers-links-module-ApiModule-0dca4248cabf3a6f9c99260baed9fa936173b00e8f658fd8a8b499a9e28a6d38d6155f30d2bed3cb505eb9da6bf8db067b793d5a9512898856375cfb4796dd6d"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-ApiModule-0dca4248cabf3a6f9c99260baed9fa936173b00e8f658fd8a8b499a9e28a6d38d6155f30d2bed3cb505eb9da6bf8db067b793d5a9512898856375cfb4796dd6d"' : 'id="xs-controllers-links-module-ApiModule-0dca4248cabf3a6f9c99260baed9fa936173b00e8f658fd8a8b499a9e28a6d38d6155f30d2bed3cb505eb9da6bf8db067b793d5a9512898856375cfb4796dd6d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/CategoryController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CategoryController</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"controllers/TodoController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TodoController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ExceptionsModule.html\" data-type=\"entity-link\" >ExceptionsModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoggerModule.html\" data-type=\"entity-link\" >LoggerModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-LoggerModule-1f9eceb445162434b45b1ab35909708cb5ab85ba972d16bc7ccc7f0a55eda51665d1061ada0a20ba9930fdb5cf25831b4883f93f061671fbf826b08a910364c6"' : 'data-target="#xs-injectables-links-module-LoggerModule-1f9eceb445162434b45b1ab35909708cb5ab85ba972d16bc7ccc7f0a55eda51665d1061ada0a20ba9930fdb5cf25831b4883f93f061671fbf826b08a910364c6"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-LoggerModule-1f9eceb445162434b45b1ab35909708cb5ab85ba972d16bc7ccc7f0a55eda51665d1061ada0a20ba9930fdb5cf25831b4883f93f061671fbf826b08a910364c6"' : 'id="xs-injectables-links-module-LoggerModule-1f9eceb445162434b45b1ab35909708cb5ab85ba972d16bc7ccc7f0a55eda51665d1061ada0a20ba9930fdb5cf25831b4883f93f061671fbf826b08a910364c6"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/LoggerService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoggerService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RepositoriesModule.html\" data-type=\"entity-link\" >RepositoriesModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TypeormConfigModule.html\" data-type=\"entity-link\" >TypeormConfigModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsecaseModule.html\" data-type=\"entity-link\" >UsecaseModule</a>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#entities-links"' : 'data-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/Category.html\" data-type=\"entity-link\" >Category</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Todo.html\" data-type=\"entity-link\" >Todo</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AddCategoryCommand.html\" data-type=\"entity-link\" >AddCategoryCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AddCategoryCommandHandler.html\" data-type=\"entity-link\" >AddCategoryCommandHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AddCategoryDto.html\" data-type=\"entity-link\" >AddCategoryDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AddTodoCommand.html\" data-type=\"entity-link\" >AddTodoCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AddTodoCommandHandler.html\" data-type=\"entity-link\" >AddTodoCommandHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AddTodoDto.html\" data-type=\"entity-link\" >AddTodoDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AllExceptionFilter.html\" data-type=\"entity-link\" >AllExceptionFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CategoryDto.html\" data-type=\"entity-link\" >CategoryDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CategoryPresenter.html\" data-type=\"entity-link\" >CategoryPresenter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CategoryResponse.html\" data-type=\"entity-link\" >CategoryResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeleteTodoCommand.html\" data-type=\"entity-link\" >DeleteTodoCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeleteTodoCommandHandler.html\" data-type=\"entity-link\" >DeleteTodoCommandHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GetAllCategoryQuery.html\" data-type=\"entity-link\" >GetAllCategoryQuery</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GetAllCategoryQueryHandler.html\" data-type=\"entity-link\" >GetAllCategoryQueryHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GetAllTodoQuery.html\" data-type=\"entity-link\" >GetAllTodoQuery</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GetAllTodoQueryHandler.html\" data-type=\"entity-link\" >GetAllTodoQueryHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GetTodoByIdQuery.html\" data-type=\"entity-link\" >GetTodoByIdQuery</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GetTodoByIdQueryHandler.html\" data-type=\"entity-link\" >GetTodoByIdQueryHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MessagePresenter.html\" data-type=\"entity-link\" >MessagePresenter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ResponseFormat.html\" data-type=\"entity-link\" >ResponseFormat</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ResponseFormat-1.html\" data-type=\"entity-link\" >ResponseFormat</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TodoCategory.html\" data-type=\"entity-link\" >TodoCategory</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TodoPresenter.html\" data-type=\"entity-link\" >TodoPresenter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TodoResponse.html\" data-type=\"entity-link\" >TodoResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TodoTask.html\" data-type=\"entity-link\" >TodoTask</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateTodoCommand.html\" data-type=\"entity-link\" >UpdateTodoCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateTodoCommandHandler.html\" data-type=\"entity-link\" >UpdateTodoCommandHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateTodoDto.html\" data-type=\"entity-link\" >UpdateTodoDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/CategoryRepository.html\" data-type=\"entity-link\" >CategoryRepository</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ExceptionsService.html\" data-type=\"entity-link\" >ExceptionsService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LoggingInterceptor.html\" data-type=\"entity-link\" >LoggingInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ResponseInterceptor.html\" data-type=\"entity-link\" >ResponseInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ResponseInterceptor-1.html\" data-type=\"entity-link\" >ResponseInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TodoRepository.html\" data-type=\"entity-link\" >TodoRepository</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Category.html\" data-type=\"entity-link\" >Category</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Category-1.html\" data-type=\"entity-link\" >Category</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ICategoryRepsoitory.html\" data-type=\"entity-link\" >ICategoryRepsoitory</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IDatabaseConfig.html\" data-type=\"entity-link\" >IDatabaseConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IError.html\" data-type=\"entity-link\" >IError</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IException.html\" data-type=\"entity-link\" >IException</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IFormatExceptionMessage.html\" data-type=\"entity-link\" >IFormatExceptionMessage</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ILogger.html\" data-type=\"entity-link\" >ILogger</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ITodoRepository.html\" data-type=\"entity-link\" >ITodoRepository</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));