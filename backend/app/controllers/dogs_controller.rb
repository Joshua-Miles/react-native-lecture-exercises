class DogsController < ApplicationController
  def index
    render({ json: Dog.all })
  end

  def update
    dog = Dog.find(params[:id])
    
    dog.update({
      likes: params[:likes],
    })

    dog.user.devices.each do |device|
      message = {
        to: device.push_token_id,
        channelId: "default",
        sound: "default",
        title: "Someone liked your dog #{dog.name}",
        body: "They have been liked #{dog.likes} time(s)"
      }
      RestClient.post("https://exp.host/--/api/v2/push/send", message.to_json(), {
        Accept: "application/json",
        'Accept-encoding': "gzip, deflate",
        'Content-Type': "application/json",
      })
    end

    render({ json: dog })
  end
end