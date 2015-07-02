export default function() {

  this.get('/products');

  this.put('/products/:id', function(db, request){
    var product_id = request.params.id;
    var quantity = JSON.parse(request.requestBody).product.quantityInStock;
    var product = db.products.update({id: product_id}, {quantityInStock: quantity});
    return {
      products: product
    };
  });
}
