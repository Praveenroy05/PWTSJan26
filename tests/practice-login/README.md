# Practice Test Automation Login - Comprehensive Test Suite

This directory contains a comprehensive test suite for the Practice Test Automation Login application using Playwright and the Page Object Model (POM) pattern.

## 📁 Project Structure

```
pages/practiceLogin/
├── BasePage.ts              # Base class with common methods
├── PracticeLoginPage.ts     # Login page object
└── SuccessPage.ts           # Success page object

tests/practice-login/
├── 01-positive-scenarios/   # Positive login scenarios (3 tests)
│   └── successful-login.spec.ts
├── 02-negative-scenarios/   # Negative scenarios with invalid credentials (13 tests)
│   ├── invalid-username.spec.ts
│   └── invalid-password.spec.ts
├── 03-edge-cases/           # Edge cases and boundary testing (11 tests)
│   └── edge-cases.spec.ts
├── 04-ui-ux/                # UI/UX and form behavior (9 tests)
│   └── form-behavior.spec.ts
└── 05-functional-security/  # Functional and security scenarios (10 tests)
    └── functional-security.spec.ts
```

## 📊 Test Coverage

### Total: 60+ Test Cases

#### 1. Positive Scenarios (3 tests)
- ✅ Successful login with valid credentials
- ✅ Page loads with correct title and heading
- ✅ Form elements are properly labeled and positioned

#### 2. Negative Scenarios - Invalid Username (7 tests)
- ❌ Login with incorrect username
- ❌ Login with empty username field
- ❌ Login with completely empty form
- ❌ Username is case-sensitive (STUDENT vs student)
- ❌ Username with leading whitespace
- ❌ Username with trailing whitespace
- ❌ Username with special characters

#### 3. Negative Scenarios - Invalid Password (6 tests)
- ❌ Login with incorrect password
- ❌ Login with empty password field
- ❌ Password is case-sensitive
- ❌ Password with leading whitespace
- ❌ Password with trailing whitespace
- ❌ Common incorrect passwords

#### 4. Edge Cases and Boundary Testing (11 tests)
- 🔄 Very long username string (255+ characters)
- 🔄 Very long password string
- 🔄 SQL injection attempt in username
- 🔄 SQL injection attempt in password
- 🔄 Numbers only in username
- 🔄 Special characters in password
- 🔄 Unicode and emoji characters
- 🔄 Only whitespace in username
- 🔄 Only whitespace in password
- 🔄 Tab character in username
- 🔄 XSS attempt in username

#### 5. UI/UX and Form Behavior (9 tests)
- 🎨 Error message is displayed prominently
- 🎨 Form retains values after error
- 🎨 Tab key navigation between form fields
- 🎨 Enter key submits the form
- 🎨 Submit button is clearly visible and clickable
- 🎨 Username and password fields have labels
- 🎨 Page header and instructions are visible
- 🎨 Navigation menu is present and functional
- 🎨 Footer is present and functional

#### 6. Functional and Security Scenarios (10 tests)
- 🔐 Logout functionality
- 🔐 Browser back button after successful login
- 🔐 Multiple failed login attempts
- 🔐 Form validation - no HTML attribute bypass
- 🔐 Response time on successful login
- 🔐 XSS attack attempt in username field
- 🔐 XSS attack attempt in password field
- 🔐 Password field masking
- 🔐 No default values in form fields
- 🔐 Credentials are validated on server-side

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running Tests

**Run all tests:**
```bash
npm run fullTest
```

**Run only login tests:**
```bash
npx playwright test tests/practice-login/
```

**Run specific test category:**
```bash
# Positive scenarios
npx playwright test tests/practice-login/01-positive-scenarios/

# Negative scenarios
npx playwright test tests/practice-login/02-negative-scenarios/

# Edge cases
npx playwright test tests/practice-login/03-edge-cases/

# UI/UX tests
npx playwright test tests/practice-login/04-ui-ux/

# Functional & Security tests
npx playwright test tests/practice-login/05-functional-security/
```

**Run specific test file:**
```bash
npx playwright test tests/practice-login/01-positive-scenarios/successful-login.spec.ts
```

**Run specific test by name:**
```bash
npx playwright test -g "Successful login with valid credentials"
```

**Run with tags:**
```bash
# Run smoke tests
npx playwright test -g "@smoke"

# Run security tests
npx playwright test -g "@security"

# Run negative tests
npx playwright test -g "@negative"
```

