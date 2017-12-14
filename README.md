forgetMeNotes

This repo contains the source code and documentation regarding the voice recorded notes app that coverts audio to text and stores them for users as a notes

Getting started

Prerequisites

1. Git
2. Node: install version 7.4.0 or higher run “npm insatll node” on command line
3. NPM
4. A clone of the forgetMeNotes repo on your local machine
5. POSTGRESql see https://www.postgresql.org/ for installation
6. KNEX see http://knexjs.org/ for installation
7. A fork of the repo (for any contribution)

Installation

1. Open the root directory for forgetMeNotes
2. Run “npm install” on command line for all the dependencies
3. run “createdb_dev” to create a database on your command line

Running locally

1. Run “node server.js” or “nodemon server.js” in your command line to start the application in development environment
2. open http://localhost:3000 to open this site in your browser


Getting started with app

Landing page

1. Create an account for sign-up or login if you already have an account
2. The password is safe and stored as a hashed password in local computer database

dashboard page

1. Create a new dashboard by clicking on new add the proper field
2. It should take you to notes page
3. You can sign out whenever you like

notes page

1. Create a new notes using the + icon on the screen and follow up with the form
2. You can create as many notes as you like
3. You can sign out whenever you like
