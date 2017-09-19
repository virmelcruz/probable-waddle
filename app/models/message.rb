class Message < ApplicationRecord
  validates :content, presence: true

  belongs_to :receiveable, polymorphic: true
end
