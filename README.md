# Tech Quiz Cypress Tests

This repository adds Cypress component and end-to-end tests to the Tech Quiz application (MERN stack).

## 📦 Installation

1. **Clone this repo**  
   ```bash
   git clone https://github.com/Doom825/challenge_19_tech_quiz_test_suite
   cd challenge_19_quiz_test_suite
   cp server/.env.example server/.env
# Edit server/.env to set MONGODB_URI (e.g. mongodb://127.0.0.1:27017/techquizdb)
npm run install
npm run seed
npm run start:dev
API → http://localhost:3001

Client → http://localhost:5173
npm run test:component
npm run test:e2e
npm run test
