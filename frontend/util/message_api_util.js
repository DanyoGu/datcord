export const fetchMessages = (channel_id) => (
    $.ajax({
        url: `/api/messages`,
        method: "GET",
        data: { channel_id }
    })
);
export const createMessage = (message) => (
    $.ajax({
        url: `/api/messages`,
        method: "POST",
        data: { message }
    })
);


