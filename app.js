// const acServer = "http://localhost:3000/cable";

// const cable = ActionCable.createConsumer(acServer);
// cable.subscriptions.create(
//   { channel: "NotificationsChannel" },
//   {
//     connected() {
//       console.log("connected to WS server");
//     },
//     received(data) {
//       debugger;
//       console.log(data);
//     },

//     disconnected() {
//       console.log("disconnected from WS server");
//     }
//   }
// );

(function () {
  this.App || (this.App = {});
  const acServer = "ws://localhost:3000/cable";
  this.App.cable = ActionCable.createConsumer(acServer);
}.call(this));

App.room = App.cable.subscriptions.create({channel: "NotificationsChannel"}, {
  connected() {
    console.log("connected to WS server");
  },
  receive: function(data) {
    console.log('got data from WS server');
  },
  disconnected() {
    console.log("disconnected from WS server");
  },
});
