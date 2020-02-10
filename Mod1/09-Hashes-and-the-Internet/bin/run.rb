require_relative '../config/environment'
require 'rest-client'
require 'awesome_print'

URL = "https://www.googleapis.com/books/v1/volumes?q=ruby"
response = RestClient.get(URL)
p JSON.parse(response)
