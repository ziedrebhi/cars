const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Static data for cars (featured + new)
let cars = [
  {
    id: 1,
    name: 'BMW 6-series gran coupe',
    brand: 'BMW',
    model: 2017,
    mileage: '3100 mi',
    hp: '240HP',
    transmission: 'automatic',
    price: 430000,
    description: `640i: Features a 3.0L inline-6 turbocharged engine producing 320 hp and 450 Nm of torque, paired with an 8-speed automatic transmission and rear-wheel drive.
650i and 650i xDrive: Equipped with a 4.4L V8 engine delivering 450 hp and 650 Nm of torque, available with rear-wheel or all-wheel drive (xDrive).`,
    image: 'assets/images/featured-cars/fc1.png'
  },
  {
    id: 2,
    name: 'chevrolet camaro wmv20',
    brand: 'Chevrolet',
    model: 2017,
    mileage: '3100 mi',
    hp: '240HP',
    transmission: 'automatic',
    price: 70000,
    description: `3.6L V6: Produces 335 hp and 284 lb-ft of torque.
6.2L V8: Available in the SS trims, delivering 455 hp and 455 lb-ft of torque.
6.2L Supercharged V8 (ZL1): Generates 650 hp and 650 lb-ft of torque.`,
    image: 'assets/images/featured-cars/fc2.png'
  },
  {
    id: 3,
    name: 'lamborghini v520',
    brand: 'Lamborghini',
    model: 2017,
    mileage: '3100 mi',
    hp: '240HP',
    transmission: 'automatic',
    price: 237848,
    description: `Engine: 5.2L naturally aspirated V10 producing up to 631 hp and 417 lb-ft of torque.
Performance: 0-60 mph in approximately 3 seconds; top speed over 200 mph.
Transmission: 7-speed dual-clutch automatic.
Notable Features: Advanced aerodynamics, luxurious interiors with an 8.4-inch infotainment system, and customization options through Lamborghini's Ad Personam program.`,
    image: 'assets/images/featured-cars/fc3.png'
  },
  {
    id: 4,
    name: 'audi a3 sedan',
    brand: 'Audi',
    model: 2017,
    mileage: '3100 mi',
    hp: '240HP',
    transmission: 'automatic',
    price: 70000,
    description: `3.6L V6: Produces 335 hp and 284 lb-ft of torque.
6.2L V8: Available in the SS trims, delivering 455 hp and 455 lb-ft of torque.
6.2L Supercharged V8 (ZL1): Generates 650 hp and 650 lb-ft of torque.
Transmission: 6-speed manual is standard, with an optional 10-speed automatic`,
    image: 'assets/images/featured-cars/fc4.png'
  },
  {
    id: 5,
    name: 'infiniti z5',
    brand: 'Infiniti',
    model: 2017,
    mileage: '3100 mi',
    hp: '240HP',
    transmission: 'automatic',
    price: 50800,
    description: `Engine: 3.5L V6, 295 hp
0-60 mph: 6.2 seconds
Drivetrain: All-Wheel Drive (AWD)
Features: Premium cabin, ProPILOT Assist for semi-autonomous driving, and safety features like adaptive cruise control and lane departure warning.`,
    image: 'assets/images/featured-cars/fc4.png'
  },
  {
    id: 6,
    name: 'porsche 718 cayman',
    brand: 'Porsche',
    model: 2017,
    mileage: '3100 mi',
    hp: '240HP',
    transmission: 'automatic',
    price: 60900,
    description: `Luxury SUV with a range of engine options, including a 2.0L turbocharged 4-cylinder (261 hp) and a 3.0L twin-turbo V6 in the Macan GTS (434 hp).`,
    image: 'assets/images/featured-cars/fc5.png'
  },
  {
    id: 7,
    name: 'bmw 8-series coupe',
    brand: 'BMW',
    model: 2017,
    mileage: '3100 mi',
    hp: '240HP',
    transmission: 'automatic',
    price: 90800,
    description: `The 840i comes with a 3.0L turbocharged inline-6 engine producing 335 hp, while the M850i xDrive is powered by a 4.4L turbocharged V8 with 523 hp. The top-tier M8 Competition boasts a 4.4L M turbo V8 producing 617 hp.`,
    image: 'assets/images/featured-cars/fc7.png'
  },
  {
    id: 8,
    name: 'BMW x series-6',
    brand: 'BMW',
    model: 2017,
    mileage: '3100 mi',
    hp: '240HP',
    transmission: 'automatic',
    price: 45495,
    description: `Engine options: The 330i features a 2.0L turbocharged 4-cylinder engine with 255 hp, while the M3 is powered by a 3.0L turbocharged inline-6 engine delivering up to 503 hp in the Competition variant.
Performance: The 330i accelerates from 0-60 mph in 5.6 seconds, while the M3 Competition does it in 3.8 seconds.
Technology: Standard with iDrive 7.0 system, a 12.3-inch digital display, Apple CarPlay/Android Auto, and available advanced safety features like lane-keeping assist.`,
    image: 'assets/images/featured-cars/fc8.png'
  },
  {
    id: 9,
    name: 'ferrari 488 superfast',
    brand: 'Ferrari',
    model: 2017,
    mileage: '',
    hp: '',
    transmission: '',
    price: null,
    description: `Engine: The car is powered by a 3.9-liter twin-turbo V8, generating 660 horsepower and 561 lb-ft of torque. This engine is paired with a 7-speed dual-clutch transmission.
Performance: The Ferrari 488 Superfast boasts a top speed of 211 mph and can accelerate from 0 to 60 mph in just 3.0 seconds.
The car features advanced aerodynamics, and its dynamic driving systems, such as the Ferrari Dynamic Enhancer, improve cornering performance and braking efficiency.
Interior: Known for its luxurious cabin, the 7 Series comes equipped with leather, premium audio systems, and a host of tech features like gesture controls and ambient lighting.`,
    image: 'assets/images/new-cars-model/ncm3.png'
  }
];

let brands = [
  { id: 1, name: 'BMW' },
  { id: 2, name: 'Chevrolet' },
  { id: 3, name: 'Lamborghini' },
  { id: 4, name: 'Audi' },
  { id: 5, name: 'Infiniti' },
  { id: 6, name: 'Porsche' },
  { id: 7, name: 'Ferrari' }
];

// Cars endpoints
app.get('/api/cars', (req, res) => res.json(cars));
app.post('/api/cars', (req, res) => {
  const car = { ...req.body, id: Date.now() };
  cars.push(car);
  res.json(car);
});
app.delete('/api/cars/:id', (req, res) => {
  cars = cars.filter(car => car.id !== parseInt(req.params.id));
  res.json({ success: true });
});

// Brands endpoints
app.get('/api/brands', (req, res) => res.json(brands));
app.post('/api/brands', (req, res) => {
  const brand = { ...req.body, id: Date.now() };
  brands.push(brand);
  res.json(brand);
});
app.delete('/api/brands/:id', (req, res) => {
  brands = brands.filter(brand => brand.id !== parseInt(req.params.id));
  res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});