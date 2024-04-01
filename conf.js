exports.config = {
    
    // Capabilities to be passed to the webdriver insatnce.
    capabilities: {
      'browserName': 'chrome'
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    // Framework to use: Jasmine
    framework: 'jasmine',
   
    // Spec Files relative to the current working directory contain test cases that protractor will run for testing.
    specs:['spec.js'],
    
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 5000000
    }
}