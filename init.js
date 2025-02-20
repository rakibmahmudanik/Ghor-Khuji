const mongoose = require("mongoose");
const Flat = require("./models/flats");

const uri =
  "mongodb+srv://rakibmahmudDB:EtkzwiWY-mAH7Sm@rakib.8rkmg.mongodb.net/Ghorkhuji";
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

const flats = [
  {
    image:
      "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/74f75-diffrence-between-a-flat-and-an-apartmetn.jpg?fit=1000%2C667&ssl=1",
    title: "Modern Apartment in City Center",
    address: "123 Downtown Avenue, New York",
    description: "A spacious 2-bedroom apartment with skyline views.",
    houseNo: "Empire Residences",
    roadNo: "Downtown Avenue",
    flatNo: "Apartment 10B",
    price: 320000,
    bedrooms: 2,
    bathrooms: 2,
    areaSize: 1200,
    ownerName: "John Doe",
    contactNumber: "1234567890",
  },
  {
    image:
      "https://img.staticmb.com/mbcontent/images/uploads/2022/7/difference-between-flat-and-apartment.jpg",
    title: "Luxury Villa with Private Pool",
    address: "456 Ocean Drive, Miami",
    description: "A stunning beachfront villa with a private infinity pool.",
    houseNo: "Seaside Retreat",
    roadNo: "Ocean Drive",
    flatNo: "Villa 4",
    price: 1500000,
    bedrooms: 5,
    bathrooms: 4,
    areaSize: 3500,
    ownerName: "Emily Smith",
    contactNumber: "9876543210",
  },
  {
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/03/28143140/Difference-between-flat-and-apartment.jpg",
    title: "Cozy Suburban Home",
    address: "789 Maple Lane, California",
    description: "A charming 3-bedroom house with a large backyard.",
    houseNo: "Sunny Meadows",
    roadNo: "Maple Lane",
    flatNo: "House 17",
    price: 450000,
    bedrooms: 3,
    bathrooms: 2,
    areaSize: 1800,
    ownerName: "Michael Brown",
    contactNumber: "5678901234",
  },
  {
    image:
      "https://vinayakproperties.co.in/wp-content/uploads/2022/04/flat.jpg",
    title: "High-Rise Penthouse with City View",
    address: "101 Skyline Road, Chicago",
    description: "A luxurious penthouse with panoramic city views.",
    houseNo: "Skyline Towers",
    roadNo: "Skyline Road",
    flatNo: "Penthouse 20A",
    price: 2200000,
    bedrooms: 4,
    bathrooms: 4,
    areaSize: 3000,
    ownerName: "Sophia Williams",
    contactNumber: "3456789012",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKf7J6yfyGCo4gFuCxtVF07abjkGHEoLd5gewyJ9zTIk78oONCXZuR1_tFVlW22dClXc&usqp=CAU",
    title: "Affordable Studio Near Metro",
    address: "202 Oak Street, Los Angeles",
    description: "A budget-friendly studio apartment near public transport.",
    houseNo: "Metro Heights",
    roadNo: "Oak Street",
    flatNo: "Studio 5C",
    price: 150000,
    bedrooms: 1,
    bathrooms: 1,
    areaSize: 600,
    ownerName: "David Johnson",
    contactNumber: "7890123456",
  },
  {
    image:
      "https://www.your-move.co.uk/property-image/rps_yom-WOL240267/image/WOL240267_14/s.jpg?v=29122",
    title: "Spacious Family Home with Garden",
    address: "55 Greenway Street, Texas",
    description: "A beautiful 4-bedroom home with a large backyard and garden.",
    houseNo: "Green Haven",
    roadNo: "Greenway Street",
    flatNo: "House 55A",
    price: 500000,
    bedrooms: 4,
    bathrooms: 3,
    areaSize: 2500,
    ownerName: "Olivia Martinez",
    contactNumber: "1234567801",
  },
  {
    image:
      "https://media.rightmove.co.uk/75k/74974/148123262/74974_BCC240085_IMG_11_0000.jpeg",
    title: "Luxury Condo in Downtown",
    address: "88 Highrise Avenue, Seattle",
    description: "A premium 3-bedroom condo in the heart of downtown.",
    houseNo: "Skyline Heights",
    roadNo: "Highrise Avenue",
    flatNo: "Condo 88F",
    price: 800000,
    bedrooms: 3,
    bathrooms: 3,
    areaSize: 1900,
    ownerName: "Liam Johnson",
    contactNumber: "9876543201",
  },
  {
    image:
      "https://mr3.homeflow-assets.co.uk/files/photo/image/39531/1847/652x/BCC240129_10.jpg",
    title: "Cozy Cabin in the Woods",
    address: "777 Pine Tree Lane, Colorado",
    description:
      "A peaceful retreat surrounded by nature and fresh mountain air.",
    houseNo: "Forest Haven",
    roadNo: "Pine Tree Lane",
    flatNo: "Cabin 777",
    price: 300000,
    bedrooms: 2,
    bathrooms: 1,
    areaSize: 1400,
    ownerName: "Ethan Brown",
    contactNumber: "5678901201",
  },
  {
    image:
      "https://lid.zoocdn.com/645/430/29149a59b41fba4fbb1545f0dcb01be83b823660.jpg",
    title: "Beachfront Bungalow with Ocean View",
    address: "99 Sunset Beach, Florida",
    description:
      "A relaxing bungalow with direct beach access and stunning sunsets.",
    houseNo: "Sunset Retreat",
    roadNo: "Sunset Beach",
    flatNo: "Bungalow 99",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 3,
    areaSize: 2200,
    ownerName: "Sophia White",
    contactNumber: "3456789001",
  },
  {
    image:
      "https://lid.zoocdn.com/645/430/30722fe3639ec9d50bfa130f682850e86c63b3a8.jpg",
    title: "Affordable Apartment Near Park",
    address: "303 Parkside Road, Boston",
    description:
      "A budget-friendly apartment close to parks and public transport.",
    houseNo: "Parkview Apartments",
    roadNo: "Parkside Road",
    flatNo: "Apartment 303B",
    price: 180000,
    bedrooms: 2,
    bathrooms: 1,
    areaSize: 900,
    ownerName: "Daniel Harris",
    contactNumber: "7890123401",
  },
];

Flat.insertMany(flats)
  .then(() => {
    console.log("Dummy data inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting dummy data:", err);
  });
