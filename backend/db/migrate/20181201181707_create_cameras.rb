class CreateCameras < ActiveRecord::Migration[5.2]
  def change
    create_table :cameras do |t|
      t.string :name
      t.references :room, foreign_key: true
      t.string :video
      t.integer :position_x
      t.integer :position_y
      t.integer :position_angle

      t.timestamps
    end
  end
end
