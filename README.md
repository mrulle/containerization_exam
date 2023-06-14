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

## Frontend
change directory to the ./frontend

run ```docker build . -t frontend:0.0.1```

## Backend
change directory to the ./backend

run ```docker build . -t backend:0.0.1```

## Deploy stack
change directory to where the PROD_stack.yml is located
```docker stack deploy -c {path_to_compose_file} {name_of_stack}```

example: ```docker stack deploy -c ./PROD_stack.yml exam```

open browser and go to http://127.0.0.1:8000

## Scaling the stack
Warning: Do not scale the database using the current configuration. The database is not configured for cluster, and will mess up the result
If you're using a single-node swarm, then the ```PROD_stack.yml``` config will prevent you from scaling the database

With that in mind, scaling is done with this command: ```docker service scale {servicename}={intances}```

example for scaling the frontend to provide 4 instances: ```docker service scale exam_frontend=4```


