// Search_SO.js
describe('Search_SO.js', function(){
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
        //var name = element(by.xpath('/html/body/div[1]/div[2]/div[1]/div/div[3]/div[2]/h2'))
        //expect(name.getText().toBe(account))

        //click logout
        //element(by.className('user-profile dropdown-toggle ng-binding')).click();
        //browser.sleep(3000);
        //element.all(by.linkTest("Log Out")).click().then(function(){
        //    console.log('Log out successfully')
        //});
    });

    it('search SO', function(){
        // Client
        // set implicit time to 30 seconds
		//browser.manage().timeouts().implicitlyWait(30000);
        // click Outbound
        browser.sleep(2000);
        element(by.xpath("//a[contains(.,'Outbound')]")).click(); 

        // click Sales Orders
        browser.sleep(2000);
        element(by.xpath("//a[contains(text(),'Sales Orders')]")).click(); 

        // click Create SO
        browser.sleep(2000);

        var Costomer = 10000941;
        var Customer_Name = 'Amazon TU';
        var Ref_Doc_No = 'Test-6309683040-001';

        element(by.css("select[ng-model='search.clientId']")).element(by.xpath("(//option[text()='PTTPLC ( AMAZON )'])[1]")).click();

    });
    
});