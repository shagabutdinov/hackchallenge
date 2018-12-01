module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :uuid

    def connect
      self.uuid = 'events'
      Rails.logger.info("client connected: #{self}")
    end
  end
end
