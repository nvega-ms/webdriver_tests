describe('webdriver.io page', function() {
    it('shows the Search input', function () {
        browser.url('http://webdriver.io');
        expect(browser.isVisible('#search_input_react')).toBe(true);
    });
});
