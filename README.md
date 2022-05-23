
# <Pokemon-Project>

  

## Description

  

This is a full-stack project built with React on the front-end and Node/Express on the back-end.

  

- It is a simple pokemon search engine - given a name of a pokemon, it returns a description and its legendary status.

> Which parts am I most proud of? Why?

I would say I am most proud of how it turned out despite me not having extensive experience in back-end development and docker containers. This has presented me lots of opportunities for learning new things during the time I've worked on this project.

> Where did you spend more time? What was the most difficult?

I spent the most time setting up config files to get rid of linting errors, etc. I'd say that was also the most difficult part. Other than that, the actual logic behind the application itself was straightforward enough.

> How did I find the test overall? Did I have issues or difficulties completing it?

I found the test actually really beneficial. I haven't used Docker before, or at the very least not set it up from scratch and so it has been quite a learning curve to say the least. Like I said above, it's the setting up that I had difficulties with but other than that, it was pretty fun!

  

## Table of Contents (Optional)
- [Installation](#installation)

  

- [Tests](#usage)

## Installation

 1. (Install) Run Docker Desktop.
 2. Clone repo and cd into Pokemon-Project.
 3. Go to your terminal and run
    docker-compose up
 4. Once the containers are running, go to http://localhost:3000/ to see the app!  

## Tests

 - Front-End Unit Tests
	 - cd into the ***client*** folder
	 - run ***npm install***
	 - run ***npm run tests*** (for unit tests)
 - Back-End Tests
	 - cd into the ***api*** folder
	 - run ***npm install***
	 - run ***npm run tests*** (for unit tests)  
 - End-to-end Tests
	 - cd into the ***client*** folder
	 - run ***npm start***
	 - Open a new terminal and cd into the ***api*** folder
	 - run ***npm start***
	 - Open another terminal and cd into the ***client*** folder
	 - run ***npm run e2e-test***