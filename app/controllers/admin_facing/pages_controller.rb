require 'admin_facing/admin_facing_controller.rb'

@messages = Message.all
@user     = User.first

class AdminFacing::PagesController < AdminFacingController
  def dashbaord
    raise "foo"
    @var = "foo"
    @messages = Message.all
    @user = User.first
  end

  def admin_dashbaord
    raise "foo"
    @var = "foo"
    @messages = Message.all
    @user = User.first
  end
end
