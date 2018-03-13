(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common/http', '@angular/common'], factory) :
	(factory((global.pipecat = global.pipecat || {}, global.pipecat.AngularIcon = {}),global.ng.core,global.ng.common.http,global.ng.common));
}(this, (function (exports,core,http,common) { 'use strict';

var AngularIconComponentConfig = (function () {
    function AngularIconComponentConfig() {
        this.baseUrl = '/';
    }
    AngularIconComponentConfig.decorators = [
        { type: core.Injectable },
    ];
    AngularIconComponentConfig.ctorParameters = function () { return []; };
    return AngularIconComponentConfig;
}());
var AngularIconComponent = (function () {
    function AngularIconComponent(el, http$$1, cfg) {
        this.el = el;
        this.http = http$$1;
        this.cfg = cfg;
        this.autosize = true;
    }
    AngularIconComponent.prototype.ngOnInit = function () {
        this.Setup();
    };
    AngularIconComponent.prototype.Setup = function () {
        var _this = this;
        if (this.name != null) {
            this.http.get(this.cfg.baseUrl + "/" + this.name + ".svg", { responseType: 'text' })
                .subscribe(function (response) {
                try {
                    var element = _this.el.nativeElement;
                    element.setAttribute('aria-hidden', 'true');
                    if (_this.autosize) {
                        var tempElement = document.createElement('div');
                        tempElement.innerHTML = response;
                        var first = tempElement.firstElementChild;
                        if (first != null) {
                            first.setAttribute('width', '100%');
                            first.setAttribute('height', '100%');
                            element.innerHTML = first.outerHTML;
                        }
                    }
                    else {
                        element.innerHTML = response;
                    }
                }
                catch (ex) {
                    console.warn(ex);
                }
            }, function (error) {
                console.warn('Icon', error);
            });
        }
        else {
            console.warn('Icon', 'Name is undefined.');
        }
    };
    AngularIconComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ui-icon',
                    template: '<!-- icon space -->',
                    styles: [":host{display:inline-block;vertical-align:middle;margin-top:-.2em}:host svg{fill:currentColor;width:100%;height:100%}"]
                },] },
    ];
    AngularIconComponent.ctorParameters = function () { return [
        { type: core.ElementRef, },
        { type: http.HttpClient, },
        { type: AngularIconComponentConfig, },
    ]; };
    AngularIconComponent.propDecorators = {
        "name": [{ type: core.Input },],
        "autosize": [{ type: core.Input },],
    };
    return AngularIconComponent;
}());

var AngularIconModule = (function () {
    function AngularIconModule() {
    }
    AngularIconModule.forRoot = function (config) {
        return {
            ngModule: AngularIconModule,
            providers: [
                {
                    provide: AngularIconComponentConfig,
                    useExisting: config
                }
            ]
        };
    };
    AngularIconModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        AngularIconComponent
                    ],
                    exports: [
                        AngularIconComponent
                    ],
                    schemas: [
                        core.CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] },
    ];
    AngularIconModule.ctorParameters = function () { return []; };
    return AngularIconModule;
}());

exports.AngularIconModule = AngularIconModule;
exports.AngularIconComponentConfig = AngularIconComponentConfig;
exports.AngularIconComponent = AngularIconComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
