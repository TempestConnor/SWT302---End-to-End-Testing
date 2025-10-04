Feature('Date Validator Tests');



// Test cases for Leap Year validation
Scenario('Test Leap Year - Divisible by 4 (2024)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    
    // Test năm 2024 - chia hết cho 4, là năm nhuận
    I.fillField('input[type="text"]', '2024-02-29');
    I.click('Check');
    I.waitForText('Valid date!', 1);
    I.wait(2);
});

Scenario('Test Leap Year - Divisible by 400 (2000)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    
    // Test năm 2000 - chia hết cho 400, là năm nhuận
    I.fillField('input[type="text"]', '2000-02-29');
    I.click('Check');
    I.waitForText('Valid date!', 1);
    I.wait(2);
});

Scenario('Test Not Leap Year - Divisible by 100 but not 400 (1900)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    
    // Test năm 1900 - chia hết cho 100 nhưng không chia hết cho 400, không phải năm nhuận
    I.fillField('input[type="text"]', '1900-02-29');
    I.click('Check');
    I.waitForText('Invalid date!', 1);
    I.wait(2);
});

Scenario('Test Not Leap Year - Not divisible by 4 (2023)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    
    // Test năm 2023 - không chia hết cho 4, không phải năm nhuận
    I.fillField('input[type="text"]', '2023-02-29');
    I.click('Check');
    I.waitForText('Invalid date!', 1);
    I.wait(2);
});

Scenario('Test Leap Year - Valid February 28 in leap year (2024)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    
    // Test ngày 28/02/2024 - hợp lệ trong năm nhuận
    I.fillField('input[type="text"]', '2024-02-28');
    I.click('Check');
    I.waitForText('Valid date!', 1);
    I.wait(2);
});

Scenario('Test Leap Year - Valid February 28 in non-leap year (2023)', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    
    // Test ngày 28/02/2023 - hợp lệ trong năm không nhuận
    I.fillField('input[type="text"]', '2023-02-28');
    I.click('Check');
    I.waitForText('Valid date!', 1);
    I.wait(2);
});

Scenario('Test Leap Year - Edge case year 1600', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    
    // Test năm 1600 - chia hết cho 400, là năm nhuận
    I.fillField('input[type="text"]', '1600-02-29');
    I.click('Check');
    I.waitForText('Valid date!', 1);
    I.wait(2);
});

Scenario('Test Leap Year - Edge case year 1700', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    
    // Test năm 1700 - chia hết cho 100 nhưng không chia hết cho 400, không phải năm nhuận
    I.fillField('input[type="text"]', '1700-02-29');
    I.click('Check');
    I.waitForText('Invalid date!', 1);
    I.wait(2);
    
});


//test out-of-range validation
Scenario('Test Year below range', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    I.fillField('input[type="text"]', '0999-06-15');
    I.click('Check');
    I.waitForText('Year must be between 1000 and 3000!', 1);
    I.wait(2);
});

Scenario('Test Year above range', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    I.fillField('input[type="text"]', '3001-01-01');
    I.click('Check');
    I.waitForText('Year must be between 1000 and 3000!', 1);
    I.wait(2);
});

Scenario('Test Month below range', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    I.fillField('input[type="text"]', '2024-00-10');
    I.click('Check');
    I.waitForText('Month must be between 1 and 12!', 1);
    I.wait(2);
});

Scenario('Test Month above range', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    I.fillField('input[type="text"]', '2024-13-10');
    I.click('Check');
    I.waitForText('Month must be between 1 and 12!', 1);
    I.wait(2);
});

Scenario('Test Day below range for month 1', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    I.fillField('input[type="text"]', '2024-01-00');
    I.click('Check');
    I.waitForText('Day must be between 1 and 31 for month 1!', 1);
    I.wait(2);
});

Scenario('Test Day above range for month 1', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    I.fillField('input[type="text"]', '2024-01-32');
    I.click('Check');
    I.waitForText('Day must be between 1 and 31 for month 1!', 1);
    I.wait(2);
});

Scenario('Test Day above range for month 4', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    I.fillField('input[type="text"]', '2024-04-31');
    I.click('Check');
    I.waitForText('Day must be between 1 and 30 for month 4!', 1);
    I.wait(2);
});

Scenario('Test Day above range for February non-leap year', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    I.fillField('input[type="text"]', '2023-02-29');
    I.click('Check');
    I.waitForText('Day must be between 1 and 28 for month 2!', 1);
    I.wait(2);
});

Scenario('Test Day above range for February leap year', ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 1);
    I.fillField('input[type="text"]', '2024-02-30');
    I.click('Check');
    I.waitForText('Day must be between 1 and 29 for month 2!', 1);
    I.wait(2);
});


