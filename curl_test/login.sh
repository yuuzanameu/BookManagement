#!/bin/bash

read -r -d '' data <<EOF
{
    "email": "example@gmail.com",
    "password": "she12910"
}
EOF

url="http://localhost:5000/login"

curl -H "Content-Type: application/json" \
     -d "$data" \
     -X POST "$url"


