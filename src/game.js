import Phaser, { Scene } from 'phaser';
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
        this.load.image('numberLine',numberLine);
        this.load.image('boy',boy);
    }
   
       
    create ()
    {
        
        this.numberLine = this.add.image(375,850,'numberLine');
        this.numberLine.setOrigin(0.5);
        this.boy = this.add.image(375,700,'boy');
        
        // console.log(this.boy)
        let Boy = this.boy;
        let that = this;
        
   
       
        this.boy.setInteractive().on("pointerdown", function (pointer, localX, localY, event) {
            // console.log(Boy)
            // console.log(this.boy)
           
            let move =  that.tweens.add({
                targets: Boy,
                x: Math.random(),
                //y: Math.random(),
                duration: 1000,
                ease: "Power2",
                yoyo: true,
                loop: 1,
                
            });
        
        
        });
	
		
        
		

        
    
}
}
function update() {
    
}


export default MyGame;
