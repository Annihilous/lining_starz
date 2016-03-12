class Message < ActiveRecord::Base
  validates_presence_of :name, :email, :description

  def email_message
    
  end
end
