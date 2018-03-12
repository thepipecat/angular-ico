import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularIconComponent, AngularIconComponentConfig, COMP_CONFIG } from './angular-icon.component';

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
  static forRoot(config: AngularIconComponentConfig): ModuleWithProviders {
    if (config.baseUrl != null) {
      COMP_CONFIG.baseUrl = config.baseUrl;
    }

    return {
      ngModule: AngularIconModule
    };
  }
}
