class PoemsController < ApplicationController
  def create
    dog = Dog.create({
      name: params[:name],
      content: params[:content],
    })

    Device.all.each do |device|
      message = {
		to: device.push_token_id,
		channelId: 'default',
        sound: "default",
        title: "Original Title",
        body: "And here is the body!",
        data: { data: "goes here" },
        _displayInForeground: true,
      }
      RestClient.post("https://exp.host/--/api/v2/push/send", message.to_json(), {
        Accept: "application/json",
        'Accept-encoding': "gzip, deflate",
        'Content-Type': "application/json",
      })
    end
    render({ json: dog })
  end

  def index
    render({ json: Dog.all })
  end

  def show
    current_dog = Dog.find(params[:id])
    render({ json: current_dog })
  end

  def update
    current_dog = Dog.find(params[:id])
    current_dog.update({
      name: params[:name],
      content: params[:content],
    })
    render({ json: current_dog })
  end

  def destroy
    current_dog = Dog.find(params[:id])
    current_dog.destroy
    render({ json: current_dog })
  end
end
