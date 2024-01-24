class hoja {
    constructor(image, position_x, position_y, tamanyo, speed, yMax){
        this.image = image
        this.position_x = position_x
        this.tamanyo = tamanyo
        this.speed = speed
        this.yMax = yMax
        setInterval(() => this.mover(), 17)
    }

    mover(){
        this.position_y = this.position_y + speed
        if (this.position_y > yMax ){
            this.position_y = 0
        }
    }
}