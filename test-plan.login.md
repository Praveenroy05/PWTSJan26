# Practice Test Automation Login Page - Comprehensive Test Plan

## Application Overview

The Practice Test Automation Login Page is a simple web application designed for QA engineers to practice writing login test cases. It features a basic login form with Username and Password fields, validation logic, error handling, and a success page. Valid credentials are Username: "student" and Password: "Password123". The application demonstrates fundamental login functionality including positive login flows, negative validation scenarios, and error messaging. This test plan covers comprehensive test coverage including positive scenarios (happy path), negative scenarios (invalid credentials), edge cases (boundary conditions, special characters, whitespace handling), UI/UX validation, security considerations, and functional behavior tests.

## Test Scenarios

### 1. Positive Login Scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. Test 1.1: Successful login with valid credentials

**File:** `tests/positive-scenarios/successful-login.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page should load successfully
    - expect: Login form should be visible
    - expect: Username field should be empty
    - expect: Password field should be empty
    - expect: Submit button should be visible and clickable
    - expect: Error message area should be visible but empty
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
    - expect: No error messages should appear
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled (masked as dots for password type)
    - expect: No error messages should appear
  4. Click the Submit button
    - expect: Page should redirect to https://practicetestautomation.com/logged-in-successfully/
    - expect: Page title should change to 'Logged In Successfully'
    - expect: Success heading should display 'Logged In Successfully'
    - expect: Success message should contain 'Congratulations student. You successfully logged in!'
    - expect: Logout link should be visible on the success page
  5. Verify the logout link is clickable
    - expect: Logout link should be present and functional
    - expect: Clicking logout should return to the login page
    - expect: Login page should be displayed with empty fields

#### 1.2. Test 1.2: Page loads with correct title and heading

**File:** `tests/positive-scenarios/page-loads-correctly.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Page URL should be https://practicetestautomation.com/practice-test-login/
    - expect: Page title should be 'Test Login | Practice Test Automation'
    - expect: Main heading should display 'Test login'
    - expect: Instructions should display valid credentials: Username: student, Password: Password123
  2. Verify form elements are displayed
    - expect: Username label should be visible
    - expect: Username input field should be present
    - expect: Password label should be visible
    - expect: Password input field should be present (type='password')
    - expect: Submit button should be visible and enabled

#### 1.3. Test 1.3: Form elements are properly labeled and positioned

**File:** `tests/positive-scenarios/form-elements-layout.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Page should load successfully
  2. Verify Username field properties
    - expect: Username field should have label 'Username'
    - expect: Username field should be an input of type 'text'
    - expect: Username field should be empty by default
  3. Verify Password field properties
    - expect: Password field should have label 'Password'
    - expect: Password field should be an input of type 'password'
    - expect: Password field should be empty by default
  4. Verify Submit button properties
    - expect: Submit button should have text 'Submit'
    - expect: Submit button should be clickable
    - expect: Submit button should be in the correct position within the form

### 2. Negative Scenarios - Invalid Username

**Seed:** `tests/seed.spec.ts`

#### 2.1. Test 2.1: Login with incorrect username

**File:** `tests/negative-scenarios/invalid-username.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'incorrectUser' in the Username field
    - expect: Username field should display 'incorrectUser'
  3. Enter 'Password123' (correct password) in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Page should remain on the login page (URL should not change)
    - expect: Error message should be displayed
    - expect: Error message should display exactly 'Your username is invalid!'
    - expect: Username and Password fields should retain their values
    - expect: Submit button should remain clickable

#### 2.2. Test 2.2: Login with empty username field

**File:** `tests/negative-scenarios/empty-username.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Leave Username field empty
    - expect: Username field should be empty
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'
    - expect: Page should remain on the login page

#### 2.3. Test 2.3: Login with completely empty form

**File:** `tests/negative-scenarios/empty-form.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible with empty fields
  2. Do not enter any values in Username or Password fields
    - expect: Both fields should be empty
  3. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'
    - expect: Page should remain on the login page

#### 2.4. Test 2.4: Username is case-sensitive

**File:** `tests/negative-scenarios/username-case-sensitive.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'STUDENT' (uppercase) in the Username field
    - expect: Username field should display 'STUDENT'
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'
    - expect: Uppercase 'STUDENT' should not be accepted
  5. Clear fields and enter 'Student' (mixed case) in the Username field
    - expect: Username field should display 'Student'
  6. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  7. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'
    - expect: Mixed case 'Student' should not be accepted

#### 2.5. Test 2.5: Username with leading whitespace

**File:** `tests/negative-scenarios/username-leading-whitespace.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter '  student' (2 spaces before) in the Username field
    - expect: Username field should display leading spaces
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'
    - expect: Leading whitespace should make username invalid

