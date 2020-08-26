class Api::ChannelsController < ApplicationController
        before_action :require_logged_in!


    def index
        @channels = current_server.channels
        render "api/channels/index"
    end
    
    def show
        @channel = Channel.find_by(id: params[:id])
        if @channel
            render "api/channels/show"
        else
            render json:["Channel not found"], status: 422
        end
    end
    
    def create
        @channel = Channel.new(channel_params)
        if(Server.find_by(id: params[:server_id]))
            @channel.server_id = current_server.id
        end
        if @channel.save!
            render "api/channels/show"
        else
            render json: @server.errors.full_messages, status: 422 
        end
    end
    


    private
    def channel_params
        params.require(:channel).permit(:channel_name)
    end
    def current_server
        server = Server.find_by(id: params[:server_id])
    end
end
