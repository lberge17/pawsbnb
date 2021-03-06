class RegistrationsController < ApplicationController
    def create
        user = User.create(
            name: params['user']['name'],
            email: params['user']['email'],
            password: params['user']['password'],
            password_confirmation: params['user']['password_confirmation']
        )

        if user.valid?
            session[:user_id] = user.id
            render json: {
                status: :created,
                user: user,
                logged_in: true,
                business: {},
                clients: [],
                appointments: []
            }
        else
            render json: {
                status: 500,
                message: 'invalid user registration'
            }
        end
    end
end