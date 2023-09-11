---
title: Digital Amigos Assignment
author: Nirdosh Chauhan
date: 10-09-2023
---

<!-- setup -->
I have used vite configuration for setting up the React App. All the code for the react app is in the front end folder in this directory. 
I have used NodeJS and ExpressJS for the backend with Sequelize for the DB Operations


<!-- backend -->
## setting up backend
go into the backend folder/directory

Step 1: run `yarn` command to install all the dependencies there<br>
Step 2: in the .env file please provide credentials like db name, db username, etc<br>
Step 3: go to the config folder and in the "config.json" file replace the database credentials with your database credentials in the development section, in order to use migrations and seeders to create the table and seed the data into the database <br>
Step 4: run `yarn run migrate` command to run the migrations to create table and setup the database<br>
Step 5: run `yarn run seed` command to seed the database with the data<br>


<!-- frontend -->
## setting up react app
go into the frontend folder/directory<br>
Step 1: run `yarn` command to install all the dependencies there<br>
Step 2: in the .env file place your Google Maps API key to use the project<br>


<!-- run project -->
## To run the project:
> to run both front end and backend simultaneously from one terminal 
for concurrently -><br>
Step 1: move into the backend folder/directory and <br>
Step 2: run `yarn start` command to run the project<br>



> If You want to run the project on different terminals you can do so by using commands:
for react app -> 
`yarn run dev`
for express server -> 
`yarn run server`