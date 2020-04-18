# Using Vault with TestCafe - Example Code

This repo contains the example code used in the article [**Control Your Secrets on TestCafe With Vault**](https://dev-tester.com/how-to-get-started-with-testcafe), published on the Dev Tester blog.

## Running the tests

These tests assume you have access to an instance of [Vault by HashiCorp](https://www.vaultproject.io/) and a key/value secret in the path `airportgap/users/1` using the [version 2 of the KV Secrets Engine](https://www.vaultproject.io/docs/secrets/kv/kv-v2). For more information, read the [Dev Tester article](https://dev-tester.com/control-your-secrets-on-testcafe-with-vault).

- Download and install a recent version of [Node.js and NPM](https://nodejs.org/en/download/).
- Install dependencies with `npm install`.
- Set up the following environment variables:
  - `VAULT_ADDR` - The URL and port of the Vault server (e.g. `http://localhost:8200`).
  - `VAULT_TOKEN` - An [authentication token](https://www.vaultproject.io/docs/auth/token) for accessing secrets in Vault.
- Run tests with `npx testcafe chrome *_test.js`. This command runs the tests in Google Chrome.

## About Dev Tester

![Dev Tester](https://dev-tester.com/content/images/static/dev_tester_logo_txt_black.png)

[Dev Tester](https://dev-tester.com/) is a blog with articles and tips to help you improve your test automation skills as a developer, updated weekly.