#### 2.6. Test 2.6: Username with trailing whitespace

**File:** `tests/negative-scenarios/username-trailing-whitespace.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student  ' (2 spaces after) in the Username field
    - expect: Username field should display trailing spaces
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'
    - expect: Trailing whitespace should make username invalid

#### 2.7. Test 2.7: Username with special characters

**File:** `tests/negative-scenarios/username-special-characters.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student@123' in the Username field
    - expect: Username field should display special characters
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'

### 3. Negative Scenarios - Invalid Password

**Seed:** `tests/seed.spec.ts`

#### 3.1. Test 3.1: Login with incorrect password

**File:** `tests/negative-scenarios/invalid-password.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' (correct username) in the Username field
    - expect: Username field should display 'student'
  3. Enter 'incorrectPassword' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Page should remain on the login page
    - expect: Error message should be displayed
    - expect: Error message should display exactly 'Your password is invalid!'
    - expect: Username and Password fields should retain their values

#### 3.2. Test 3.2: Login with empty password field

**File:** `tests/negative-scenarios/empty-password.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
  3. Leave Password field empty
    - expect: Password field should be empty
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your password is invalid!'
    - expect: Page should remain on the login page

#### 3.3. Test 3.3: Password is case-sensitive

**File:** `tests/negative-scenarios/password-case-sensitive.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
  3. Enter 'password123' (lowercase) in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your password is invalid!'
    - expect: Lowercase password should not be accepted
  5. Clear fields and enter 'student' in the Username field
    - expect: Username field should display 'student'
  6. Enter 'PASSWORD123' (uppercase) in the Password field
    - expect: Password field should be filled
  7. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your password is invalid!'
    - expect: Uppercase password should not be accepted

#### 3.4. Test 3.4: Password with leading whitespace

**File:** `tests/negative-scenarios/password-leading-whitespace.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
  3. Enter ' Password123' (1 space before) in the Password field
    - expect: Password field should be filled with leading space
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your password is invalid!'
    - expect: Leading whitespace should make password invalid

#### 3.5. Test 3.5: Password with trailing whitespace

**File:** `tests/negative-scenarios/password-trailing-whitespace.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
  3. Enter 'Password123 ' (1 space after) in the Password field
    - expect: Password field should be filled with trailing space
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your password is invalid!'
    - expect: Trailing whitespace should make password invalid

#### 3.6. Test 3.6: Common incorrect passwords

**File:** `tests/negative-scenarios/common-incorrect-passwords.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field and 'Password' in the Password field
    - expect: Error should show 'Your password is invalid!'
  3. Enter 'student' in the Username field and '123' in the Password field
    - expect: Error should show 'Your password is invalid!'
  4. Enter 'student' in the Username field and 'password' in the Password field
    - expect: Error should show 'Your password is invalid!'

### 4. Edge Cases and Boundary Testing

**Seed:** `tests/seed.spec.ts`

#### 4.1. Test 4.1: Very long username string

**File:** `tests/edge-cases/long-username.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter a very long string (255+ characters) of 'a' in the Username field
    - expect: Username field should accept the long string
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'
    - expect: Application should handle long strings gracefully without crashing

#### 4.2. Test 4.2: Very long password string

**File:** `tests/edge-cases/long-password.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
  3. Enter a very long string (255+ characters) of 'a' in the Password field
    - expect: Password field should accept the long string
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your password is invalid!'
    - expect: Application should handle long strings gracefully without crashing

#### 4.3. Test 4.3: SQL injection attempt in username

**File:** `tests/edge-cases/sql-injection-username.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'admin\' --' or enter 'admin\' /*' in the Username field
    - expect: Username field should accept the input
  3. Enter 'anything' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'
    - expect: SQL injection attempt should not bypass authentication

#### 4.4. Test 4.4: SQL injection attempt in password

**File:** `tests/edge-cases/sql-injection-password.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
  3. Enter 'anything\' OR \'1\'=\'1' in the Password field
    - expect: Password field should accept the input
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your password is invalid!'
    - expect: SQL injection attempt should not bypass authentication

#### 4.5. Test 4.5: Numbers in username field

**File:** `tests/edge-cases/numeric-username.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter '12345' (only numbers) in the Username field
    - expect: Username field should accept numeric input
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'

#### 4.6. Test 4.6: Special characters in password

**File:** `tests/edge-cases/special-chars-password.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
  3. Enter 'Password@!#$%' in the Password field
    - expect: Password field should accept special characters
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your password is invalid!'

