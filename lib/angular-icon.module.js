import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularIconComponent, AngularIconComponentConfig } from './angular-icon.component';
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