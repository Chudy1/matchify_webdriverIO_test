import path from "node:path";
const { expect, browser } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");

describe("Matchify Profile Creation", () => {
  const uploadPicture = async (filePath) => {
    // const filePath = "";
    const remoteFilePath = await browser.uploadFile(filePath);

    await LoginPage.uploadFileElem.setValue(remoteFilePath);
    await browser.pause(500);
  };

  it("Create Profile with Invalid credentials", async () => {
    await LoginPage.open();
    await browser.maximizeWindow();
    await LoginPage.InsertName("");
    await LoginPage.InsertAge("");
    await LoginPage.selectGender();
    await LoginPage.InsertInterests("");
    await LoginPage.InsertLocation("");
    await uploadPicture("./image.png");
    await LoginPage.clickCreateProfile();

    await expect(LoginPage.errorMessageElem).toHaveText(
      "One or more input fields missing. Please fill out the form completely."
    );
    await browser.pause(2000);
  });

  it("Create Profile with Invalid Image", async () => {
    await browser.refresh();
    await LoginPage.InsertName("Bob");
    await LoginPage.InsertAge("12");
    await LoginPage.selectGender();
    await LoginPage.InsertInterests("Boxing");
    await LoginPage.InsertLocation("Abuja");
    await uploadPicture("./matchify.docx");
    await LoginPage.clickCreateProfile();

    await expect(LoginPage.uploadPicsErrorElem).toHaveText(
      "Please upload a valid image file."
    );
    await browser.pause(2000);
  });

  it("Create Profile with credentials", async () => {
    await browser.refresh();
    await LoginPage.InsertName("Grace");
    await LoginPage.InsertAge("24");
    await LoginPage.selectGender();
    await LoginPage.InsertInterests("Football");
    await LoginPage.InsertLocation("Lagos");
    await uploadPicture("./image.png");
    await LoginPage.clickCreateProfile();

    await expect(LoginPage.successMessage).toHaveText(
      "Profile created successfully!"
    );
    await browser.pause(2000);
  });
});
