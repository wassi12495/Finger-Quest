class Item < ActiveRecord::Base
  has_many :backpacks
  has_many :users, through: :backpacks
end
