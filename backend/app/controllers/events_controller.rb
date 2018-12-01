class EventsController < ApplicationController
  def events
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
end
