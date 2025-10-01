Feature('test1');

Scenario('Test Empty Input Validation',  ({ I }) => {
    I.amOnPage('http://localhost:8080');
    I.waitForText('Date Validator', 10);
    // Test empty input validation
    I.click('Check');
    I.waitForText('Invalid format!', 10);
    //I.seeElement('.result.error');
    I.wait(2);
});
