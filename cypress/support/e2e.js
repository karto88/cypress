// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import './commands'
import 'cypress-mochawesome-reporter/register';
///<reference types="cypress" />

require('cypress-xpath') 
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log('ERROR:', err.message); // ასე ნახავ ზუსტ ტექსტს
    return false;
  });
  import 'cypress-file-upload';

  function generateRandomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}




