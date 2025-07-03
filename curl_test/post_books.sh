#!/bin/bash

read -r -d '' data <<EOF
{
    "title": "harry potter",
    "author": "Thailaivar",
    "genre" : "Romance",
    "publishedYear": 999
}
EOF

access_token="substitute.your.jwt.token.here"
url="http://localhost:5000/login"

curl -H "Authorization: Bearer $token"
     -H "Content-Type: application/json" \
     -d "$data" \
     -X POST "$url"


