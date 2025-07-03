#!/bin/bash

refresh_token="substitute.your.jwt.token.here"
read -r -d '' data <<EOF
{
    refresh_token=$refresh_token
}
EOF

url="http://localhost:5000/refresh"

curl -H "Authorization: Bearer $token"
     -H "Content-Type: application/json" \
     -d "$data" \
     -X POST "$url"



