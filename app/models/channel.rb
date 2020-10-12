# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  channel_name :string           not null
#  server_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Channel < ApplicationRecord
    validates :channel_name, :server_id, presence: true
    validates :channel_name, length: { maximum: 20 }

    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server

    has_one :owner,
        through: :server,
        source: :owner

    has_many :messages,
        foreign_key: :channel_id,
        class_name: :Message
end

# message1 = Messsage.create(channel_id: channel1.id, author_id: user1.id, body: "Sup Bron")
# message2 = Messsage.create(channel_id: channel1.id, author_id: user1.id, body: "I'm good man, how's life")
# message3 = Messsage.create(channel_id: channel1.id, author_id: user1.id, body: "That's amazing dude, I knew you would do it")
# message4 = Messsage.create(channel_id: channel1.id, author_id: user2.id, body: "Hey Kobe, how you doin")
# message5 = Messsage.create(channel_id: channel1.id, author_id: user2.id, body: "I'm great bro, we just won the chip")
# 