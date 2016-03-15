class CreateEvents < ActiveRecord::Migration
  def change
    create_table  :events do |t|
      t.string    :name
      t.text      :description
      t.datetime  :start_dts
      t.datetime  :end_dts
      t.string    :address_id
      t.string    :contact_id
      t.string    :slug

      t.timestamps null: false
    end
  end
end
