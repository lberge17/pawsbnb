require 'net/http'
require 'uri'

class Breed < ApplicationRecord
    def self.fetch
        uri = URI.parse("https://api.thecatapi.com/v1/breeds")
        request = Net::HTTP::Get.new(uri)
        request["Accept"] = "application/json"
        request["User-Key"] = ENV["CAT_KEY"]
        req_options = {
          use_ssl: uri.scheme == "https",
        }
        response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
          http.request(request)
        end
        JSON.parse(response.body)
    end
end
