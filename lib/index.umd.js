(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common/http', '@angular/common'], factory) :
	(factory((global.AngularIco = {}),global.ng.core,global.ng.common.http,global.ng.common));
}(this, (function (exports,core,http,common) { 'use strict';

var ICO_CONFIGURATION = new core.InjectionToken('ICO_CONFIGURATION');

var AngularIcoComponent = (function () {
    function AngularIcoComponent(el, http$$1, cfg) {
        this.el = el;
        this.http = http$$1;
        this.cfg = cfg;
        this.autosize = true;
    }
    AngularIcoComponent.prototype.ngOnInit = function () {
        this.Setup();
    };
    AngularIcoComponent.prototype.Setup = function () {
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
    AngularIcoComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ui-icon',
                    template: '<!-- icon space -->',
                    styles: [":host{display:inline-block;vertical-align:middle;margin-top:-.2em}:host svg{fill:currentColor;width:100%;height:100%}"]
                },] },
    ];
    AngularIcoComponent.ctorParameters = function () { return [
        { type: core.ElementRef, },
        { type: http.HttpClient, },
        { type: undefined, decorators: [{ type: core.Inject, args: [ICO_CONFIGURATION,] },] },
    ]; };
    AngularIcoComponent.propDecorators = {
        "name": [{ type: core.Input },],
        "autosize": [{ type: core.Input },],
    };
    return AngularIcoComponent;
}());

var AngularIcoModule = (function () {
    function AngularIcoModule() {
    }
    AngularIcoModule.forRoot = function (config) {
        return {
            ngModule: AngularIcoModule,
            providers: [
                {
                    provide: ICO_CONFIGURATION,
                    useValue: config ? config : { baseUrl: '' }
                }
            ]
        };
    };
    AngularIcoModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        AngularIcoComponent
                    ],
                    exports: [
                        AngularIcoComponent
                    ],
                    schemas: [
                        core.CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] },
    ];
    AngularIcoModule.ctorParameters = function () { return []; };
    return AngularIcoModule;
}());

exports.ICO_CONFIGURATION = ICO_CONFIGURATION;
exports.AngularIcoModule = AngularIcoModule;
exports.AngularIcoComponent = AngularIcoComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
