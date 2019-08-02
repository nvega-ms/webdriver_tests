describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        expect(title).toBe('WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        expect(title).toBe('WebdriverIO - WebDriver bindings for Node.js 21');
    });
});