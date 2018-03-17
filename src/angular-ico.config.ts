import { InjectionToken } from '@angular/core';

export interface AngularIcoComponentConfig {
  baseUrl?: string;
}

export const ICO_CONFIGURATION = new InjectionToken<AngularIcoComponentConfig>('ICO_CONFIGURATION');
