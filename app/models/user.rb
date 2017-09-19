class User < ApplicationRecord
  validates :username, presence: true
  has_and_belongs_to_many :channels
end
