import consumer from "./consumer"

// consumer.subscriptions.create("RoomChannel", {

// $(function(){}); で囲むことでレンダリング後に実行される
// レンダリング前に実行されると $('#messages').data('room_id')が取得できない
$(function() {  
  const chatChannel = consumer.subscriptions.create({ channel: "RoomChannel", room: $('#messages').data('room_id') }, {
    connected() {
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received: function(data) {
      // アラートの場合 return alert(data['message']);
      // 非同期で画面に文字を表示
      return $('#messages').append(data['message']);
    },
  
    // これが実行されるとコンシューマになったRoomChannel#speak({ message: message})が呼ばれる
    speak: function(message) {
      return this.perform('speak', {
        message: message
      });
    }
  });
  
  $(document).on('keypress', '[data-behavior~=room_speaker]', function(event) {
    if (event.keyCode === 13) {
      chatChannel.speak(event.target.value);
      event.target.value = '';
      return event.preventDefault();
    }
  });
});