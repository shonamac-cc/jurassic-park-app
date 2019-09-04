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
  return foundDinosaur.species
};

Park.prototype.findDinosaurSpecies = function (species) {
  let foundSpecies = []
  for (dinosaur of this.collectionOfDinosaurs){
    if (dinosaur.species === species){
      foundSpecies.push(dinosaur)
    }
  }
  return foundSpecies
};

Park.prototype.totalVisitorsDay = function () {
  let totalVisitors = 0;
  for (dinosaur of this.collectionOfDinosaurs){
    totalVisitors += dinosaur.guestsAttractedPerDay;
  }
  return totalVisitors;
};

Park.prototype.totalVisitorsYear = function () {
  return this.totalVisitorsDay() * 365;
};

Park.prototype.totalRevenueYear = function () {
  // const daySales = this.totalVisitorsDay() * this.ticketPrice;
  // return daySales * 365;
  return this.totalVisitorsYear() * this.ticketPrice;
};


module.exports = Park
