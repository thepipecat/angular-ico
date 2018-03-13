import { InjectionToken } from '@angular/core';

export interface AngularIconComponentConfig {
  baseUrl?: string;
}

export const ICON_CONFIGURATION = new InjectionToken<AngularIconComponentConfig>('ICON_CONFIGURATION');
