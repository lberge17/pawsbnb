class BusinessesController < ApplicationController
    def index
        render json: Business.all
    end

    def create
        business = Business.new(
            title: params['business']['title'],
            description: params['business']['description'],
            location: params['business']['location'],
            zip: params['business']['zip'].to_i,
            services: params['business']['services'],
            phone: params['business']['phone'],
            email: params['business']['email'],
            website: params['business']['website']
        )
        business.user = User.find(params['business']['user_id'].to_i)

        if business.save
            render json: {
                status: :created,
                business: business
            }
        else
            render json: {
                status: 500,
                message: business.errors.full_messages
            }
        end
    end

    def update
        business = Business.find_by(id: params['business']['id'])

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