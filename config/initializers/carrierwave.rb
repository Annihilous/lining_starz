CarrierWave.configure do |config|
  config.storage    = :aws
  # config.aws_bucket = ENV["AWS_BUCKET"]
  config.aws_bucket = "lectio-dev"

  config.aws_acl    = :public_read
  # config.asset_host = 'http://example.com'
  config.aws_authenticated_url_expiration = 60 * 60 * 24 * 365

  config.aws_credentials = {
    access_key_id:      ENV["AWS_PUBLIC"],
    secret_access_key:  ENV["AWS_SECRET"],
    region:             ENV['AWS_REGION']
  }
end
