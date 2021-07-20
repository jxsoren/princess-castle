
class Player {
    constructor(name, totalCoins, status, hasStar, gameOver){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.game0ver = gameOver
    }

    setName(namePicked){
        if(namePicked === "Luigi"){
            this.name = "Luigi"
        } else if(namePicked = "Mario"){
            this.name = "Mario"
        } else {
            this.name = "Wrong Name. Choose either 'Mario' or 'Luigi'."
        }
    }

    gotHit(){
        console.log(`${newPlayer.name} got hit!`)
        if(this.status === "Powered Up" ){
            this.status = "Big"
        }  else if (this.status === "Big"){
            this.status = "Small"
        } else if (this.status === "Small"){
            this.status = "Dead"
            this.game0ver === true
        } 
    }

    gotPowerup(){
        console.log("1UP!!!")
        if(this.status === "Small"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Powered Up"
        } else if(this.status === "Powered Up"){
            this.hasStar === true
        }
    }

    addCoin(){
        console.log("Coin collected!")
        this.totalCoins += 1
    }

    print(){
        console.log("")
        console.log(`Name: ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Coins: ${this.totalCoins}`)
        console.log(`Star Active?: ${this.hasStar}`)
        console.log("")

    }
}



const newPlayer = new Player("Name Placeholder", 1, "Big", false, false)
newPlayer.setName("Luigi")


const time = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 3) 

    if(randomNum === 0){
        newPlayer.gotHit()
    } else if(randomNum === 1){
        newPlayer.gotPowerup()
    } else if(randomNum === 2){
        newPlayer.addCoin()
    } 
    
    if(newPlayer.game0ver === true || newPlayer.status === "Dead"){
        clearInterval(time)
    }

    newPlayer.print()

}, 1500);





