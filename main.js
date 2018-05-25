/* Exercice 1 : chrono
Créez une classe Chrono avec :

une méthode start()

une méthode pause()

une méthode stop()

une propriété currentTime

Indices :

setTimeout
setInterval
Bonus : Mesurer le temps que met le chrono pour écouler 5 min. Même chose pour 10 min. Comment réduire l'écart entre le temps affiché et le temps réel? 
*/

class Chrono {
	constructor() {
		this.currentTime = 0;
    this.remaining = 0;
	}

	start() {
    let myThis = this;
    let startTime = new Date().getTime();
		this.intervalID = setInterval(function(){
      myThis.currentTime = Math.floor((new Date().getTime() - startTime)/1000) + myThis.remaining;
      console.log(myThis.currentTime);
    }, 1000);
	}

	pause() {
    this.remaining = this.currentTime;
    clearInterval(this.intervalID);
  }

	stop() {
    clearInterval(this.intervalID);
    this.currentTime = 0;
    this.remaining = 0;
	}
}

mychrono = new Chrono();

mychrono.start();

/* Test pause method */
/* var machin1 = setTimeout(function(){
  mychrono.pause();
  console.log("Current time:" + mychrono.currentTime);
  }, 5000);

/* Test stop method */
/* var machin1 = setTimeout(function(){
    mychrono.stop();
    console.log("Current time: " + mychrono.currentTime);
    }, 5000); */