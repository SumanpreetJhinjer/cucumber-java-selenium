package runner;



import java.io.File;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import com.cucumber.listener.Reporter;




@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src//test//java//features"},
	    glue={"stepDefs","utility"},
		//plugin = {"pretty", "html:target/cucumber-html-report","json:cucumber.json"},
        plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
		tags = {}
		)
public class RunTest{
	 public static void writeExtentReport() {
	        Reporter.loadXMLConfig(new File("config/report.xml"));
	        Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		    Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		    Reporter.setSystemInfo("Machine", 	System.getProperty("os.name"));
		    Reporter.setSystemInfo("Selenium", "3.11.0");
		    Reporter.setSystemInfo("Maven", "4.0.0");
		    Reporter.setSystemInfo("Java Version", "10.0.1");
	    
	    }
}

