import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {
  foods = [
    {
      name: 'Truffle Pasta',
      description: 'A creamy and decadent pasta with black truffle.',
      image: 'assets/images/truffle_pasta.jpeg'
    },
    {
      name: 'Pizza',
      description: 'Classic pizza with a rich tomato sauce and mozzarella.',
      image: 'assets/images/pizza.jpeg'
    },
    {
      name: 'Steak Ribeye',
      description: 'Juicy ribeye steak cooked to perfection.',
      image: 'assets/images/steak_ribeye.jpeg'
    },
    {
      name: 'Fresh Salad',
      description: 'A crisp and refreshing salad with fresh vegetables.',
      image: 'assets/images/fresh_salad.jpeg'
    }
  ];
}