#### 4.7. Test 4.7: Unicode and emoji characters

**File:** `tests/edge-cases/unicode-characters.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'стudent' (Cyrillic character) or 'student😀' in the Username field
    - expect: Username field should accept the input
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'

#### 4.8. Test 4.8: Only whitespace in username field

**File:** `tests/edge-cases/whitespace-only-username.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter only spaces '     ' in the Username field
    - expect: Username field should contain spaces
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'

#### 4.9. Test 4.9: Only whitespace in password field

**File:** `tests/edge-cases/whitespace-only-password.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
  3. Enter only spaces '     ' in the Password field
    - expect: Password field should contain spaces
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your password is invalid!'

#### 4.10. Test 4.10: Tab character in username

**File:** `tests/edge-cases/tab-character-username.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' with tab characters (e.g., 'stu\tdent') in the Username field
    - expect: Username field should accept tab characters
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'

#### 4.11. Test 4.11: Line break characters

**File:** `tests/edge-cases/linebreak-characters.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' with line break characters in the Username field
    - expect: Username field should accept line break characters
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Click the Submit button
    - expect: Error message should be displayed
    - expect: Error message should display 'Your username is invalid!'

### 5. UI/UX and Form Behavior

**Seed:** `tests/seed.spec.ts`

#### 5.1. Test 5.1: Error message is displayed prominently

**File:** `tests/ui-ux/error-message-visibility.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: No error message should be visible initially
  2. Enter any invalid username and click Submit
    - expect: Error message should be displayed immediately below the form or in a designated error area
    - expect: Error message should be visible to the user
    - expect: Error message text should be clear and readable

#### 5.2. Test 5.2: Form retains values after error

**File:** `tests/ui-ux/form-retains-values.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'testuser' in the Username field
    - expect: Username field should display 'testuser'
  3. Enter 'testpass' in the Password field
    - expect: Password field should display masked characters
  4. Click the Submit button
    - expect: Error message should be displayed
  5. Verify the form values
    - expect: Username field should still contain 'testuser'
    - expect: Password field should still be filled with the entered value
    - expect: User should be able to edit the fields without re-entering everything

#### 5.3. Test 5.3: Tab key navigation between form fields

**File:** `tests/ui-ux/tab-navigation.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Click in the Username field to focus it
    - expect: Username field should be focused
  3. Press Tab key to move focus
    - expect: Focus should move from Username field to Password field
  4. Press Tab key again
    - expect: Focus should move from Password field to Submit button
  5. Press Shift+Tab to navigate backwards
    - expect: Focus should move back through the form elements in reverse order

#### 5.4. Test 5.4: Enter key submits the form

**File:** `tests/ui-ux/enter-key-submit.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
  3. Enter 'Password123' in the Password field
    - expect: Password field should be filled
  4. Press Enter key (instead of clicking Submit button)
    - expect: Form should be submitted
    - expect: Page should redirect to the success page
    - expect: Login should be successful

#### 5.5. Test 5.5: Submit button is clearly visible and clickable

**File:** `tests/ui-ux/submit-button-visibility.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Verify Submit button appearance
    - expect: Submit button should have clear text 'Submit'
    - expect: Submit button should be visually distinct
    - expect: Submit button should be in the normal (not disabled) state
    - expect: Submit button should be clickable with mouse
    - expect: Submit button should be keyboard accessible

#### 5.6. Test 5.6: Placeholder text or labels for clarity

**File:** `tests/ui-ux/field-labels.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Verify field labels
    - expect: Username field should have clear label 'Username'
    - expect: Password field should have clear label 'Password'
    - expect: Labels should be associated with their respective input fields
    - expect: Labels should be readable and clearly visible

#### 5.7. Test 5.7: Page header and instructions are visible

**File:** `tests/ui-ux/page-header-instructions.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Page should load successfully
  2. Verify page content
    - expect: Main heading 'Test login' should be visible
    - expect: Instructions should be displayed
    - expect: Valid credentials should be listed: Username: student, Password: Password123
    - expect: Explanation of the page purpose should be visible

#### 5.8. Test 5.8: Navigation menu is present and functional

