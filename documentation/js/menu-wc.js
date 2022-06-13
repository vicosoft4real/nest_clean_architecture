'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">foojiapp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link" >ApiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ApiModule-0dca4248cabf3a6f9c99260baed9fa936173b00e8f658fd8a8b499a9e28a6d38d6155f30d2bed3cb505eb9da6bf8db067b793d5a9512898856375cfb4796dd6d"' : 'data-target="#xs-controllers-links-module-ApiModule-0dca4248cabf3a6f9c99260baed9fa936173b00e8f658fd8a8b499a9e28a6d38d6155f30d2bed3cb505eb9da6bf8db067b793d5a9512898856375cfb4796dd6d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ApiModule-0dca4248cabf3a6f9c99260baed9fa936173b00e8f658fd8a8b499a9e28a6d38d6155f30d2bed3cb505eb9da6bf8db067b793d5a9512898856375cfb4796dd6d"' :
                                            'id="xs-controllers-links-module-ApiModule-0dca4248cabf3a6f9c99260baed9fa936173b00e8f658fd8a8b499a9e28a6d38d6155f30d2bed3cb505eb9da6bf8db067b793d5a9512898856375cfb4796dd6d"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TodoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExceptionsModule.html" data-type="entity-link" >ExceptionsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoggerModule-1f9eceb445162434b45b1ab35909708cb5ab85ba972d16bc7ccc7f0a55eda51665d1061ada0a20ba9930fdb5cf25831b4883f93f061671fbf826b08a910364c6"' : 'data-target="#xs-injectables-links-module-LoggerModule-1f9eceb445162434b45b1ab35909708cb5ab85ba972d16bc7ccc7f0a55eda51665d1061ada0a20ba9930fdb5cf25831b4883f93f061671fbf826b08a910364c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-1f9eceb445162434b45b1ab35909708cb5ab85ba972d16bc7ccc7f0a55eda51665d1061ada0a20ba9930fdb5cf25831b4883f93f061671fbf826b08a910364c6"' :
                                        'id="xs-injectables-links-module-LoggerModule-1f9eceb445162434b45b1ab35909708cb5ab85ba972d16bc7ccc7f0a55eda51665d1061ada0a20ba9930fdb5cf25831b4883f93f061671fbf826b08a910364c6"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoriesModule.html" data-type="entity-link" >RepositoriesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TypeormConfigModule.html" data-type="entity-link" >TypeormConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsecaseModule.html" data-type="entity-link" >UsecaseModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Category.html" data-type="entity-link" >Category</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Todo.html" data-type="entity-link" >Todo</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddCategoryCommand.html" data-type="entity-link" >AddCategoryCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCategoryCommandHandler.html" data-type="entity-link" >AddCategoryCommandHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddCategoryDto.html" data-type="entity-link" >AddCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddTodoCommand.html" data-type="entity-link" >AddTodoCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddTodoCommandHandler.html" data-type="entity-link" >AddTodoCommandHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddTodoDto.html" data-type="entity-link" >AddTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllExceptionFilter.html" data-type="entity-link" >AllExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryDto.html" data-type="entity-link" >CategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryPresenter.html" data-type="entity-link" >CategoryPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryResponse.html" data-type="entity-link" >CategoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteTodoCommand.html" data-type="entity-link" >DeleteTodoCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteTodoCommandHandler.html" data-type="entity-link" >DeleteTodoCommandHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllCategoryQuery.html" data-type="entity-link" >GetAllCategoryQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllCategoryQueryHandler.html" data-type="entity-link" >GetAllCategoryQueryHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllTodoQuery.html" data-type="entity-link" >GetAllTodoQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllTodoQueryHandler.html" data-type="entity-link" >GetAllTodoQueryHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetTodoByIdQuery.html" data-type="entity-link" >GetTodoByIdQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetTodoByIdQueryHandler.html" data-type="entity-link" >GetTodoByIdQueryHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessagePresenter.html" data-type="entity-link" >MessagePresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseFormat.html" data-type="entity-link" >ResponseFormat</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseFormat-1.html" data-type="entity-link" >ResponseFormat</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoCategory.html" data-type="entity-link" >TodoCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoPresenter.html" data-type="entity-link" >TodoPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoResponse.html" data-type="entity-link" >TodoResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoTask.html" data-type="entity-link" >TodoTask</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoCommand.html" data-type="entity-link" >UpdateTodoCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoCommandHandler.html" data-type="entity-link" >UpdateTodoCommandHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoDto.html" data-type="entity-link" >UpdateTodoDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategoryRepository.html" data-type="entity-link" >CategoryRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionsService.html" data-type="entity-link" >ExceptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseInterceptor.html" data-type="entity-link" >ResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseInterceptor-1.html" data-type="entity-link" >ResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TodoRepository.html" data-type="entity-link" >TodoRepository</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category-1.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICategoryRepsoitory.html" data-type="entity-link" >ICategoryRepsoitory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatabaseConfig.html" data-type="entity-link" >IDatabaseConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IError.html" data-type="entity-link" >IError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IException.html" data-type="entity-link" >IException</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormatExceptionMessage.html" data-type="entity-link" >IFormatExceptionMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILogger.html" data-type="entity-link" >ILogger</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITodoRepository.html" data-type="entity-link" >ITodoRepository</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});