class Api::V1::MessageSerializer < ActiveModel::Serializer
    attributes :id, :content, :receiveable_id
end
  