Feature("Date Validator Tests");

// Test cases for Leap Year validation
Scenario("Test Leap Year - Divisible by 4 (2024)", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);

  // Test năm 2024 - chia hết cho 4, là năm nhuận
  I.fillField('input[type="text"]', "2024-02-29");
  I.click("Check");
  I.waitForText("Valid date!", 1);
  I.wait(2);
});

Scenario("Test Leap Year - Divisible by 400 (2000)", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);

  // Test năm 2000 - chia hết cho 400, là năm nhuận
  I.fillField('input[type="text"]', "2000-02-29");
  I.click("Check");
  I.waitForText("Valid date!", 1);
  I.wait(2);
});

Scenario(
  "Test Not Leap Year - Divisible by 100 but not 400 (1900)",
  ({ I }) => {
    I.amOnPage("http://localhost:8080");
    I.waitForText("Date Validator", 1);

    // Test năm 1900 - chia hết cho 100 nhưng không chia hết cho 400, không phải năm nhuận
    I.fillField('input[type="text"]', "1900-02-29");
    I.click("Check");
    I.waitForText("Invalid date!", 1);
    I.wait(2);
  }
);

Scenario("Test Not Leap Year - Not divisible by 4 (2023)", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);

  // Test năm 2023 - không chia hết cho 4, không phải năm nhuận
  I.fillField('input[type="text"]', "2023-02-29");
  I.click("Check");
  I.waitForText("Invalid date!", 1);
  I.wait(2);
});

Scenario("Test Leap Year - Valid February 28 in leap year (2024)", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);

  // Test ngày 28/02/2024 - hợp lệ trong năm nhuận
  I.fillField('input[type="text"]', "2024-02-28");
  I.click("Check");
  I.waitForText("Valid date!", 1);
  I.wait(2);
});

Scenario(
  "Test Leap Year - Valid February 28 in non-leap year (2023)",
  ({ I }) => {
    I.amOnPage("http://localhost:8080");
    I.waitForText("Date Validator", 1);

    // Test ngày 28/02/2023 - hợp lệ trong năm không nhuận
    I.fillField('input[type="text"]', "2023-02-28");
    I.click("Check");
    I.waitForText("Valid date!", 1);
    I.wait(2);
  }
);

Scenario("Test Leap Year - Edge case year 1600", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);

  // Test năm 1600 - chia hết cho 400, là năm nhuận
  I.fillField('input[type="text"]', "1600-02-29");
  I.click("Check");
  I.waitForText("Valid date!", 1);
  I.wait(2);
});

Scenario("Test Leap Year - Edge case year 1700", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);

  // Test năm 1700 - chia hết cho 100 nhưng không chia hết cho 400, không phải năm nhuận
  I.fillField('input[type="text"]', "1700-02-29");
  I.click("Check");
  I.waitForText("Invalid date!", 1);
  I.wait(2);
});

//test out-of-range validation
Scenario("Test Year below range", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);
  I.fillField('input[type="text"]', "0999-06-15");
  I.click("Check");
  I.waitForText("Year must be between 1000 and 3000!", 1);
  I.wait(2);
});

Scenario("Test Year above range", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);
  I.fillField('input[type="text"]', "3001-01-01");
  I.click("Check");
  I.waitForText("Year must be between 1000 and 3000!", 1);
  I.wait(2);
});

Scenario("Test Month below range", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);
  I.fillField('input[type="text"]', "2024-00-10");
  I.click("Check");
  I.waitForText("Month must be between 1 and 12!", 1);
  I.wait(2);
});

Scenario("Test Month above range", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);
  I.fillField('input[type="text"]', "2024-13-10");
  I.click("Check");
  I.waitForText("Month must be between 1 and 12!", 1);
  I.wait(2);
});

Scenario("Test Day below range for month 1", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);
  I.fillField('input[type="text"]', "2024-01-00");
  I.click("Check");
  I.waitForText("Day must be between 1 and 31 for month 1!", 1);
  I.wait(2);
});

Scenario("Test Day above range for month 1", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);
  I.fillField('input[type="text"]', "2024-01-32");
  I.click("Check");
  I.waitForText("Day must be between 1 and 31 for month 1!", 1);
  I.wait(2);
});

Scenario("Test Day above range for month 4", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);
  I.fillField('input[type="text"]', "2024-04-31");
  I.click("Check");
  I.waitForText("Day must be between 1 and 30 for month 4!", 1);
  I.wait(2);
});

Scenario("Test Day above range for February non-leap year", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);
  I.fillField('input[type="text"]', "2023-02-29");
  I.click("Check");
  I.waitForText("Day must be between 1 and 28 for month 2!", 1);
  I.wait(2);
});

Scenario("Test Day above range for February leap year", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 1);
  I.fillField('input[type="text"]', "2024-02-30");
  I.click("Check");
  I.waitForText("Day must be between 1 and 29 for month 2!", 1);
  I.wait(2);
});

