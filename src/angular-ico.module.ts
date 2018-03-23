import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularIcoComponent } from './angular-ico.component';
import { AngularIcoComponentConfig, ICO_CONFIGURATION } from './angular-ico.config';

@NgModule({
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
})
export class AngularIcoModule {
  static forRoot(config?: AngularIcoComponentConfig): ModuleWithProviders {
    return {
      ngModule: AngularIcoModule,
      providers: [
        {
          provide: ICO_CONFIGURATION,
          useValue: config ? config : { baseUrl: '', cache: true } as AngularIcoComponentConfig
        }
      ]
    };
  }
}
