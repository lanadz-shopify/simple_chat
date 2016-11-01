class Message < ApplicationRecord
  validates :body, presence: true
  validates :user, presence: true
end
