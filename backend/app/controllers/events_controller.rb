class EventsController < ApplicationController
  def list
    render json: Event.all.as_json(
      include: {
        camera: {
          include: {
            room: {}
          }
        }
      }
    )
  end

  def update
    Event.find(params[:id]).update!(params.permit(:status))
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
end
