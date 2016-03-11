require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get dance" do
    get :dance
    assert_response :success
  end

  test "should get codex" do
    get :codex
    assert_response :success
  end

end
