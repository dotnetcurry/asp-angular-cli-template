import { InjectionToken } from '@angular/core';

const WINDOW = new InjectionToken<any>('window');

export const windowProvider = { provide: WINDOW, useValue: window };
