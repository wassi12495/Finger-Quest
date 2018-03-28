class Api::V1::ItemsController < ApplicationController

   def index
     @items = Item.all
     render json: @items
   end


   private

   def item_params
     params.permit(:name)
   end
end
