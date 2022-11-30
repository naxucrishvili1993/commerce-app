import shirt_1 from "./photos/man-shirt-1.jpg";
import shirt_2 from "./photos/man-shirt-2.jpg";
import shirt_3 from "./photos/man-shirt-3.jpg";
import shirt_4 from "./photos/man-shirt-4.jpg";
import jacket_1 from "./photos/man-jacket-1.jpg";
import jacket_2 from "./photos/man-jacket-2.jpg";
import jacket_3 from "./photos/man-jacket-3.jpg";
import jacket_4 from "./photos/man-jacket-4.jpg";
import jeans_1 from "./photos/man-jeans-1.jpg";
import jeans_2 from "./photos/man-jeans-2.jpg";
import jeans_3 from "./photos/man-jeans-3.jpg";
import jeans_4 from "./photos/man-jeans-4.jpg";
import pants_1 from "./photos/man-pants-1.jpg";
import pants_2 from "./photos/man-pants-2.jpg";
import pants_3 from "./photos/man-pants-3.jpg";
import pants_4 from "./photos/man-pants-4.jpg";
import shorts_1 from "./photos/man-shorts-1.jpg";
import shorts_2 from "./photos/man-shorts-2.jpg";
import shorts_3 from "./photos/man-shorts-3.jpg";
import shorts_4 from "./photos/man-shorts-4.jpg";
import socks_1 from "./photos/man-socks-1.jpg";
import socks_2 from "./photos/man-socks-2.jpg";
import socks_3 from "./photos/man-socks-3.jpg";
import socks_4 from "./photos/man-socks-4.jpg";
import sweater_1 from "./photos/man-sweater-1.jpg";
import sweater_2 from "./photos/man-sweater-2.jpg";
import sweater_3 from "./photos/man-sweater-3.jpg";
import sweater_4 from "./photos/man-sweater-4.jpg";
import shoes_1 from "./photos/man-shoes-1.jpg";
import shoes_2 from "./photos/man-shoes-2.jpg";
import shoes_3 from "./photos/man-shoes-3.jpg";
import shoes_4 from "./photos/man-shoes-4.jpg";

const itemsArray = [
	{
		name: "Long Sleeve Shirt in Sky Blue",
		category: "shirts",
		category2: "men",
		image: shirt_1,
		price: 60,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "The North Face Canyonland Jacket",
		category: "jackets",
		category2: "men",
		image: jacket_1,
		price: 50,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Men Winter Check Elegant Pant Blue Slim",
		category: "pants",
		category2: "men",
		image: pants_1,
		price: 31,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "G-Star Raw Men's Jeans",
		category: "jeans",
		category2: "men",
		image: jeans_1,
		price: 20,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Original Austrian Army Alpine Sweater",
		category: "sweaters",
		category2: "men",
		image: sweater_1,
		price: 72,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Duluth Khaki Hidden Elastic Work Shorts",
		category: "shorts",
		category2: "men",
		image: shorts_1,
		price: 22,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "CARHARTT Everyday Crew Socks",
		category: "socks",
		category2: "men",
		image: socks_1,
		price: 7,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Nike Air Force White Man Sneakers",
		category: "shoes",
		category2: "men",
		image: shoes_1,
		price: 155,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Warm Winter Male Boots",
		category: "shoes",
		category2: "men",
		image: shoes_2,
		price: 80,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Combat Waterproof Stell Toe Work Boots",
		category: "shoes",
		category2: "men",
		image: shoes_3,
		price: 60,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "UT Lab Argonaut Boots",
		category: "shoes",
		category2: "men",
		image: shoes_4,
		price: 80,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Charles Tyrwhitt Dress Shirt",
		category: "shirts",
		category2: "men",
		image: shirt_2,
		price: 20,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Silk Sticker Long Sleeve Business Shirt",
		category: "shirts",
		category2: "men",
		image: shirt_3,
		price: 27,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "NWT Van Heusen Men's Shirt",
		category: "shirts",
		category2: "men",
		image: shirt_4,
		price: 26,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Genuine US Army Flight Jacket",
		category: "jackets",
		category2: "men",
		image: jacket_2,
		price: 125,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Carhartt Duck Detroit Jacket Dark Brown",
		category: "jackets",
		category2: "men",
		image: jacket_3,
		price: 115,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Men's Motorcycle Biker Vintage Jacket",
		category: "jackets",
		category2: "men",
		image: jacket_4,
		price: 90,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Diesel Mens Jeans Viker Regular Fit",
		category: "jeans",
		category2: "men",
		image: jeans_2,
		price: 47,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Levi Strauss and Co 550 Jeans",
		category: "jeans",
		category2: "men",
		image: jeans_3,
		price: 12,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Quiksilver Mens Jeans Straight Leg",
		category: "jeans",
		category2: "men",
		image: jeans_4,
		price: 20,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Hanes Men Sweat Pants",
		category: "pants",
		category2: "men",
		image: pants_2,
		price: 13,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Easy Slim Mens Elasticated Trousers",
		category: "pants",
		category2: "men",
		image: pants_3,
		price: 5,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Crazy Camo Combar Cargo Trousers",
		category: "pants",
		category2: "men",
		image: pants_4,
		price: 22,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Hackett London Men's Polo Sweater",
		category: "sweaters",
		category2: "men",
		image: sweater_2,
		price: 20,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Scotch Soda Men's Sweater",
		category: "sweaters",
		category2: "men",
		image: sweater_3,
		price: 15,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Harmont and Blaine Men's Polo Sweater",
		category: "sweaters",
		category2: "men",
		image: sweater_4,
		price: 72,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Hurley Men's Shorts",
		category: "shorts",
		category2: "men",
		image: shorts_2,
		price: 10,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Ariat M4 Mens Cargo Shorts",
		category: "shorts",
		category2: "men",
		image: shorts_3,
		price: 25,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Quiksilver Mens Board Shorts",
		category: "shorts",
		category2: "men",
		image: shorts_4,
		price: 17,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Marvel Avengers Black Widow Socks",
		category: "socks",
		category2: "men",
		image: socks_2,
		price: 6,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "Jordan Mens Air Sneaker Socks",
		category: "socks",
		category2: "men",
		image: socks_3,
		price: 18,
		addToCart: false,
		timesAdded: 0,
	},
	{
		name: "HOT WHEELS Men's Stance CREW Socks",
		category: "socks",
		category2: "men",
		image: socks_4,
		price: 20,
		addToCart: false,
		timesAdded: 0,
	},
];

export default itemsArray;
