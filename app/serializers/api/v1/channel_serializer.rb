class Api::V1::ChannelSerializer < ActiveModel::Serializer
  attributes :id, :name, :type

  has_many :users
end
