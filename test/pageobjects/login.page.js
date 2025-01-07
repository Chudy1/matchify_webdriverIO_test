const { $, browser } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  get inputName() {
    return $("#name");
  }

  get inputAge() {
    return $("#age");
  }

  get genderSelector() {
    return $("#gender");
  }

  get interestSelector() {
    return $("#interests");
  }

  get locationSelector() {
    return $("#location");
  }

  get createProfile() {
    return $(".btn");
  }

  get successMessage() {
    return $("#successMessage");
  }

  get uploadFileElem() {
    return $("#profilePic");
  }

  get maleSelector() {
    return $('select#gender option[value="Male"]');
  }

  get errorMessageElem() {
    return $("#errorMessage");
  }

  get uploadPicsErrorElem() {
    return $("#fileError");
  }

  get femaleSelector() {
    return $('select#gender option[value="Female"]');
  }

  async InsertName(username) {
    await this.inputName.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Form not displayed after 5 seconds",
    });
    await this.inputName.setValue(username);
    await browser.pause(500);
  }

  async InsertLocation(location) {
    await this.locationSelector.setValue(location);
    await browser.pause(500);
  }
  async InsertInterests(interest) {
    await this.interestSelector.setValue(interest);
    await browser.pause(1000);
  }

  async InsertAge(age) {
    await this.inputAge.setValue(age);
    await browser.pause(500);
  }

  async selectGender() {
    await this.genderSelector.click();
    await browser.pause(500);
    await this.maleSelector.click();
    await browser.pause(500);
  }

  async clickCreateProfile() {
    await this.createProfile.click();
    await browser.pause(500);
  }

  open() {
    return super.open("index.html");
  }
}

module.exports = new LoginPage();
