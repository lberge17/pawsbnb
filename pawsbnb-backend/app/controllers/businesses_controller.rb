class BusinessesController < ApplicationController
    def create
        business = Business.create(business_params)

        if business
            render json: {
                status: :created,
                business: business
            }
        else
            render json: {
                status: 500,
                message: 'invalid business registration'
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
            :website,
            :user_id
        )
    end
end