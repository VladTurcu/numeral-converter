# Numeral Converter

Tech test for YNAP.

## Set up instructions

```
// Install all dependencies locally with npm.
npm i

// Start the API server
npm run start:server

// Start the client web app (in new terminal window)
npm run start:client
```

## Notes on approach

Initially I pursued a TDD approach to develop the backend API logic. After writing the tests I opted for an OOP approach to the logic creating a NumeralConverter class which I documented with JSDocs.

I then built the Express API to expose this logic (at this point I ceased writing tests for time-efficiency for a tech test).

Last I created the React application. This is a bare bones frontend (due to time constraints) without much styling and only core features for proof of concept. The React application was designed considering mobile first.

> To see tests in action:
> ```
> npm run test
> ```

## Improvements

### Backend logic (NumeralConverter)
No particular improvements I would make here. Very happy with what I produced.

### Express API
- Should add API tests.

### React App
Lots of improvements to make, these would have been done time permitting.
- Application needs styling!
- Inputs should be sanitized and validated.
- `input` and `OutputDisplay` values should be reset on `activeInput` change.
- Should add front end tests.
- Error responses from the API should be communicated to the user.
