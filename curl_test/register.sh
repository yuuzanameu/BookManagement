#!/bin/bash

curl -H "Content-type: application/json" \
    -d '{
            "email": "sunanda@gmail.com",
            "password": "sherlock@4321"
        }' \
    -X POST \
    http://localhost:5000/register

