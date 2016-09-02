class Api::V1::PeopleController < ApplicationController

  def index
    @people = Person.all 
    render json: @people
  end

  def destroy
    
  end
end
