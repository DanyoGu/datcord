# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    attr_reader :password

    has_many :owned_servers,
        foreign_key: :owner_id,
        class_name: :Server
    has_many :memberships,
        foreign_key: :user_id,
        class_name: :Membership
    has_many :joined_servers,
        through: :memberships,
        source: :server
    has_many :written_messages,
        through: :author_id,
        class_name: :Message
    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end
    def servers 
        self.owned_servers + self.joined_servers
    end
    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end

end
