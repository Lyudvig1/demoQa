
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

 let should = require('chai').should();

describe('add new tests', function(){
        
        it("new scenarios", async function(){
               
                let name = "newName"
                let email = "newemail@gmail.com"
                let current = "City Yerevan"
                let permanent = "Garegin Njdeh"
        
              
               let driver = await new Builder().forBrowser("chrome").build();
         
                
                await driver.get(" https://demoqa.com/text-box");

                let title = await driver.getTitle();
                console.log('Title is:',title);
                    
               
                await driver.findElement(By.id('userName')).sendKeys(name);
                //await driver.sleep(1000);
                await driver.findElement(By.id('userEmail')).sendKeys(email);
                //await driver.sleep(1000);
                await driver.findElement(By.id('currentAddress')).sendKeys(current);
                //await driver.sleep(1000);
                await driver.findElement(By.id('permanentAddress')).sendKeys(permanent);
                //await driver.sleep(1000);
                await driver.findElement(By.id('submit')).click();

                let postName = await driver.findElement(By.id("name")).getText().then(function(val){
                        return val;
                });
               
                let postEmail = await driver.findElement(By.id("email")).getText().then(function(val){
                        return val;
                });

                let postCurrent = await driver.findElement(By.id("currentAddress")).getText().then(function(val){
                        return val;
                });

                let postPermanent = await driver.findElement(By.class(".border> :nth-child(4)")).getText().then(function(val){
                        return val;
                });
                
                postName.should.equal("Name:" + name);
                postEmail.should.equal("Email:" + email);
                postCurrent.should.equal("Current Address :" + current);
                postPermanent.should.equal("Permananet Address :" + permanent);


 
                //It is always a safe practice to quit the browser after execution
                //await driver.quit();
 

        });
});
 
      
 
        