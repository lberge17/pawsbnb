class BusinessesController < ApplicationController
    def index
        render json: Business.all
    end

    def create
        business = Business.new(business_params)
        business.user = @current_user

        if business.save
            render json: {
                status: :created,
                business: business
            }
        else
            render json: {
                status: 500,
                error: business.errors.full_messages
            }
        end
    end

    def update
        business = Business.find_by(id: params['id'])

        if business && business.user == @current_user
            if business.update(business_params)
                render json: {
                    status: :updated,
                    business: business
                }
            else
                render json: {
                    status: 500,
                    message: business.errors.full_messages
                }
            end
        else
            render json: {
                status: 404,
                message: "business not found"
            }
        end
    end

    private

    def business_params
        params.require(:business).permit(:title,
            :description,
            :location,
            :zip,
            :services,
            :phone,
            :email,
            :website
        )
    end
end