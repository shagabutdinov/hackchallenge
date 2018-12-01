class Event < ApplicationRecord
  belongs_to :camera

  after_save :broadcast_event

  def broadcast_event
    ActionCable.server.broadcast(
      'events',
      self.as_json(
        include: {
          camera: {
            include: {
              room: {}
            }
          }
        }
      )
    )
  end
end
