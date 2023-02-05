# Takealot E2E
E2E tests for Takelaot

# Getting Started
Please ensure the following requirements are installed:

## for local setup
* Node js LTS
* PNPM - `npm install -g pnpm`

## for docker setup
* Latest docker


# Executing tests
To execute the tests perform the following:
## for local setup
1. Install node_modules by running `pnpm install`
2. Execute the tests by running `pnpm test`

## for docker
1. Execute `docker compose run e2e`

**NB: I could not get it working with docker in headed mode so that you can see the browser executing the tests, if you have the local setup then just in the `playwright.config.ts` file by the `use` property add the following `use: { headless: false }`**
