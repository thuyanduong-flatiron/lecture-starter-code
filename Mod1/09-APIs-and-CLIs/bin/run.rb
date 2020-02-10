require 'pry'
require 'json'
require 'rest-client'
require 'awesome_print'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="
response = RestClient.get(GOOGLE_BOOKS_API_BASE_URL + "ruby+programming")
p response

# What is the pseudocode of our appication?