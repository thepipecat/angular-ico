import { NgModule, ModuleWithProviders } from '@angular/core';
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
