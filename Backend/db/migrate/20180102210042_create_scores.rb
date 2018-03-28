class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.integer :score
      t.belongs_to :user, foreign_key: true
    end
  end
end
