class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :content

      t.string :receiveable_type
      t.integer :receiveable_id

      t.timestamps
    end

    add_index :messages, [:receiveable_type, :receiveable_id]
  end
end
