#!/bin/bash

access_token="substitute.your.jwt.token.here"
url="http://localhost:5000/books"

curl -H "Authorization: Bearer $token" \
     -H "Content-Type: application/json" \
     -X GET "$url"

