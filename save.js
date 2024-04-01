const { browser } = require("protractor");

// spec.js
describe('Protractor Test',function(){
    // Test 
    beforeAll(function(){
        // link to browser
        browser.driver.manage().window().maximize();
        browser.get('http://twms.twss.co.th:8080/twms-dashboard/#/dashboard')
        browser.sleep(2000)
    });
    // Test case 1 for Login
    it('Validate Login',function() {
        //  Title
        expect(browser.getTitle()).toBe('TWMS | Warehouse Management System')

        var username = 'consult';
        var password = 'consult';
        var account  = 'Consult Derive';
        
        // send username
        browser.sleep(2000);
        element(by.id('i_username')).sendKeys(username).then(function (){
            console.log('Input Username : ' + username);
        });

        // send password
        browser.sleep(2000);
        element(by.id('i_password')).sendKeys(password).then(function (){
            console.log('Input Password : ' + password);
        });

        // click  login
        browser.sleep(3000);
        element(by.buttonText('Log in')).click().then(function(){
            console.log('Log in success');
        });

        // click User Account
        browser.sleep(2000);
        element(by.xpath('/html/body/div[1]/div[2]/div[1]/div/div[3]/div[2]/h2')).getText().then(function(account){
            console.log('User account is ' + account );
        });


        //click logout
        //element(by.className('user-profile dropdown-toggle ng-binding')).click();
        //browser.sleep(3000);
        //element.all(by.linkTest("Log Out")).click().then(function(){
        //    console.log('Log out successfully')
        //});
    });
    // Test case 2  for Create SO
    it('Create SO',function(){
        // click Outbound
        browser.sleep(2000);
        element(by.xpath("//a[contains(.,'Outbound')]")).click(); 

        // click Sales Orders
        browser.sleep(2000);
        element(by.xpath("//a[contains(text(),'Sales Orders')]")).click(); 

        // click Create SO
        browser.sleep(2000);
        element(by.xpath("//a[contains(.,'Create SO')]")).click();

        var Costomer = 10000941;
        var Customer_Name = 'Amazon TU';
        var Ref_Doc_No = 'Test-6309683040-001';
        
        // Sales Order Details
        browser.sleep(5000);
        element(by.xpath("(//div[@class='col-xs-12 col-sm-8']//span)[1]")).click();
        browser.sleep(4000);
        var allOptions = element(by.id("i_client"));
        expect(allOptions.count()).toEqual(2);
        var firestOption = allOptions.first();
        



        //element(by.xpath("//span[text()='Delivery charge']")).click().then(function(){
        //    var method = element(by.xpath("//span[text()='Delivery charge']")).getText();
        //    console.log('Shipping Method : ' + method); 
        //});
        browser.sleep(2000);
        element(by.xpath("//span[text()='Delivery charge']")).click();
        browser.sleep(2000);
        element(by.id("i_customer_name_insert")).sendKeys(Customer_Name).then(function(){
            console.log('Customer Name :' + Customer_Name);
        });
        browser.sleep(2000);
        element(by.id("i_document_date")).sendKeys('24/11/2023').then(function(){
            console.log('SO Date :' +  '24/11/2023');
        });
        browser.sleep(2000);
        element(by.id("i_request_date_insert")).sendKeys('25/11/2023').then(function(){
            console.log('Request Date :' + '25/11/2023');
        });
        browser.sleep(2000);
        element(by.id("i_ref_doc_insert")).sendKeys(Ref_Doc_No).then(function(){
            console.log('Ref Doc No :' + Ref_Doc_No);
        });

    });


    // Test case 3  Search SO
    it('Search SO', function(){
        var Ref_Doc_No = 'Test-6309683040-001';
        var SO_date = '24/11/2023';

        // click Search
        element.all(by.css('li[class="k-item k-state-default k-first"]')).click().then(function () {
            console.log('click search success');
        });
        browser.sleep(2000);

        //client
        element(by.xpath("(//div[@class='col-sm-2 col-xs-12']//span)[1]")).click();
        browser.sleep(2000);
        element(by.id("searchClient_listbox")).all(by.css('li[class="k-item ng-scope"]')).click().then(function () {
            console.log('client success');
        });
        browser.sleep(2000);

        //Ref Doc No
        element(by.id("i_ref_doc_number")).sendKeys(Ref_Doc_No).then(function () {
            console.log('Ref Doc No :' + Ref_Doc_No);
        });
        browser.sleep(2000);

        //SO Date
        element(by.id("i_created_date")).sendKeys(SO_date).then(function () {
            console.log('SO Date :' + SO_date);
        });
        browser.sleep(2000);


        //status
        element(by.css('span[aria-owns="i_status_listbox"]')).click();
        browser.sleep(2000);
        element(by.id('i_status_listbox')).all(by.css('li[data-offset-index="3"]')).click().then(function () {
            console.log('status confirmed');
        });
        browser.sleep(2000);

        //click Search
        element(by.xpath("(//div[@class='col-sm-3 col-xs-12']//span)[1]")).click().then(function () {
            console.log('Click search success');
        });
        browser.sleep(5000);


        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(2)')).getText().then(function (text) {
            expect(text).toEqual("PTTPLC ( AMAZON )");
        });

        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(4)')).getText().then(function (text) {
            expect(text).toEqual(SO_date);
        });

        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(6)')).getText().then(function (text) {
            expect(text).toEqual(Ref_Doc_No);
        });

        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(12) span')).getText().then(function (text) {
            expect(text).toEqual("CONFIRMED");
            console.log('Search success for created sales orders');
        });
        
    });


      //client
        element(by.xpath("(//div[@class='col-sm-2 col-xs-12']//span)[1]")).click();
        browser.sleep(5000);
        element(by.id("searchClient_listbox")).all(by.css('li[class="k-item ng-scope"]')).click().then(function () {
            console.log('client success');
        });
});