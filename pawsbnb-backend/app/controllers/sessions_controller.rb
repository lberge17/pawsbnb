class SessionsController < ApplicationController

    def create
        user = User
                .find_by(email: params['user']['email'])
                .try(:authenticate, params['user']['password'])
        if user
            session[:user_id] = user.id
            render json: {
                status: :created,
                logged_in: true,
                user: user,
                business: user.business
            }
        else
            render json: {
                status: 401,
                logged_in: false
            }
        end
    end

    def logged_in
        if @current_user
            render json: {
                logged_in: true,
                user: @current_user,
                business: @current_user.business
            }
        else
            render json: {
                logged_in: false
            }
        end
    end

    def logout
        reset_session
        render json: {
            status: 200,
            logged_out: true
        }
    end
end