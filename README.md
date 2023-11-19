# Stripe Payment Backend Documentation

## Technologies Used

The Stripe Payment Backend is built using the following technologies:

- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **HTTP Status**: A library to provide easy access to HTTP status codes.
- **JSON Web Token (jsonwebtoken)**: A standard for securing web connections using JSON tokens.
- **Mongoose**: An elegant MongoDB object modeling for Node.js.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **TypeScript**: A superset of JavaScript that adds static typing to the language.
- **ESLint**: A tool for identifying and fixing code style issues in JavaScript and TypeScript.

## Live Link

[Stripe Payment Backend API](https://trade-analysis-backend.vercel.app/api/v1)

## Authentication Routes

### `/auth/login` (POST)

- **Description**: User login route.
- **Request Body**:
  - `email` (string): User's email address.
  - `password` (string): User's password.
- **Response**:
  - `token` (string): JWT token for authentication.

### `/auth/register` (POST)

- **Description**: User registration route.
- **Request Body**:
  - `email` (string): User's email address.
  - `name` (string): User's name.
  - `password` (string): User's password.
- **Response**:
  - `message` (string): Registration success message.


## Payment Routes

### `/create-payment-intent` (POST)

- **Description**: To get the secret key for payment confirmation by sending amount to pay.
- **Request Headers**:
  - `Authorization` (string): Bearer token.
- **Response**:
  - Client secret.


# Stripe-Payment-Backend