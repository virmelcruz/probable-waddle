class AddsChannelsUsersHabtm < ActiveRecord::Migration[5.1]
  def change
    create_table :channels_users, id: false do |t|
      t.integer :channel_id
      t.integer :user_id
    end

    add_index :channels_users, [:channel_id, :user_id]
  end
end
