import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist = [
    {
      image: 'assets/images/product1.png',
      title: 'MSA 160 Cordless Chainsaw - AP System',
      description: 'Top-class cutting performance.',
      price: 19395,
      originalPrice: 21935,
      discount: 10
    },
    {
      image: 'assets/images/product2.png',
      title: 'MSA 140 Cordless Chainsaw - AP System',
      description: 'For precise and effortless cutting.',
      price: 17895,
      originalPrice: 19895,
      discount: 10
    },
    {
      image: 'assets/images/product3.png',
      title: 'MSA 120 Cordless Chainsaw - AP System',
      description: 'Ideal for small property owners.',
      price: 16995,
      originalPrice: 18895,
      discount: 15
    }
  ];
}
