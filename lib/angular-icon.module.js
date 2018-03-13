import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularIconComponent } from './angular-icon.component';
import { ICON_CONFIGURATION } from './angular-icon.config';
var AngularIconModule = (function () {
    function AngularIconModule() {
    }
    AngularIconModule.forRoot = function (config) {
        return {
            ngModule: AngularIconModule,
            providers: [
                {
                    provide: ICON_CONFIGURATION,
                    useValue: config ? config : { baseUrl: '' }
                }
            ]
        };
    };
    AngularIconModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        AngularIconComponent
                    ],
                    exports: [
                        AngularIconComponent
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] },
    ];
    AngularIconModule.ctorParameters = function () { return []; };
    return AngularIconModule;
}());
export { AngularIconModule };
//# sourceMappingURL=angular-icon.module.js.map