class Api::V1::PeopleController < ApplicationController

  def index
    @people = Person.all 
    render json: @people
  end

  def create
    @person = Person.new(name: params[:name], bio: params[:bio])
    if @person.save
      render json: @person
    else
      render json: {errors: @person.errors.full_messages}, status: 422
    end
  end
end
