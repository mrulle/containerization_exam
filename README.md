# Zay eCommerce

This is a demo project for Containerization & Linux elective at [UCL University College](https://ucl.dk)

The frontend is based on the following template:

* https://github.com/mosaadaldeen/zay-shop

## Frontend

There is a specific README.md file in the frontend project

## Backend

There is a specific README.md file in the backend project

# How to run it

build the frontend and backend separately
## Buildin the containers
### Frontend
change directory to the ./frontend

run ```docker build . -t frontend:0.0.1```

### Backend
change directory to the ./backend

run ```docker build . -t backend:0.0.1```
## Running on a swarm
### Swarm init
Using ```docker swarm init``` will either initialise a swarm on the machine, or let the user know, that it is already part of a swarm.
If the command returns a join token, or that it is already part of a swarm, then it is ready to have services deployed on it.

## Deploy stack
change directory to where the PROD_stack.yml is located
```docker stack deploy -c {path_to_compose_file} {name_of_stack}```

in this case, use: ```docker stack deploy -c ./PROD_stack.yml exam```

***IMPORTANT: the following instruction on how to run the runonce service may only be done once, since  running it multiple times, will create duplicate rows in the database!***

once the stack has been deployed, you need to run the service ```exam_runonce``` in order to initialise and populate the database.
this is done by scaling the service to 1 replica, and then again down to 0.

It is done by using the following two commands:
```docker service scale exam_runonce=1``` <- this will run the service once, because the restart policy is ```none``` in the PROD_stack.yml
to scale it back to 0 run the command ```docker service scale exam_runonce=0```
This is in order to prevent docker from running it again, in case the docker service is restarted for some reason.





open browser and go to http://127.0.0.1:8000

## Scaling the stack
Warning: Do not scale the database using the current configuration. The database is not configured for cluster, and will mess up the result
If you're using a single-node swarm, then the ```PROD_stack.yml``` config will prevent you from scaling the database

With that in mind, scaling is done with this command: ```docker service scale {servicename}={intances}```

example for scaling the frontend to provide 4 instances: ```docker service scale exam_frontend=4```


