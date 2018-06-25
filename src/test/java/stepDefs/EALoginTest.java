package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utility.Hooks;

public class EALoginTest {

	private WebDriver driver;

	public EALoginTest() {
		this.driver = Hooks.getDriver();
	}
	
	@Given("^I browser the EA Login Page$")
	public void browseEALoginPage() {
		driver.get("http://executeautomation.com/demosite/Login.html");
		
	}
	
	@When("^I enter my (?:correct|incorrect) \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enterUserCredentials(String userName, String password) {
		driver.findElement(By.name("UserName")).sendKeys(userName);
		driver.findElement(By.name("Password")).sendKeys(password);
	}
	
	@And("^I click the login button$")
	public void LoginClick() {
		driver.findElement(By.name("Logins")).click();
		System.out.println("Logged In");
	}
	
	@Then("^I should be able to see \"([^\"]*)\"$")
	public void messageVerification(String message) {
		
	}
}
