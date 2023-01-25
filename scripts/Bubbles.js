class Bubble {
    constructor(pageWidth, pageHeight) {
        this.pageWidth = pageWidth;
        this.pageHeight = pageHeight;
        this.xPos = Math.floor(Math.random() * pageWidth);
        this.x = 'left: ' + this.xPos + 'px; ';
        this.yPos = Math.floor(Math.random() * pageHeight);
        this.y = 'top: ' + this.yPos + 'px; ';
        this.size = Math.floor(Math.random() * 30) + 10; 
        this.sizePlus = this.size +2;
        this.width = 'width: ' + this.size + 'px;';
        this.height = 'height: ' + this.sizePlus + 'px;';
        this.background = 'background: rgba(255, 255, 200, .13);';
        this.border = 'border-top: 1px solid #fff;';
        this.radius = 'border-radius: 50%;';
        this.speed = this.size * .10;
    }
    Move() {
        this.yPos -= this.speed;
        this.y = 'top: ' + this.yPos + 'px; ';
    }
    Reset() {
        this.xPos = Math.floor(Math.random() * this.pageWidth);
        this.x = 'left: ' + this.xPos + 'px;';
        this.yPos = this.pageHeight + Math.floor(Math.random() * 50) + 20;
        this.y = 'top: ' + this.yPos + 'px;';
        this.size = Math.floor(Math.random() * 20) + 5;
        this.sizePlus = this.size - 1;
        this.width = 'width: ' + this.size + 'px;';
        this.height = 'height: ' + this.sizePlus + 'px;';
        this.speed = this.size * .10;
    }
} 