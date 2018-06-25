package actions;

import org.openqa.selenium.WebDriver;

import pageObjects.EALoginPgaeObject;

public class EALoginActions {
	

	public static void enterUserInfo(WebDriver driver,String userName, String password)
    {
        //Fill username
        EALoginPgaeObject.txtUserName.sendKeys(userName);
        //Fill password
        EALoginPgaeObject.txtPassword.sendKeys(password);
        
        // return the object of the page navigated to
        //return new EAHomePOM( driver);
        
    }
    
    public static void login(WebDriver driver) {
   	//Click Login
    	EALoginPgaeObject.btnLogin.click();
    }
}
