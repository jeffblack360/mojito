/*
 * This is a basic func test for a UseCase application.
 */
YUI.add('usecases-testi18n-neg-tests', function (Y) {
    var suite = new Y.Test.Suite("UseCases: i18n-neg");

    suite.add(new Y.Test.Case({
        "test i18n-neg": function() {
            var title = Y.one('h2').get('innerHTML');
            Y.Assert.areEqual('Enjoy your Flickr Images in en!', title.match(/Enjoy your Flickr Images in en!/gi));
            var imagelink = Y.all('a').item(1).get('href');
            Y.Assert.areEqual('http:', imagelink.match(/http:/gi));
            Y.Assert.areEqual('/static/usecase/assets', imagelink.match(/\/static\/usecase\/assets/gi));
            Y.Intl.add("datatype-date-format", "en-US", {
                "x":"%d/%m/%Y"
            });
            Y.Intl.setLang("datatype-date-format", "en-US");
            var mydate = Y.DataType.Date.format(new Date(), {format:"%d/%m/%Y"});
            var expecteddate = mydate.slice(3,6)+mydate.slice(0,3)+mydate.slice(8,10);
            Y.Assert.areEqual(expecteddate, title.substr(title.indexOf('-')+2, 8));
        }
    }));

    Y.Test.Runner.add(suite);
}, '0.0.1', {requires: [
    'node', 'node-event-simulate', 'test', 'console', 'intl', 'datatype-date-format'
]});
