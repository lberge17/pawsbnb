class Client < ApplicationRecord
    belongs_to :business
    has_many :pets
    has_many :appointments
end
