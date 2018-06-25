$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EALogin.feature");
formatter.feature({
  "line": 1,
  "name": "EA login page",
  "description": "To login to the EA Page",
  "id": "ea-login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login to EA Page",
  "description": "",
  "id": "ea-login-page;login-to-ea-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I browser the EA Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter my correct \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to see \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "ea-login-page;login-to-ea-page;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "message"
      ],
      "line": 11,
      "id": "ea-login-page;login-to-ea-page;;1"
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ],
      "line": 12,
      "id": "ea-login-page;login-to-ea-page;;2"
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ],
      "line": 13,
      "id": "ea-login-page;login-to-ea-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7000472708,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login to EA Page",
  "description": "",
  "id": "ea-login-page;login-to-ea-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I browser the EA Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter my correct \"name1\" and \"5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to see \"success\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EALoginTest.browseEALoginPage()"
});
formatter.result({
  "duration": 6316402684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 20
    },
    {
      "val": "5",
      "offset": 32
    }
  ],
  "location": "EALoginTest.enterUserCredentials(String,String)"
});
formatter.result({
  "duration": 591655305,
  "status": "passed"
});
formatter.match({
  "location": "EALoginTest.LoginClick()"
});
formatter.result({
  "duration": 117970786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 25
    }
  ],
  "location": "EALoginTest.messageVerification(String)"
});
formatter.result({
  "duration": 123677,
  "status": "passed"
});
formatter.after({
  "duration": 2124270467,
  "status": "passed"
});
formatter.before({
  "duration": 4623490035,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to EA Page",
  "description": "",
  "id": "ea-login-page;login-to-ea-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I browser the EA Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter my correct \"name2\" and \"7\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to see \"Fail\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EALoginTest.browseEALoginPage()"
});
formatter.result({
  "duration": 3793481709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name2",
      "offset": 20
    },
    {
      "val": "7",
      "offset": 32
    }
  ],
  "location": "EALoginTest.enterUserCredentials(String,String)"
});
formatter.result({
  "duration": 312742739,
  "status": "passed"
});
formatter.match({
  "location": "EALoginTest.LoginClick()"
});
formatter.result({
  "duration": 123220439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fail",
      "offset": 25
    }
  ],
  "location": "EALoginTest.messageVerification(String)"
});
formatter.result({
  "duration": 109012,
  "status": "passed"
});
formatter.after({
  "duration": 2358375467,
  "status": "passed"
});
});