const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'SQUISHMALLOWS' },
    { name: 'STUFFED ANIMAL PLUSHIES' },
    { name: 'KAWAII PLUSHIES' },
    { name: 'PLUSHI PILLOWS' },
    { name: 'PLUSHI KEYCHAINS' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Wyatt',
      description:
        'Green laughing frog. Brand: Squishmallows. Condition: Like New',
      image: 'squishmallow-frog-wyatt.jpg',
      category: categories[0]._id,
      price: 12.99,
      quantity: 5
    },
    {
      name: 'Davie',
      description:
        'Plush Shark Toy. This ultra-squeezable, 12-inch, medium-sized plush stuffed toy is made with high-quality and ultrasoft materials. Brand: Squishmallows. Condition: Like New',
      image: 'squishmallow-shark-davie.jpg',
      category: categories[0]._id,
      price: 11.99,
      quantity: 10
    },
    {
      name: 'Arelux',
      category: categories[1]._id,
      description:
        'Funny design-The cute design is more convenient to embrace,with a lovely 3D small eyes and a mouth. Condition: Like New',
      image: 'stuffed-duck-Arelux.jpg',
      price: 17.99,
      quantity: 6
    },
    {
      name: 'Octo',
      category: categories[1]._id,
      description:
        'Super Cute Chunky Octopus Plushie. Condition: Like New',
      image: 'stuffed-octupus-Octo.jpg',
      price: 13.99,
      quantity: 9
    },
    {
      name: 'Jett',
      category: categories[1]._id,
      description:
        'Lambs & Ivy Jungle Safari Gray Plush Elephant Stuffed Animal Toy Plushie - Jett. Condition: Like New',
      image: 'stuffed-elephant.jpg',
      price: 14.99,
      quantity: 5
    },
    {
      name: 'Kitty',
      category: categories[2]._id,
      description:
        'Stuffed Animal Cat Plush Toy Anime Cute Kitten Kawaii Plushie Kitty. Condition: Like New',
      image: 'kawaii-cat.jpg',
      price: 12.99,
      quantity: 3
    },
    {
      name: 'Shiba Inu',
      category: categories[2]._id,
      description:
        'Auspicious beginning Stuffed Animal Shiba Inu Plush Toy Anime Corgi Kawaii Plush Dog. Condition: Like New',
      image: 'kawaii-shiba.jpg',
      price: 14.99,
      quantity: 8
    },
    {
      name: 'Spotted Seal',
      category: categories[3]._id,
      description:
        'Fluffy Banana Pose Spotted Seal Plush Pillow. Condition: Like New',
      image: 'pillow-walrus.jpg',
      price: 19.99,
      quantity: 1
    },
    {
      name: 'Kabosen',
      category: categories[4]._id,
      description: 'Kabosen My Melody Plush Keychain,5in/13Cm Plush Toy Plush Doll. Condition: Like New',
      image: 'keychain-kabosen.jpg',
      price: 11.99,
      quantity: 2
    },
    {
      name: 'Timothy',
      category: categories[4]._id,
      description:
        'A new collection of merch from "Team Timothy" is coming to the lifestyle brand GoodSmile Moment! Condition: Like New',
      image: 'keychain-timothy.jpg',
      price: 12.99,
      quantity: 7
    },
    {
      name: 'Fuecoco',
      category: categories[4]._id,
      description:
        'Fuecoco Plush Key Chain. Condition: Like New',
      image: 'keychain-Fuecoco.jpg',
      price: 17.99,
      quantity: 10
    },
    {
      name: 'Curococo',
      category: categories[4]._id,
      description:
        'Corocoro Coronya Yellow Cat Plush Keychain. Condition: Like New',
      image: 'keychain-Curococo.jpg',
      price: 19.99,
      quantity: 7
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
