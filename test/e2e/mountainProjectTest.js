var config = require('../../nightwatch.conf.js');

var tagLine =

    module.exports = { // adapted from: https://git.io/vodU0
        '@tags': ['mpTest'],
        'Mountain Project Test': function (browser) {
            browser
            //navigate to MountainProject home page.
                .url('http://mountainproject.com/')

                
            //Make sure the page has time to load
                .waitForElementVisible('body')
                .resizeWindow(1200, 800)
                .assert.title('Rock Climbing Guides: Routes, Photos & Forum | Mountain Project')
                .assert.elementPresent('#body-climb')
                .waitForElementPresent('#desktop-search-trigger')
            //Search for a specific route 
                .setValue('#desktop-search-trigger', 'Corn Grinder')
                .waitForElementPresent('#desktop-search-button')
                .click("#desktop-search-button")
            //Confirm results page appears
                .waitForElementPresent('#results')
            //Return to home page
                .click('#logo')
                .waitForElementVisible('#body-climb')
                .waitForElementPresent('#routeFinderForm')
            //Search for a set of routes (5.12a, 6+ pitches, Sport, 3+ stars) using route-finder form
                .waitForElementPresent('#stars')
                .click('#stars option[value="3.8"]')
                .click('#pitches option[value="6"]')
                .click('#diffMinrock option[value="6600"]')
                .click('#diffMaxrock option[value="6800"]')
                .click('#check_is_trad_climb')
                .click('#check_is_top_rope')
                .submitForm('#routeFinderForm')
                .waitForElementVisible('body')
                .useXpath()
                .assert.elementPresent("/html/body[@id='body-climb']/div[@class='main-content-container ']/div[@class='container-fluid']/div[@class='row'][1]/div[@class='col-xs-12 m-t-2']/div[@class='table-responsive']/table[@class='table table-striped route-table hidden-xs-down']/tbody/tr[@class='route-row'][1]/td[1]/a/strong")
                
                
                .end();
        }
    };
