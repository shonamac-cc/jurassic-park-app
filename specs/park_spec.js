const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
    dinosaur3 = new Dinosaur('velociraptor', 'carnivore', 70);

    park = new Park('Jurassic', 20, [dinosaur1, dinosaur2]);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });


  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur3)
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur2);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
