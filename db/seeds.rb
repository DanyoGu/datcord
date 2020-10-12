# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
Membership.destroy_all
Message.destroy_all

# User.connection.execute(‘ALTER SEQUENCE users_id_seq RESTART WITH 1’)
# Server.connection.execute(‘ALTER SEQUENCE servers_id_seq RESTART WITH 1’)
# Membership.connection.execute(‘ALTER SEQUENCE memberships_id_seq RESTART WITH 1’)

user1 = User.create(username: "Kobe Bryant", password: "lakersin4");
user2 = User.create(username: "Lebron James", password: "lakersin4");

server1 = Server.create(server_name: "Lakers", owner_id: user1.id, invite_code: "cwlfpD1lXR0tZg");
server2 = Server.create(server_name: "Warriors", owner_id: user2.id, invite_code: "dwlfpD1lXR0tZg");


membership1 = Membership.create(user_id: user1.id, server_id: server2.id);
membership2 = Membership.create(user_id: user2.id, server_id: server1.id);

channel1 = Channel.create(channel_name: "general", server_id: server1.id);
channel2 = Channel.create(channel_name: "general", server_id: server2.id);

message1 = Messsage.create(body: "Sup Bron", channel_id: channel1.id, author_id: user1.id)
message2 = Messsage.create(channel_id: channel1.id, author_id: user1.id, body: "I'm good man, how's life")
message3 = Messsage.create(channel_id: channel1.id, author_id: user1.id, body: "That's amazing dude, I knew you would do it")
message4 = Messsage.create(channel_id: channel1.id, author_id: user2.id, body: "Hey Kobe, how you doin")
message5 = Messsage.create(channel_id: channel1.id, author_id: user2.id, body: "I'm great bro, we just won the chip")