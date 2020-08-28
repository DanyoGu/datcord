class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end
  def speak(data)
    message = Message.create(
      body: data['message'], 
      author_id: data['author_id'], 
      channel_id: data['channel_id']
    )

    socket = { 
      id: message.id,
      body: message.body, 
      author_id: message.author_id, 
      channel_id: message.channel_id,
      author: message.author.username 
    }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed; end
end