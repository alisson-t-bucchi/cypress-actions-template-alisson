const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImM4YmU3YTk0LWFhYTAtNDhjNC1iZDBmLWIwMDI2ODU5YTYxOC0xNzIwODIwNzU3NzkwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYTgyY2I3MDUtNTA4YS00ZGJkLWI0NjMtNDAwMDE5ZGVlYjU3IiwidHlwZSI6InQifQ.FNZeXhOMONGK428TSiXPKAQwDQkNyTbXCT9th8Dt0N4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
