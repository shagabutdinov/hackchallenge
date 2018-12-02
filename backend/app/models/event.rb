class Event < ApplicationRecord
  belongs_to :camera

  after_save :broadcast_event
  default_scope { order(status: :asc, priority: :asc, timestamp: :desc) }

  def broadcast_event
    puts("XXXX event.rb:8 XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX\n")
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
