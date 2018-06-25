package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import actions.EALoginActions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.EALoginPgaeObject;
import utility.Hooks;

public class EALoginTest {

	public WebDriver driver;
	

	public EALoginTest() {
		this.driver = Hooks.getDriver();
	}
	
	@Given("^I browser the EA Login Page$")
	public void browseEALoginPage() {
		driver.get("http://executeautomation.com/demosite/Login.html");
		
	}
	
	@When("^I enter my (?:correct|incorrect) \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterUserCredentials(String userName, String password) {
		PageFactory.initElements(driver, EALoginPgaeObject.class);
		EALoginActions.enterUserInfo(driver, userName, password);
		//EALogin..enterUserInfo(userName, password);
		//driver.findElement(By.name("UserName")).sendKeys(userName);
		//driver.findElement(By.name("Password")).sendKeys(password);
	}
	
	@And("^I click the login button$")
	public void LoginClick() {
		EALoginActions.login(driver);
		//driver.findElement(By.name("Login")).click();
		System.out.println("Logged In");
	}
	
	@Then("^I should be able to see \"([^\"]*)\"$")
	public void messageVerification(String message) {
		
	}
}
