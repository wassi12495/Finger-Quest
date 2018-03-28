class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :img
      t.integer :healthEffect
      t.integer :ammoEffect
      t.string :description
    end
  end
end
