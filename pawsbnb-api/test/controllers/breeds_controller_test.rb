require 'test_helper'

class BreedsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @breed = breeds(:one)
  end

  test "should get index" do
    get breeds_url, as: :json
    assert_response :success
  end

  test "should create breed" do
    assert_difference('Breed.count') do
      post breeds_url, params: { breed: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show breed" do
    get breed_url(@breed), as: :json
    assert_response :success
  end

  test "should update breed" do
    patch breed_url(@breed), params: { breed: {  } }, as: :json
    assert_response 200
  end

  test "should destroy breed" do
    assert_difference('Breed.count', -1) do
      delete breed_url(@breed), as: :json
    end

    assert_response 204
  end
end
