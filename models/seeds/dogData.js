const { Model } = require('sequelize/types');
const { Dog } = require('../models');

const dogdata = [
    {
        name: 'Sugar',
        species: 'Dog',
        age: '3', 
        gender: 'female',
        description: 'So fluffyyyyy', 
        filename: 'boston.jpeg',
    }, 
    {
        name: 'Archer', 
        species: 'Dog', 
        age: '2', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
        filename: 'golden.jpeg',
    }, 
    {
        name: 'Astro', 
        species: 'Dog', 
        age: '1', 
        gender: 'male',
        description: 'So fluffyyyyy', 
        filename: 'pitpuppy.jpeg',
    }, 
    {
        name: 'Hops',
        species: 'Dog', 
        age: '6', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
        filename: 'kelpie.jpeg'
    },
];

const seedDog = () => Dog.bulkCreate(dogdata);

module.exports = seedDog;