import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularIconComponent } from './angular-icon.component';
import { AngularIconComponentConfig, ICON_CONFIGURATION } from './angular-icon.config';

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
  static forRoot(config?: AngularIconComponentConfig): ModuleWithProviders {
    return {
      ngModule: AngularIconModule,
      providers: [
        {
          provide: ICON_CONFIGURATION,
          useValue: config ? config : { baseUrl: '' }
        }
      ]
    };
  }
}
