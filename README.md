# Matchify - Profile Creation Tests

## Overview
This repository contains WebDriverIO end-to-end tests for the **Matchify Profile Creation UI**.
The tests validate various scenarios, including invalid inputs, incorrect image uploads, and successful profile creation.

## Prerequisites
- **Node.js** (v14+)
- **WebDriverIO** (v8+)
- **Browser driver** (e.g., ChromeDriver)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
  
3. Install dependencies:
   ```bash
   npm install
   ```

## Test Scenarios
### 1. Create Profile with Invalid Credentials
- Attempts to submit an empty form or form with some empty fields.
- Validates that an appropriate error message is displayed.

### 2. Create Profile with Invalid Image
- Attempts to upload a non-image file.
- Validates that an appropriate error message is displayed.

### 3. Create Profile with Valid Credentials
- Fills out all required fields with valid data.
- Uploads a valid image file.
- Validates the success message after submission.

## Running Tests
To execute the test suite, run:
```bash
npx wdio run wdio.conf.js or npm run wdio
```

## File Structure
- **/tests**: Contains the test cases.
- **/pageobjects**: Encapsulates page object models for better maintainability.
- **/wdio.conf.js**: WebDriverIO configuration file.

## Test Reports
After running the tests, a report will be generated in the `/allure-results` directory.


## Technologies Used
- **JavaScript**
- **WebDriverIO**
- **Node.js**

## Contributing
Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.
