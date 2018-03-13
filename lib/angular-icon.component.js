import { Component, ElementRef, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AngularIconComponentConfig = (function () {
    function AngularIconComponentConfig() {
        this.baseUrl = '/';
    }
    AngularIconComponentConfig.decorators = [
        { type: Injectable },
    ];
    AngularIconComponentConfig.ctorParameters = function () { return []; };
    return AngularIconComponentConfig;
}());
export { AngularIconComponentConfig };
var AngularIconComponent = (function () {
    function AngularIconComponent(el, http, cfg) {
        this.el = el;
        this.http = http;
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
        { type: Component, args: [{
                    selector: 'ui-icon',
                    template: '<!-- icon space -->',
                    styles: [":host{display:inline-block;vertical-align:middle;margin-top:-.2em}:host svg{fill:currentColor;width:100%;height:100%}"]
                },] },
    ];
    AngularIconComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: HttpClient, },
        { type: AngularIconComponentConfig, },
    ]; };
    AngularIconComponent.propDecorators = {
        "name": [{ type: Input },],
        "autosize": [{ type: Input },],
    };
    return AngularIconComponent;
}());
export { AngularIconComponent };
//# sourceMappingURL=angular-icon.component.js.map