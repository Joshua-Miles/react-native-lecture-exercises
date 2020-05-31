class CreateDogsTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:dogs) do | table |
      table.string(:name)
      table.string(:image_url)
      table.integer(:likes)
      table.integer(:user_id)
    end
  end
end
