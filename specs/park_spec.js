const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic', 20, ['t-rex', 'triceratops', 'velociraptor']);
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
    assert.deepStrictEqual(actual, ['t-rex', 'triceratops', 'velociraptor'])
  });


  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur('brachiosaurus')
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ['t-rex', 'triceratops', 'velociraptor', 'brachiosaurus'])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur('velociraptor');
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ['t-rex', 'triceratops'])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
