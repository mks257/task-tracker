# task-tracker


This project is a full-stack application (React + Express) that runs in a **single Docker container**.

## 🚀 Run locally

```bash
cd server && npm install
cd ../client && npm install
npm start

docker build -t fullstack-docker .
docker run -p 3000:3000 fullstack-docker
