class Api::V1::ScoresController < ApplicationController

  def index
    @scores = Score.all
    @scores.sort_by {|score| score.score}
    render json: @scores, include: :user
  end

end
