# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  server_name :string           not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  invite_code :string           not null
#
class Server < ApplicationRecord
    validates :server_name, :owner_id, :invite_code, presence: true
    validates :server_name, length: { maximum: 12 }
    after_initialize :ensure_invite_code

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
    has_many :memberships,
        foreign_key: :server_id,
        class_name: :Membership
    has_many :members,
        through: :memberships,
        source: :user
    has_many :channels,
        foreign_key: :server_id,
        class_name: :Channel

    def self.find_by_code(code)
        Server.find_by(invite_code: code)
    end
    private
    def ensure_invite_code
        self.invite_code ||= "datcord-" + SecureRandom.urlsafe_base64(10)
    end
end
