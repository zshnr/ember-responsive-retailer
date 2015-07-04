import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.push({
      data: {
        id: '0',
        type: 'product',
        attributes: {
          "name": "Almond Toe Court Shoes",
          "description": "Patent Black",
          "category": "Women's Footwear",
          "price": 99,
          "quantityInStock": 5,
          "imageUrl": "assets/images/almond-toe-court-shoes.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '1',
        type: 'product',
        attributes: {
          "name": "Suede Shoes",
          "description": "Blue",
          "category": "Women's Footwear",
          "price": 42,
          "quantityInStock": 4,
          "imageUrl": "assets/images/suede-shoes-blue.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '2',
        type: 'product',
        attributes: {
          "name": "Leather Driver Saddle Loafers",
          "description": "Tan",
          "category": "Men's Footwear",
          "price": 34,
          "quantityInStock": 12,
          "imageUrl": "assets/images/leather-driver-saddle-loafers-tan.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '3',
        type: 'product',
        attributes: {
          "name": "Flip Flops",
          "description": "Red",
          "category": "Men's Footwear",
          "price": 19,
          "quantityInStock": 6,
          "imageUrl": "assets/images/red-flip-flops.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '4',
        type: 'product',
        attributes: {
          "name": "Flip Flops",
          "description": "Blue",
          "category": "Men's Footwear",
          "price": 19,
          "quantityInStock": 0,
          "imageUrl": "assets/images/blue-flip-flops.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '5',
        type: 'product',
        attributes: {
          "name": "Gold Button Cardigan",
          "description": "Black",
          "category": "Women's Casualwear",
          "price": 167,
          "quantityInStock": 6,
          "imageUrl": "assets/images/gold-button-cardigan-black.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '6',
        type: 'product',
        attributes: {
          "name": "Cotton Shorts",
          "description": "Medium Red",
          "category": "Women's Casualwear",
          "price": 30,
          "quantityInStock": 5,
          "imageUrl": "assets/images/red-cotton-shorts.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '7',
        type: 'product',
        attributes: {
          "name": "Fine Stripe Short Sleeve Shirt",
          "description": "Grey",
          "category": "Men's Casualwear",
          "price": 49.99,
          "quantityInStock": 9,
          "imageUrl": "assets/images/fine-stripe-short-sleeve-shirt.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '8',
        type: 'product',
        attributes: {
          "name": "Fine Stripe Short Sleeve Shirt",
          "description": "Green",
          "category": "Men's Casualwear",
          "price": 49.99,
          "quantityInStock": 3,
          "imageUrl": "assets/images/green-fine-stripe-short-sleeve-shirt.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '9',
        type: 'product',
        attributes: {
          "name": "Sharkskin Waistcoat",
          "description": "Charcoal",
          "category": "Men's Formalwear",
          "price": 75,
          "quantityInStock": 2,
          "imageUrl": "assets/images/charcoal-sharkskin-waistcoat.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '10',
        type: 'product',
        attributes: {
          "name": "Lightweight Patch Pocket Blazer",
          "description": "Deer",
          "category": "Men's Formalwear",
          "price": 175.50,
          "quantityInStock": 1,
          "imageUrl": "assets/images/blazer.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '11',
        type: 'product',
        attributes: {
          "name": "Bird Print Dress",
          "description": "Black",
          "category": "Women's Formalwear",
          "price": 270,
          "quantityInStock": 10,
          "imageUrl": "assets/images/bird-print-dress.jpg",
          "quantityInCart": 0
        }
      }
    });
    this.store.push({
      data: {
        id: '12',
        type: 'product',
        attributes: {
          "name": "Mid Twist Cut-Out Dress",
          "description": "Pink",
          "category": "Women's Formalwear",
          "price": 540,
          "quantityInStock": 5,
          "imageUrl": "assets/images/pink-dress.jpg",
          "quantityInCart": 0
        }
      }
    });
  }
});
