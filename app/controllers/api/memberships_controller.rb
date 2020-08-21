class Api::MembershipsController < ApplicationController
    def create 
        @membership = Membership.new(membership_params)
        render "api/servers/show"
    end
    
    def destroy 
        @membership = Membership.find_by(membership_params)
        @membership.destroy
        render "api/servers/index" 
    end

    private    
    def membership_params
        params.require(:membership).permit(:user_id, :server_id)
    end
end
