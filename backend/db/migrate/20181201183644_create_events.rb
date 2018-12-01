class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.references :camera, foreign_key: true
      t.string :reason
      t.string :priority
      t.string :status
      t.datetime :timestamp

      t.timestamps
    end
  end
end
