import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8383/realms/demo', // Replace with your realm
  redirectUri: window.location.origin,
  clientId: 'portal', // From Keycloak
  responseType: 'code',
  scope: 'openid profile email offline_access',
  showDebugInformation: true,
  useSilentRefresh: true,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  sessionChecksEnabled: true,
};
