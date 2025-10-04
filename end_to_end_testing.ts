Feature('Date Validator Tests');

Scenario('Test Empty Input Validation',  ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 10);
    // Test empty input validation
    I.click('Check');
    I.waitForText('Invalid format!', 10);
    //I.seeElement('.result.error');
    I.wait(2);
});

// Test cases for Leap Year validation
Scenario('Test Leap Year - Divisible by 4 (2024)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 10);
    
    // Test năm 2024 - chia hết cho 4, là năm nhuận
    I.fillField('input[type="text"]', '29/02/2024');
    I.click('Check');
    I.waitForText('Valid date!', 10);
    I.wait(2);
});

Scenario('Test Leap Year - Divisible by 400 (2000)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 10);
    
    // Test năm 2000 - chia hết cho 400, là năm nhuận
    I.fillField('input[type="text"]', '29/02/2000');
    I.click('Check');
    I.waitForText('Valid date!', 10);
    I.wait(2);
});

Scenario('Test Not Leap Year - Divisible by 100 but not 400 (1900)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 10);
    
    // Test năm 1900 - chia hết cho 100 nhưng không chia hết cho 400, không phải năm nhuận
    I.fillField('input[type="text"]', '29/02/1900');
    I.click('Check');
    I.waitForText('Invalid date!', 10);
    I.wait(2);
});

Scenario('Test Not Leap Year - Not divisible by 4 (2023)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 10);
    
    // Test năm 2023 - không chia hết cho 4, không phải năm nhuận
    I.fillField('input[type="text"]', '29/02/2023');
    I.click('Check');
    I.waitForText('Invalid date!', 10);
    I.wait(2);
});

Scenario('Test Leap Year - Valid February 28 in leap year (2024)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 10);
    
    // Test ngày 28/02/2024 - hợp lệ trong năm nhuận
    I.fillField('input[type="text"]', '28/02/2024');
    I.click('Check');
    I.waitForText('Valid date!', 10);
    I.wait(2);
});

Scenario('Test Leap Year - Valid February 28 in non-leap year (2023)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 10);
    
    // Test ngày 28/02/2023 - hợp lệ trong năm không nhuận
    I.fillField('input[type="text"]', '28/02/2023');
    I.click('Check');
    I.waitForText('Valid date!', 10);
    I.wait(2);
});

Scenario('Test Leap Year - Edge case year 1600', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 10);
    
    // Test năm 1600 - chia hết cho 400, là năm nhuận
    I.fillField('input[type="text"]', '29/02/1600');
    I.click('Check');
    I.waitForText('Valid date!', 10);
    I.wait(2);
});

Scenario('Test Leap Year - Edge case year 1700', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 10);
    
    // Test năm 1700 - chia hết cho 100 nhưng không chia hết cho 400, không phải năm nhuận
    I.fillField('input[type="text"]', '29/02/1700');
    I.click('Check');
    I.waitForText('Invalid date!', 10);
    I.wait(2);
});
