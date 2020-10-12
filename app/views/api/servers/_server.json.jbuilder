# json.extract! server, :id, :server_name, :owner_id, :invite_code, :channels

json.id server.id
json.server_name server.server_name
json.owner_id server.owner_id
json.invite_code server.invite_code
json.members server.members
json.owner server.owner