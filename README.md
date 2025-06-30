# Quotes API 💬

A simple Express.js REST API for serving and managing quotes about computers, coding, and technology.

## 📦 Features

- `GET /api/quotes` — Get all quotes
- `GET /api/quotes?person=Grace Hopper` — Get quotes by a specific person
- `GET /api/quotes/random` — Get a random quote
- `POST /api/quotes` — Add a new quote (via query params)
- `PUT /api/quotes/:id` — Update a quote by ID
- `DELETE /api/quotes/:id` — Delete a quote by ID

## 🛠 Tech Stack

- Node.js
- Express.js
- Postman (for testing)

## 🚀 Getting Started

```bash
git clone https://github.com/LS2603/Quotes_API.git
cd Quotes_API
npm install
node server.js
