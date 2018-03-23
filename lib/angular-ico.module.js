import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularIcoComponent } from './angular-ico.component';
import { ICO_CONFIGURATION } from './angular-ico.config';
var AngularIcoModule = (function () {
    function AngularIcoModule() {
    }
    AngularIcoModule.forRoot = function (config) {
        return {
            ngModule: AngularIcoModule,
            providers: [
                {
                    provide: ICO_CONFIGURATION,
                    useValue: config ? config : { baseUrl: '', cache: true }
                }
            ]
        };
    };
    AngularIcoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        AngularIcoComponent
                    ],
                    exports: [
                        AngularIcoComponent
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] },
    ];
    AngularIcoModule.ctorParameters = function () { return []; };
    return AngularIcoModule;
}());
export { AngularIcoModule };
//# sourceMappingURL=angular-ico.module.js.map