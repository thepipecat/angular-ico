import { Component, ElementRef, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICO_CONFIGURATION } from './angular-ico.config';
var AngularIcoComponent = (function () {
    function AngularIcoComponent(el, http, cfg) {
        this.el = el;
        this.http = http;
        this.cfg = cfg;
        this.autosize = true;
    }
    AngularIcoComponent.prototype.ngOnInit = function () {
        this.Setup();
    };
    AngularIcoComponent.prototype.Setup = function () {
        var _this = this;
        if (this.name != null) {
            var key_1 = "ui-icon-" + this.name;
            var content = null;
            if (this.cfg.cache) {
                content = window.sessionStorage.getItem(key_1);
            }
            if (content === null) {
                this.http
                    .get(this.cfg.baseUrl + "/" + this.name + ".svg", {
                    responseType: 'text'
                })
                    .subscribe(function (content) {
                    if (_this.cfg.cache) {
                        window.sessionStorage.setItem(key_1, content);
                    }
                    _this.Transform(content);
                }, function (error) {
                    console.warn('Icon', error);
                });
            }
            else {
                this.Transform(content);
            }
        }
        else {
            console.warn('Icon', 'Name is undefined.');
        }
    };
    AngularIcoComponent.prototype.Transform = function (content) {
        try {
            var element = this.el.nativeElement;
            element.setAttribute('aria-hidden', 'true');
            if (this.autosize) {
                var tempElement = document.createElement('div');
                tempElement.innerHTML = content;
                var first = tempElement.firstElementChild;
                if (first != null) {
                    first.removeAttribute('width');
                    first.setAttribute('height', '1em');
                    element.innerHTML = first.outerHTML;
                }
            }
            else {
                element.innerHTML = content;
            }
        }
        catch (ex) {
            console.warn(ex);
        }
    };
    AngularIcoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-icon',
                    template: '<!-- icon space -->',
                    styles: [":host{display:inline-block;vertical-align:middle}:host /deep/ svg{float:left;fill:currentColor}"]
                },] },
    ];
    AngularIcoComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: HttpClient, },
        { type: undefined, decorators: [{ type: Inject, args: [ICO_CONFIGURATION,] },] },
    ]; };
    AngularIcoComponent.propDecorators = {
        "name": [{ type: Input },],
        "autosize": [{ type: Input },],
    };
    return AngularIcoComponent;
}());
export { AngularIcoComponent };
//# sourceMappingURL=angular-ico.component.js.map