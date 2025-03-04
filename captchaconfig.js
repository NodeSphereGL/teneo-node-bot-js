"use strict";

// Define available captcha services for bypass configuration.
const choice = {
    c1: "capmonster",
    c2: "2captcha",
    c3: "anticaptcha"
};

// website : https://capmonster.cloud/ , https://2captcha.com, https://anti-captcha.com
// Configuration for API keys for different captcha services.
// Fill in your respective API keys.
const config = {
    CAPMONSTER_API_KEY: "40b5e8d9fefe09f87db6e03f4837e7bb",
    TWO_CAPTCHA_API_KEY: "d9a1751716a9104e99388b00f04f40cb",
    ANTICAPTCHA_API_KEY: "YOUR_ANTICAPTCHA_API_KEY"
};

// Select which captcha service to use.
// Captcha bypass configuration: choose one of 'capmonster', '2captcha', or 'anticaptcha'
const ServiceChoice = choice.c2; // Change to your desired service c1,c2,or c3

module.exports = { config, ServiceChoice };