// Test cases for ODD months (31 days) - Tháng lẻ có 31 ngày
Scenario("Test Odd Month - January (Month 1) has 31 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 1 - tháng lẻ có 31 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-01-31");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - January (Month 1) invalid day 32", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 1 - ngày 32 không hợp lệ
  I.fillField('input[type="text"]', "2024-01-32");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - March (Month 3) has 31 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 3 - tháng lẻ có 31 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-03-31");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - March (Month 3) invalid day 32", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 3 - ngày 32 không hợp lệ
  I.fillField('input[type="text"]', "2024-03-32");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - May (Month 5) has 31 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 5 - tháng lẻ có 31 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-05-31");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - May (Month 5) invalid day 32", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 5 - ngày 32 không hợp lệ
  I.fillField('input[type="text"]', "2024-05-32");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - July (Month 7) has 31 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 7 - tháng lẻ có 31 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-07-31");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - July (Month 7) invalid day 32", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 7 - ngày 32 không hợp lệ
  I.fillField('input[type="text"]', "2024-07-32");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - August (Month 8) has 31 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 8 - tháng chẵn nhưng có 31 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-08-31");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - August (Month 8) invalid day 32", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 8 - ngày 32 không hợp lệ
  I.fillField('input[type="text"]', "2024-08-32");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - October (Month 10) has 31 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 10 - tháng chẵn nhưng có 31 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-10-31");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - October (Month 10) invalid day 32", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 10 - ngày 32 không hợp lệ
  I.fillField('input[type="text"]', "2024-10-32");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - December (Month 12) has 31 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 12 - tháng chẵn nhưng có 31 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-12-31");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Odd Month - December (Month 12) invalid day 32", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 12 - ngày 32 không hợp lệ
  I.fillField('input[type="text"]', "2024-12-32");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

// Test cases for EVEN months (30 days) - Tháng chẵn có 30 ngày
Scenario("Test Even Month - April (Month 4) has 30 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 4 - tháng chẵn có 30 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-04-30");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Even Month - April (Month 4) invalid day 31", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 4 - ngày 31 không hợp lệ (chỉ có 30 ngày)
  I.fillField('input[type="text"]', "2024-04-31");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

Scenario("Test Even Month - June (Month 6) has 30 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 6 - tháng chẵn có 30 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-06-30");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Even Month - June (Month 6) invalid day 31", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 6 - ngày 31 không hợp lệ (chỉ có 30 ngày)
  I.fillField('input[type="text"]', "2024-06-31");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

Scenario("Test Even Month - September (Month 9) has 30 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 9 - tháng lẻ nhưng chỉ có 30 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-09-30");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Even Month - September (Month 9) invalid day 31", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 9 - ngày 31 không hợp lệ (chỉ có 30 ngày)
  I.fillField('input[type="text"]', "2024-09-31");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

Scenario("Test Even Month - November (Month 11) has 30 days", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 11 - tháng lẻ nhưng chỉ có 30 ngày - ngày hợp lệ
  I.fillField('input[type="text"]', "2024-11-30");
  I.click("Check");
  I.waitForText("Valid date!", 10);
  I.wait(2);
});

Scenario("Test Even Month - November (Month 11) invalid day 31", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test tháng 11 - ngày 31 không hợp lệ (chỉ có 30 ngày)
  I.fillField('input[type="text"]', "2024-11-31");
  I.click("Check");
  I.waitForText("Invalid date!", 10);
  I.wait(2);
});

// ...existing code...

// Test cases for non-numeric input validation
Scenario("Test Invalid Day Input - Non-numeric", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test với day không phải số
  I.fillField('input[type="text"]', "aa/02/2024");
  I.click("Check");
  I.waitForText('Input data for "Day" incorrect format!', 10);
  I.wait(2);
});

Scenario("Test Invalid Month Input - Non-numeric", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test với month không phải số
  I.fillField('input[type="text"]', "15/bb/2024");
  I.click("Check");
  I.waitForText('Input data for "Month" incorrect format!', 10);
  I.wait(2);
});

Scenario("Test Invalid Year Input - Non-numeric", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test với year không phải số
  I.fillField('input[type="text"]', "15/02/cccc");
  I.click("Check");
  I.waitForText('Input data for "Year" incorrect format!', 10);
  I.wait(2);
});

Scenario("Test Invalid Multiple Fields - Non-numeric", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test với nhiều field không phải số
  I.fillField('input[type="text"]', "aa/bb/2024");
  I.click("Check");
  I.waitForText('Input data for "Day" incorrect format!', 10);
  I.wait(2);
});

Scenario("Test Invalid All Fields - Non-numeric", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test với tất cả field không phải số
  I.fillField('input[type="text"]', "aa/bb/cccc");
  I.click("Check");
  I.waitForText('Input data for "Day" incorrect format!', 10);
  I.wait(2);
});

Scenario("Test Invalid Day with Special Characters", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test với day chứa ký tự đặc biệt
  I.fillField('input[type="text"]', "@#/02/2024");
  I.click("Check");
  I.waitForText('Input data for "Day" incorrect format!', 10);
  I.wait(2);
});

Scenario("Test Invalid Month with Special Characters", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test với month chứa ký tự đặc biệt
  I.fillField('input[type="text"]', "15/$%/2024");
  I.click("Check");
  I.waitForText('Input data for "Month" incorrect format!', 10);
  I.wait(2);
});

Scenario("Test Invalid Year with Special Characters", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test với year chứa ký tự đặc biệt
  I.fillField('input[type="text"]', "15/02/20@#");
  I.click("Check");
  I.waitForText('Input data for "Year" incorrect format!', 10);
  I.wait(2);
});

Scenario("Test Mixed Valid and Invalid Input", ({ I }) => {
  I.amOnPage("http://localhost:8080");
  I.waitForText("Date Validator", 10);

  // Test với day hợp lệ nhưng month và year không hợp lệ
  I.fillField('input[type="text"]', "15/ab/cd24");
  I.click("Check");
  I.waitForText('Input data for "Month" incorrect format!', 10);
  I.wait(2);
});
