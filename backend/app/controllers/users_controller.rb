class UsersController < ApplicationController
  def login
    user = User.find_by({ username: params[:username] })
    if (user && user.authenticate(params[:password]))
      session[:user_id] = user.id
      render({ json: { success: true, id: user.id } })
    else
      render({ json: { success: false, id: nil } })
    end
  end

  def profile
    render({ json: self.current_user })
  end

  def add_device
    device = Device.find_by({ push_token_id: params[:push_token_id] })
    if device == nil
      device = Device.create({
        user: self.current_user,
        push_token_id: params[:push_token_id],
      })
    end
    render({ json: device })
  end
end
