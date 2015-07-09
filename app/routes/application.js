import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.push("product", {
      "name": "Almond Toe Court Shoes",
      "id": "0",
      "description": "Patent Black",
      "category": "Women's Footwear",
      "price": 99,
      "quantityInStock": 5,
      "imageUrl": "assets/images/almond-toe-court-shoes.jpg"
    });
    this.store.push("product", {
      "name": "Suede Shoes",
      "id": "1",
      "description": "Blue",
      "category": "Women's Footwear",
      "price": 42,
      "quantityInStock": 4,
      "imageUrl": "assets/images/suede-shoes-blue.jpg"
    });
    this.store.push("product", {
      "name": "Leather Driver Saddle Loafers",
      "id": "2",
      "description": "Tan",
      "category": "Men's Footwear",
      "price": 34,
      "quantityInStock": 12,
      "imageUrl": "assets/images/leather-driver-saddle-loafers-tan.jpg"
    });
    this.store.push("product", {
      "name": "Flip Flops",
      "id": "3",
      "description": "Red",
      "category": "Men's Footwear",
      "price": 19,
      "quantityInStock": 6,
      "imageUrl": "assets/images/red-flip-flops.jpg"
    });
    this.store.push("product", {
      "name": "Flip Flops",
      "id": "4",
      "description": "Blue",
      "category": "Men's Footwear",
      "price": 19,
      "quantityInStock": 0,
      "imageUrl": "assets/images/blue-flip-flops.jpg"
    });
    this.store.push("product", {
      "name": "Gold Button Cardigan",
      "id": "5",
      "description": "Black",
      "category": "Women's Casualwear",
      "price": 167,
      "quantityInStock": 6,
      "imageUrl": "assets/images/gold-button-cardigan-black.jpg"
    });
    this.store.push("product", {
      "name": "Cotton Shorts",
      "id": "6",
      "description": "Medium Red",
      "category": "Women's Casualwear",
      "price": 30,
      "quantityInStock": 5,
      "imageUrl": "assets/images/red-cotton-shorts.jpg"
    });
    this.store.push("product", {
      "name": "Fine Stripe Short Sleeve Shirt",
      "id": "7",
      "description": "Grey",
      "category": "Men's Casualwear",
      "price": 49.99,
      "quantityInStock": 9,
      "imageUrl": "assets/images/fine-stripe-short-sleeve-shirt.jpg"
    });
    this.store.push("product", {
      "name": "Fine Stripe Short Sleeve Shirt",
      "id": "8",
      "description": "Green",
      "category": "Men's Casualwear",
      "price": 49.99,
      "quantityInStock": 3,
      "imageUrl": "assets/images/green-fine-stripe-short-sleeve-shirt.jpg"
    });
    this.store.push("product", {
      "name": "Sharkskin Waistcoat",
      "id": "9",
      "description": "Charcoal",
      "category": "Men's Formalwear",
      "price": 75,
      "quantityInStock": 2,
      "imageUrl": "assets/images/charcoal-sharkskin-waistcoat.jpg"
    });
    this.store.push("product", {
      "name": "Lightweight Patch Pocket Blazer",
      "id": "10",
      "description": "Deer",
      "category": "Men's Formalwear",
      "price": 175.50,
      "quantityInStock": 1,
      "imageUrl": "assets/images/blazer.jpg"
    });
    this.store.push("product", {
      "name": "Bird Print Dress",
      "id": "11",
      "description": "Black",
      "category": "Women's Formalwear",
      "price": 270,
      "quantityInStock": 10,
      "imageUrl": "assets/images/bird-print-dress.jpg"
    });
    this.store.push("product", {
      "name": "Mid Twist Cut-Out Dress",
      "id": "12",
      "description": "Pink",
      "category": "Women's Formalwear",
      "price": 540,
      "quantityInStock": 5,
      "imageUrl": "assets/images/pink-dress.jpg"
    });
  }
});
