class Api::ServersController < ApplicationController
    before_action :require_logged_in!
    def index
        @servers = get_all_servers(current_user)
        render "api/servers/index"
    end
    
    def show
        @server = Server.find_by(id: params[:id])
        if get_all_servers(current_user).include?(@server)
            render "api/servers/show"
        else
            render json:["Server not found"], status: 422
        end
    end
    
    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        if @server.save!
            render "api/servers/show"
        else
            render json: @server.errors.full_messages, status: 422 
        end
    end
    
    def update
        @server = Server.find(params[:id])
        if @server.owner_id == current_user.id && @server.update(server_params)
            render "api/servers/show"
        elsif @server.owner_id != current_user.id
            render json:["User must be owner to edit"], status: 422
        else
            render json: @server.errors.full_messages, status: 500
        end 
    end

    def destroy 
        @server = Server.find(params[:id])
        if @server.owner_id == current_user.id
            @server.destroy
        else 
            render json:["User must be owner to chirps"], status: 422
        end 
    end
    
    def join
        @server = Server.find_by_code(params[:invite_code])
        if @server
            Membership.create({ user_id: current_user.id, server_id: @server.id })
            render "api/servers/show"
        else
            render json: ["Server not found"], status: 404
        end 
    end

    def leave
        @server = current_user.joined_servers.find(params[:id])
        if @server 
            membership = Membership.find_by_membership(@server.id, current_user.id)
            membership.destroy
            render "api/servers/show"
        else
            render json: ["Server not found"], status: 404
        end
    end
    private
    def server_params
        params.require(:server).permit(:server_name, :owner_id, :invite_code)
    end
    def get_all_servers(user)
        return user.owned_servers + user.joined_servers
    end
end
