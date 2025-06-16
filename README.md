This is a repository of working example
1. angular app 
	- angular cli 20.x version
	- node 24.x version
	- used oidc library - "angular-oauth2-oidc": "^20.0.0"
2. ngnix
	- angular app dist is deployed in nginx
	- reverse proxy is done for the spring boot app
3. spring boot app
	- spring boot with security config
	- connected to keycloak to validate the token
4. keycloak
	- keycloak 26.x version
	- public client for angular app
	- confidential account for spring boot app