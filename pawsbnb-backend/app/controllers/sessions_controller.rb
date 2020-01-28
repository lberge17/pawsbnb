class SessionsController < ApplicationController
    def create
        user = User
                .find_by(email: params['user']['email'])
                .try(:authenticate, params['user']['password'])
        if user && user.business
            session[:user_id] = user.id
            render json: {
                status: :created,
                logged_in: true,
                user: user,
                business: user.business,
                clients: user.business.clients.map{|client| 
                    {
                        id: client.id,
                        name: client.name,
                        phone: client.phone,
                        email: client.email,
                        emergency_contact: client.emergency_contact,
                        address: client.address,
                        business_id: client.business_id,
                        pets: client.pets
                    }
                },
                appointments: user.business.appointments
            }
        elsif user
            session[:user_id] = user.id
            render json: {
                status: :created,
                logged_in: true,
                user: user,
                business: {},
                clients: [],
                appointments: []
            }
        else
            render json: {
                status: 401,
                logged_in: false
            }
        end
    end

    def logged_in
        if @current_user && @current_user.business
            render json: {
                logged_in: true,
                user: @current_user,
                business: @current_user.business,
                clients: @current_user.business.clients.map{|client| 
                    {
                        id: client.id,
                        name: client.name,
                        phone: client.phone,
                        email: client.email,
                        emergency_contact: client.emergency_contact,
                        address: client.address,
                        business_id: client.business_id,
                        pets: client.pets
                    }
                },
                appointments: @current_user.business.appointments
            }
        elsif @current_user
            render json: {
                logged_in: true,
                user: @current_user,
                business: {},
                clients: [],
                appointments: []
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