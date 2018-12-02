class Camera < ApplicationRecord
  belongs_to :room
  has_many :events, dependent: :destroy

  def status
    events.where(status: 'new').first&.priority
  end
end
