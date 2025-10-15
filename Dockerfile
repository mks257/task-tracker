# Step 1: Build React frontend
FROM node:20-alpine AS build
WORKDIR /app
COPY Client ./Client
WORKDIR /app/Client
RUN npm install
RUN npm run build

# Step 2: Setup Express backend and serve build
FROM node:20-alpine
WORKDIR /app
COPY Server ./Server
WORKDIR /app/Server
RUN npm install
COPY --from=build /app/Client/build ./build

EXPOSE 5000
CMD ["npm", "start"]
