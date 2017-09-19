class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name
end
