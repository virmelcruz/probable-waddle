class Channel < ApplicationRecord
  validates :name, :type, presence: true

  has_many :messages, as: :receiveable
  has_and_belongs_to_many :users
end
