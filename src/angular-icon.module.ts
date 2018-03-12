import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularIconComponent } from './angular-icon.component';

@NgModule({
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
})
export class AngularIconModule {
  static forRoot(config: {
    baseUrl?: string;
  }): ModuleWithProviders {
    if (config.baseUrl == null) {
      config.baseUrl = '/';
    }

    AngularIconComponent.baseUrl = config.baseUrl;

    return {
      ngModule: AngularIconModule
    };
  }
}
