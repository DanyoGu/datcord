export const fetchChannels = (serverId) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels`,
        method: "GET"
    })
);
export const fetchChannel = (serverId, channelId) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels/${channelId}`,
        method: "GET"
    })
);
export const createChannel = (serverId, channel) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels`,
        method: "POST",
        data: { channel }
    })
);


