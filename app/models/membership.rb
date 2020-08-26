# == Schema Information
#
# Table name: memberships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Membership < ApplicationRecord
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server
    def self.find_by_membership(server_id, user_id)
        membership = Membership.find_by(server_id: server_id, user_id: user_id)
    end 
end
