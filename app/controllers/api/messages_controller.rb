class Api::MessagesController < ApplicationController
    def index
        @messages = current_channel.messages
        render "api/messages/index"
    end
    # def create
    #     @message = Message.new(message_params)
    #     @message.author_id = current_user.id 
    #     if @message.save!
    #         render "api/messages/show"
    #     else
    #         render json:["Error creating message"], status: 422
    #     end
    # end
    private
    def message_params
        params.require(:message).permit(:body, :author_id, :channel_id)
    end
    def current_channel
        channel = Channel.find_by(id: params[:channel_id])
    end
end
