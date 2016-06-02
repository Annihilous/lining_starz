class Message < ActiveRecord::Base
  validates_presence_of :name, :email, :description

  # after_create :email_message

  def email_message
    UserMailer.new_message_mailer(self.id).deliver_later
  end
end
