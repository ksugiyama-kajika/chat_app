class RoomsController < ApplicationController
  
  # Room一覧を表示するアクション
  def index
    @rooms = Room.all.order(:id)
  end
  
  def show
    # パラーメータから部屋を決める
    @room = Room.find(params[:id])
    # 各roomに紐づくメッセージを表示
    @messages = @room.messages
  end
end
