import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideZoneChangeDetection({eventCoalescing: true}), provideHttpClient(withInterceptorsFromDi()), provideNgxMask({})],
  
};