### Test Reports

**Generate and open HTML report:**
```bash
npx playwright show-report
```

**Generate Allure report:**
```bash
allure serve allure-results
```

## 📝 Page Object Model (POM) Pattern

### BasePage.ts
Contains common methods used across all pages:
- Navigation methods
- URL and title verification
- Screenshot capture
- Wait methods
- Keyboard operations

### PracticeLoginPage.ts
Contains login page-specific locators and methods:
- Username field locator
- Password field locator
- Submit button locator
- Login action methods
- Validation methods

### SuccessPage.ts
Contains success page-specific locators and methods:
- Success heading locator
- Success message locator
- Logout link locator
- Verification methods

## 🧪 Test Execution Flow

### Example: Positive Login Test
```typescript
test("Test 1.1: Successful login with valid credentials", async () => {
  // 1. Navigate to login page
  await loginPage.navigateToLoginPage();
  
  // 2. Enter valid credentials
  await loginPage.enterUsername("student");
  await loginPage.enterPassword("Password123");
  
  // 3. Click Submit
  await loginPage.clickSubmit();
  
  // 4. Verify successful login
  expect(await successPage.isSuccessHeadingVisible()).toBeTruthy();
});
```

## 🎯 Key Features

✅ **POM Pattern** - Maintainable and scalable test structure
✅ **Comprehensive Coverage** - 60+ test cases covering all scenarios
✅ **Security Testing** - SQL injection, XSS, and validation tests
✅ **Accessibility Testing** - Keyboard navigation and form behavior
✅ **Performance Testing** - Response time measurement
✅ **Error Handling** - Proper exception handling and retry logic
✅ **Parallel Execution** - Tests can run in parallel
✅ **Detailed Reporting** - HTML, Allure, and Monocart reports
✅ **Screenshots & Videos** - Automatic capture on failures
✅ **Tags** - Organize tests with tags for easy filtering

## 🔧 Configuration

Configuration is managed in `playwright.config.ts`:
- Browser: Chromium (Firefox and Safari can be enabled)
- Timeout: 60 seconds per test
- Retries: 0 (2 on CI)
- Workers: 2 (1 on CI)
- Screenshots: On failure
- Videos: On failure
- Traces: On failure

## 📚 Valid Credentials for Testing

- **Username**: student
- **Password**: Password123

## 🎨 Test Tags

- `@smoke` - Smoke tests
- `@regression` - Regression tests
- `@positive` - Positive scenarios
- `@negative` - Negative scenarios
- `@edge-case` - Edge cases
- `@security` - Security tests
- `@xss` - XSS tests
- `@sql-injection` - SQL injection tests
- `@ui` - UI tests
- `@ux` - UX tests
- `@accessibility` - Accessibility tests
- `@functional` - Functional tests
- `@keyboard` - Keyboard tests
- `@whitespace` - Whitespace tests
- `@case-sensitivity` - Case sensitivity tests
- `@special-chars` - Special character tests
- `@unicode` - Unicode tests

## 🐛 Debugging Tests

**Run in headed mode:**
```bash
npx playwright test --headed
```

**Run in debug mode:**
```bash
npx playwright test --debug
```

**Run with inspector:**
```bash
npx playwright test --ui
```

**Run single test in debug mode:**
```bash
npx playwright test -g "specific test name" --debug
```

## 📖 Best Practices Applied

1. **Separation of Concerns** - Page objects separate test logic from locators
2. **Reusable Methods** - Common methods in BasePage reduce code duplication
3. **Clear Naming** - Test names clearly describe what is being tested
4. **Meaningful Assertions** - Each assertion validates specific behavior
5. **Error Messages** - Descriptive error messages for debugging
6. **Wait Strategies** - Proper waiting for elements and navigation
7. **Data Isolation** - Tests don't depend on each other
8. **Comments** - Clear comments explaining complex logic

## 🤝 Contributing

When adding new tests:
1. Follow the existing folder structure
2. Use the POM pattern
3. Add descriptive test names
4. Include relevant tags
5. Document complex test logic
6. Ensure tests are independent
7. Run tests locally before committing

## 📞 Support

For issues or questions, please refer to:
- [Playwright Documentation](https://playwright.dev)
- [Practice Test Automation](https://practicetestautomation.com)

---

**Last Updated**: 2026-04-29
**Playwright Version**: ^1.58.2
