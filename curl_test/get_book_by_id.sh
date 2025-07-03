#!/bin/bash

book_id="substitute_book_id"
access_token="substitute.your.jwt.token.here"
url="http://localhost:5000/books/$book_id"

curl -H "Authorization: Bearer $token" \
     -H "Content-Type: application/json" \
     -X GET "$url"



