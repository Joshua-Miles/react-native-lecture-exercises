class ApplicationController < ActionController::API

    def current_user
        begin
            return User.find(session[:user_id])
        rescue
            return nil
        end
    end

end
