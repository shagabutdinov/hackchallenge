class EventsController < ApplicationController
  def list
    render json: Event.all.as_json(
      include: {
        camera: {
          include: {
            room: {}
          },
          methods: [
            :status
          ]
        }
      }
    )
  end

  def update
    Event.find(params[:id]).update!(params.permit(:status))
  end

  def rooms
    render json: Room.all.as_json(
      include: {
        camera: {}
      }
    )
  end

  def cameras
    render json: Hash[
      Camera.all.map { |camera|
        [camera.id, camera.as_json(
          methods: [
            :status
          ]
        )]
      }
    ]
  end

  def trigger
    Rails.logger.info('LOG')
    ActionCable.server.broadcast(
      'events',
      {
        camera: Camera.all.sample,
        reason: "#{Faker::Science.element} detected",
        priority: ['low', 'high'].sample,
        status: 'new',
        timestamp: Time.zone.now,
      }
    )
  end

  def error_404
    render status: :not_found
  end
end
