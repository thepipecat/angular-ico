import { InjectionToken } from '@angular/core';

export interface AngularIcoComponentConfig {
  baseUrl?: string;
  cache?: boolean;
}

export const ICO_CONFIGURATION = new InjectionToken<AngularIcoComponentConfig>('ICO_CONFIGURATION');
