class Business < ApplicationRecord
    belongs_to :user
    has_many :appointments
    has_many :clients
end
