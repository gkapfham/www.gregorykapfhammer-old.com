var feed = new Instafeed({
  get: 'user',
  userId: '4170505424',
  clientId: '8352bc22d4cf401280200e188eb709ff',
  accessToken: '4170505424.1677ed0.e9b8c443a69749f99f45b11c2caa4fa1',
  template: '<li><div><a href="{{link}}"><img class="instagram reponsive-tight" src="{{image}}" /></a><h5>{{caption}}</h5></div></li>',
  resolution: 'standard_resolution',
  limit: 12
});
feed.run();
