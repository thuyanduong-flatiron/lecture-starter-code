require_relative '../config/environment'
require 'rest-client'
require 'awesome_print'

URL = "https://www.googleapis.com/books/v1/volumes?q=ruby"
response = RestClient.get(URL)
p JSON.parse(response)

# Welcome the user to our app with instructions
# Get a search term as an input from the user
# Make an internet GET request to the GoogleBooksAPI with that search term
# Parse the reponse from the server into a hash we can work with
# Print out the first 10 books title and author
