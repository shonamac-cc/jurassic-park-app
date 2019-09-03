const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.pop(dinosaur)
};

Park.prototype.mostGuestsAttracted = function () {
  let foundDinosaur = this.collectionOfDinosaurs[0]
  for(dinosaur of this.collectionOfDinosaurs){
    if (dinosaur.guestsAttractedPerDay > foundDinosaur.guestsAttractedPerDay){
      foundDinosaur = dinosaur
    }
  }
  return foundDinosaur
};


module.exports = Park
