
BasicGame.Game = function (game) {

};

BasicGame.Game.prototype = {

  create: function () {

    this.sea = this.add.tileSprite(0, 0, 1024, 768, 'sand');

  },

  update: function () {
    this.sea.tilePosition.y += 0.7;
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};