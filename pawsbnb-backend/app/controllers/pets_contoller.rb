class PetsController < ApplicationController
    def create
        if @current_user && @current_user.clients.find_by(id: params['pet']['client_id'])
            pet = Pet.new(pet_params)
            if pet.save
                render json: {
                    status: :created,
                    pet: pet
                }
            else
                render json: {
                    status: 500,
                    error: pet.errors.full_messages
                }
            end
        else
            render json: {
                status: 401,
                message: 'need to be signed in and have valid client id'
            }
        end
    end

    private

    def pet_params
        params.require(:pet).permit(:name, :breed, :weight, :birthdate, :concerns, :client_id)
    end
end