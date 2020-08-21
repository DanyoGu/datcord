class Server < ApplicationRecord
    validates :server_name, :owner_id, presence: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
    has_many :memberships,
        foreign_key: :server_id,
        class_name: :Membership
    has_many :members,
        through: :memberships,
        source: :user
end
