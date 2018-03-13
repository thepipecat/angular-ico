import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularIconComponent, AngularIconComponentConfig } from './angular-icon.component';

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
    return {
      ngModule: AngularIconModule,
      providers: [
        {
          provide: AngularIconComponentConfig,
          useExisting: config
        }
      ]
    };
  }
}
