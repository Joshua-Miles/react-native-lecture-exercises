class UsersController < ApplicationController
  
    def login
        user = User.find_by({ username: params[:username]})
        if(user && user.authenticate(params[:password]))
            session[:user_id] = user.id
            render({ json: { success: true, id: user.id } })
        else
            render({ json: { success: false, id: nil } })
        end
    end

    def profile
        render({ json: self.current_user })
    end

end