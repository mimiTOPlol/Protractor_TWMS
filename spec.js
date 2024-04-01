const { browser } = require("protractor");


// spec.js
describe('Protractor Test',function(){
    // Test 
    beforeAll(function(){
        // link to browser
        browser.driver.manage().window().maximize();
        browser.get('http://twms.twss.co.th:8080/twms-protractor/#/dashboard')
        browser.sleep(2000)
    });

    //  check Title
    it('should have correct title', function () {
        expect(browser.getTitle()).toEqual('TWMS | Warehouse Management System');
    });

    // Test case 1 for Login
    it('Test Login TWMS via Valid User',function() {
        //  Title
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
        // Assert that the user has successfully logged in with valid credentials
        expect(element(by.xpath('/html/body/div[1]/div[2]/div[1]/div/div[3]/div[2]/h2')).getText()).toEqual('Consult Derive');
    });

    // Test case 2  for Create SO
    it('Create SO',function(){

        
        browser.sleep(3000);
        element(by.xpath("//a[contains(.,'Outbound')]")).click().then(function(){
            console.log('click Outbound success');
        }); 

        // click Sales Orders
        browser. sleep(3000);
        element(by.xpath("//a[contains(text(),'Sales Orders')]")).click().then(function(){
            console.log('click Sales Orders success');
        }); 

        // click Create SO
        browser. sleep(3000);
        element(by.xpath("//a[contains(.,'Create SO')]")).click().then(function(){
          console.log('click Create SO success');
        });

        var Customer = 10000963;
        var Customer_Name = 'บจ.สหมิตรไพศาล';
        var Ref_Doc_No = 'Test-6309683040-031';
        var SO_Date =  '24/11/2023';
        var Request_Date = '25/11/2023';
        var productCode = 1000071;


        // Sales Order Details
        // Client
        browser. sleep(3000);
        element(by.css('span[aria-owns="i_client_listbox"]')).click().then(function(){
              console.log('click Client success');
        });
        browser. sleep(3000);
        element(by.id('i_client_listbox')).all(by.css('li[data-offset-index="3"]')).click().then(function(){
           element(by.id('i_client_listbox')).all(by.css('li[data-offset-index="3"]')).getText().then(function(nameClient){
             console.log('Client : ' + Customer_Name);
            });
        });
        browser. sleep(3000);


        // Shipping Method
        browser. sleep(3000);
        element(by.css('span[aria-owns="i_shiping_method_insert_listbox"]')).click().then(function(){
           console.log('click Shipping Method success');
        });
        browser. sleep(3000);
        element(by.id('i_shiping_method_insert_listbox')).all(by.css('li[data-offset-index="1"]')).click().then(function(){
            element(by.xpath("//span[text()='Delivery charge']")).getText().then(function(nameShipping_Method){
             console.log('Shipping Method : ' + nameShipping_Method);
            });
        });
        browser. sleep(2000);

        //Customer + //CustomerName
        browser. sleep(3000);
        element(by.id("i_customer_insert")).sendKeys(Customer).then(function(){
           console.log('Enter Customer : ' + Customer);
        });
        browser. sleep(3000);
        element(by.id("i_customer_insert_listbox")).all(by.css('li[data-offset-index="0"]')).click().then(function(){
             console.log('Customer Name : ' + Customer_Name);
        });
        browser. sleep(3000);
    
        //Ship To Address
        browser. sleep(3000);
        element(by.css('span[aria-owns="i_shipto_address_insert_listbox"]')).click().then(function(){
            console.log('click Ship to Address success');
        });
        browser. sleep(3000);
        element(by.css('#i_shipto_address_insert-list ul li:nth-child(2)')).click().then(function(){
          console.log('Ship to Address success');
        });

        //SO Date
        browser.sleep(3000);
        element(by.id("i_document_date")).sendKeys(SO_Date).then(function(){
            console.log('SO Date :' + SO_Date);
        });

        //Request Date
        browser.sleep(3000);
        element(by.id("i_request_date_insert")).sendKeys(Request_Date).then(function(){
            console.log('Request Date :' + Request_Date);

        });

        //Ref Doc No
        browser.sleep(3000);
        element(by.id("i_ref_doc_insert")).sendKeys(Ref_Doc_No).then(function(){
            console.log('Ref Doc No :' + Ref_Doc_No);
        });
        
        // Create line item
        browser.sleep(3000);
        element(by.xpath("//a[contains(.,'Create line item')]")).click().then(function(){
            console.log('Create line item success');
        });


        // Product Code
        browser.sleep(3000);
        element(by.css('input[name="productcode"]')).sendKeys(productCode);
        browser.sleep(2000);
        element(by.xpath("/html/body/div[19]/div")).all(by.css('ul li[data-offset-index="0"]')).click().then(function(){
            console.log('Product Code : ' + productCode);
        });

        // update
        browser.sleep(3000);
        element(by.xpath("//a[.='Update']")).click().then(function(){
            console.log('update success');
        });
        browser.sleep(2000);

        //save&Confirm
        browser.sleep(4000);
        element(by.css("button[title='Save and confirm']")).click().then(function(){
             console.log('save&Confirm success');
        });
        browser.sleep(2000);

        //finish
        browser.sleep(2000);
        var ale =  browser.switchTo().alert();
        ale.accept().then(function(){
            console.log('Create SO finish');
        });
        browser.sleep(2000);
       

    });
     
    // Test case 3  Search SO
    it('Test Search Sales Order', function(){
        var Ref_Doc_No = 'Test-6309683040-031';
        var SO_date = '24/11/2023';
        browser.navigate().refresh();
        

        // click Search
        element.all(by.css('li[class="k-item k-state-default k-first"]')).click().then(function () {
            console.log('click search success');
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
        browser.sleep(2000);

        //Client
         element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(2)')).getText().then(function (text) {
             expect(text).toEqual("PTTOR Cafe AMAZON");
             console.log('Client : PTTOR Cafe AMAZON');
        });

         
        //SO date
        browser.sleep(2000);
        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(4)')).getText().then(function (text) {
             expect(text).toEqual(SO_date);
             console.log('SO Date : ' + text);
        });
        
        //Ref Doc No.
        browser.sleep(2000);
        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(6)')).getText().then(function (text) {
            expect(text).toEqual(Ref_Doc_No);
            console.log('Ref Doc No : ' + text);
        });
        
        //Search
        browser.sleep(2000);
        element(by.css('#itemGridOptions .k-grid-content table tbody tr td:nth-child(12) span')).getText().then(function (text) {
            expect(text).toEqual("CONFIRMED");
            console.log('Search success for created sales orders');
        });
        browser.sleep(2000);
        
    });

    it('Log out', function(){
        //click logout
        element(by.className('user-profile dropdown-toggle ng-binding')).click();
        browser.sleep(2000);
        element.all(by.linkText("Log Out")).click().then(function () {
            console.log('Log out success');
         });
    })
  
});

