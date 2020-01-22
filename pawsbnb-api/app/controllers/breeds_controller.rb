class BreedsController < ApplicationController
  before_action :set_breed, only: [:show, :update, :destroy]

  # GET /breeds
  def index
    @breeds = Breed.all

    render json: @breeds
  end

  # GET /breeds/1
  def show
    render json: @breed
  end

  # POST /breeds
  def create
    @breed = Breed.new(breed_params)

    if @breed.save
      render json: @breed, status: :created, location: @breed
    else
      render json: @breed.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /breeds/1
  def update
    if @breed.update(breed_params)
      render json: @breed
    else
      render json: @breed.errors, status: :unprocessable_entity
    end
  end

  # DELETE /breeds/1
  def destroy
    @breed.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_breed
      @breed = Breed.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def breed_params
      params.fetch(:breed, {})
    end
end
