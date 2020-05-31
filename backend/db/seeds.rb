user = User.first

if (user == nil)
    
  Dog.destroy_all
  Device.destroy_all
  User.destroy_all

  puts "Please enter a username for your login:"
  username = STDIN.gets.chomp

  puts "Please enter a password for your login:"
  password = STDIN.gets.chomp

  user = User.create({
    username: username,
    password: password,
  })

  tess = Dog.create({
    user: user,
    name: "Tess",
    likes: 0,
    image_url: "https://res.cloudinary.com/jmiles/image/upload/v1585587772/lecture-assets/master/appendix/doggos/tess.jpg",
  })

  rizzo = Dog.create({
    user: user,
    name: "Rizzo",
    likes: 0,
    image_url: "https://res.cloudinary.com/jmiles/image/upload/v1585587772/lecture-assets/master/appendix/doggos/rizzo.jpg",
  })

  pip = Dog.create({
    user: user,
    name: "Pip",
    likes: 0,
    image_url: "https://res.cloudinary.com/jmiles/image/upload/v1585587772/lecture-assets/master/appendix/doggos/pip.jpg",
  })
end
