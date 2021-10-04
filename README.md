# Plan with me! 

In this repository, you will use Nodes/Express, mySQL and REACT to build an (Multiple Page Application for the MVP.

## Project Description

The overall project is to assist user to plan their todos, check for weather, saving contact numbers/email-address, and with a Pomodoro timer to provide a simple tool/process for improving productivity. 

## MVP 

The MVP for Plan With Me is the Pomodoro section. The setting for Pomodoro is still and on going work of mine to perfect this project. 

### Current Feature 

- Users can start the pomodoro timer
- Home page is random image and qoutes

### Project Dev Objectives

- Use API, components (React) for the client/frontend.
- Pass props to child components and propogate changes back up to parent components.
- Use state to respond to changes.

## 1️⃣ Database Schema

![dbdesign](https://user-images.githubusercontent.com/86279819/131248985-c0923464-5cd9-44e3-95aa-a0464b5091f6.png)

## 2️⃣ API Routes Plan
![Screenshot (527)](https://user-images.githubusercontent.com/86279819/131249214-3c5d8bad-3ec8-4f00-8a1f-1cf964bacf85.png)
![Screenshot (528)](https://user-images.githubusercontent.com/86279819/131249217-14f9280f-e903-477e-af59-8bac4a2e5c37.png)


## Technology

- Database schema design – dbdesigner
- Database system - mySQL
- Express, React, Bootstrap React
- Postman - testing API

## Setup

### Dependencies

- Run npm install in project directory. This will install server-related dependencies such as express.
- cd client and run npm install. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running mysql -u root -p
- Create a new database called mvp: create database mvp;
- Add a .env file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:

  DB_HOST=localhost
  DB_USER=root
  DB_NAME=mvp
  DB_PASS=YOURPASSWORD
  
  - Run npm run migrate in the main folder of this repository, in a new terminal window.


 _This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
