class Room < ApplicationRecord
  has_many :camera, dependent: :destroy
end
