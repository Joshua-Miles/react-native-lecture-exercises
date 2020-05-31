class CreateDevices < ActiveRecord::Migration[6.0]
  def change
    create_table :devices do |table|
      table.integer(:user_id)
      table.string(:push_token_id)
    end
  end
end
