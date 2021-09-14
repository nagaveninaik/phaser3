import Phaser from 'phaser';
//import MyGame from 'MyGame.js';
import boy from './assets/boy.png';
import numberLine from './assets/numberLine.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
    //    ' this.load.image('logo', logoImg);
        this.load.image('numberLine',numberLine);
        this.load.image('boy',boy);
    }
      
    create ()
    {
        //const logo = this.add.image(400, 150, 'logo');
        this.numberLine = this.add.image(375,850,'numberLine');
        this.numberLine.setOrigin(0.5);
        this.boy = this.add.image(375,700,'boy');
        
      
        this.tweens.add({
            targets: this.boy,
            x: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

export default MyGame;