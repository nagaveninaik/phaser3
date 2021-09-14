import Phaser from 'phaser';
import MyGame from './game';


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 750,
    height: 900,
    scene: MyGame
};

const game = new Phaser.Game(config);
