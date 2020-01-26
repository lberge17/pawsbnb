class ClientsController < ApplicationController
    def index
        if @current_user
            render json: @current_user.business.clients, include: :pets
        else
            render json: {
                status: 403,
                message: "sign-in required"
            }
        end
    end

    def create
        if @current_user
            client = Client.new(client_params)
            client.business = @current_user.business
            if client.save
                render json: {
                    status: :created,
                    client: client
                }
            else
                render json: {
                    status: 500,
                    error: client.errors.full_messages
                }
            end
        end
    end

    private

    def client_params
        params.require(:client).permit(:name, :phone, :email, :emergency_contact, :address)
    end
end