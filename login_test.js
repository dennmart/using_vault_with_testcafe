import loginPageModel from "./page_models/login_page_model";

const vault = require("node-vault")({
  endpoint: process.env.VAULT_ADDR,
  token: process.env.VAULT_TOKEN,
});

fixture("Airport Gap Login").page("https://airportgap-staging.dev-tester.com/login");

test("User can log in to their account", async (t) => {
  const loginInfo = await vault.read("secret/data/airportgap/users/1");
  console.log(loginInfo);
  const { username, password } = loginInfo.data.data;

  await t
    .typeText(loginPageModel.emailInput, username)
    .typeText(loginPageModel.passwordInput, password)
    .click(loginPageModel.submitButton);

  await t.expect(loginPageModel.accountHeader.exists).ok();
});
