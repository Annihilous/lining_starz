class UserMailer < ApplicationMailer
  def new_message_mailer(message_id)
    @message = Message.find(message_id)

    @name                 = @message.name
    @email                = @message.email
    @message_description  = @message.description

    mail to: 'benjaminjnorton@gmail.com', subject: "Lining Starz: New message from #{@message.name}."    
  end
end