**File:** `tests/ui-ux/navigation-menu.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Page should load successfully
  2. Verify navigation elements
    - expect: Navigation menu should be visible in the header
    - expect: Home, Practice, Courses, Blog, Contact links should be present
    - expect: Navigation links should be clickable
  3. Click on a navigation link (e.g., Home)
    - expect: Clicking the link should navigate to the corresponding page
    - expect: User should be able to return to the login page

#### 5.9. Test 5.9: Footer is present and functional

**File:** `tests/ui-ux/footer-elements.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Page should load successfully
  2. Scroll to the bottom of the page to view footer
    - expect: Footer should be visible
    - expect: Copyright information should be displayed
    - expect: Links like 'Privacy Policy' should be present
    - expect: Footer should be consistent on success page as well

### 6. Functional and Security Scenarios

**Seed:** `tests/seed.spec.ts`

#### 6.1. Test 6.1: Logout functionality

**File:** `tests/functional/logout-functionality.spec.ts`

**Steps:**
  1. Navigate to the login page and login with valid credentials (student/Password123)
    - expect: User should be logged in successfully
    - expect: Success page should be displayed
  2. Click the 'Log out' link
    - expect: User should be logged out
    - expect: Page should redirect back to the login page
    - expect: Login form should be displayed with empty fields
    - expect: User should be able to log in again

#### 6.2. Test 6.2: Browser back button after successful login

**File:** `tests/functional/browser-back-button.spec.ts`

**Steps:**
  1. Navigate to the login page and login with valid credentials
    - expect: User should be logged in successfully
    - expect: Success page should be displayed
  2. Click the browser back button
    - expect: Browser should navigate back to the login page
    - expect: No error should occur
  3. Verify the page state
    - expect: Login form should be available again
    - expect: User should be able to login again

#### 6.3. Test 6.3: Multiple failed login attempts

**File:** `tests/functional/multiple-failed-attempts.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Attempt login with wrong credentials 5 times consecutively
    - expect: Each attempt should show an error message
    - expect: Application should not lock the account or show rate limiting (unless implemented)
    - expect: User should be able to continue attempting to login
  3. Login with correct credentials after failed attempts
    - expect: Login should succeed
    - expect: No account lockout should occur

#### 6.4. Test 6.4: Session persistence (if applicable)

**File:** `tests/functional/session-persistence.spec.ts`

**Steps:**
  1. Navigate to the login page and login with valid credentials
    - expect: User should be logged in
    - expect: Success page should be displayed
  2. Refresh the page using F5 or Cmd+R
    - expect: Application should either maintain session or handle refresh gracefully
    - expect: Expected behavior depends on application design

#### 6.5. Test 6.5: HTML form validation bypass protection

**File:** `tests/functional/html-validation-bypass.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Open browser developer tools and inspect form fields
    - expect: Input fields should be standard HTML input elements
  3. Verify no restrictive HTML attributes that prevent invalid input submission
    - expect: Application should rely on server-side validation
    - expect: Client-side validation should not be the sole security measure

#### 6.6. Test 6.6: Response time on successful login

**File:** `tests/functional/response-time.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Page should load successfully
  2. Enter valid credentials and click Submit, measuring time to success page
    - expect: Login should complete in a reasonable time (typically under 3 seconds)
    - expect: Page transition should be smooth without significant delay

#### 6.7. Test 6.7: XSS attack attempt in username field

**File:** `tests/functional/xss-attempt-username.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter '<script>alert(\"XSS\")</script>' in the Username field
    - expect: Input should be accepted by the field
  3. Enter any password and click Submit
    - expect: Error message should display 'Your username is invalid!'
    - expect: No JavaScript alert should appear
    - expect: XSS attack should not execute

#### 6.8. Test 6.8: XSS attack attempt in password field

**File:** `tests/functional/xss-attempt-password.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Enter 'student' in the Username field
    - expect: Username field should display 'student'
  3. Enter '<img src=x onerror=alert(\"XSS\")>' in the Password field
    - expect: Input should be accepted by the field
  4. Click Submit
    - expect: Error message should display 'Your password is invalid!'
    - expect: No JavaScript alert should appear
    - expect: XSS attack should not execute

#### 6.9. Test 6.9: Password field masking

**File:** `tests/functional/password-masking.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Click in the Password field
    - expect: Password field should be focused
  3. Enter 'Password123' in the Password field
    - expect: Password characters should be masked (displayed as dots or asterisks)
    - expect: Actual password should not be visible on screen
  4. Inspect the HTML input field properties
    - expect: Input field should have type='password'
    - expect: Value should be masked in the browser UI

#### 6.10. Test 6.10: No default values in form fields

**File:** `tests/functional/no-default-values.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login form should be visible
  2. Verify form fields on page load
    - expect: Username field should be empty
    - expect: Password field should be empty
    - expect: No default values should be pre-filled
    - expect: Form should start in a clean state
