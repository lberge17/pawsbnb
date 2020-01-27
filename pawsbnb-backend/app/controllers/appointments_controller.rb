class AppointmentsController < ApplicationController
    def index
        if @current_user && @current_user.business
            render json: @current_user.business.appointments
        else
            render json: {
                status: 401
            }
        end
    end

    def create
        if @current_user && @current_user.business && @current_user.business.clients.find_by(id: params['appointment']['client_id'])
            appointment = Appointment.new(appointment_params)
            appointment.business = @current_user.business
            if appointment.save
                render json: {
                    status: :created,
                    appointment: appointment
                }
            else
                render json: {
                    status: 500,
                    error: appointment.errors.full_messages
                }
            end
        else
            render json: {
                status: 401
            }
        end
    end

    private

    def appointment_params
        params.appointment.require(:title, :start, :end, :pets, :services, :medications, :details, :client_id)
    end
end