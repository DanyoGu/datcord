# json.extract! message, :id, :body, :channel_id, :author_id
json.id message.id
json.body message.body
json.author_id message.author_id
json.channel_id message.channel_id  
json.author message.author.username