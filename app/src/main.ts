// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './app/auth.config';
import { APP_INITIALIZER } from '@angular/core';

function initAuth(oauth: OAuthService) {
  return () => {
    oauth.configure(authConfig);
    return oauth.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (!oauth.hasValidAccessToken()) {
        oauth.initCodeFlow();           // first visit → go to Keycloak
      }
    });
  };
}

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers,                // existing app config
    { provide: APP_INITIALIZER, useFactory: initAuth, deps: [OAuthService], multi: true }  // enables angular-oauth2-oidc
  ]
}).catch((err) => console.error(err));
