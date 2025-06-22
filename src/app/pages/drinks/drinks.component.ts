import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {
  drinks = [
    {
      name: 'Berry Smoothie',
      description: 'A refreshing smoothie with mixed berries.',
      image: 'assets/images/berry_smoothie.jpeg'
    },
    {
      name: 'Coffee',
      description: 'Freshly brewed coffee.',
      image: 'assets/images/coffee.jpeg'
    },
    {
      name: 'Iced Tea',
      description: 'A cool and refreshing iced tea.',
      image: 'assets/images/Iced_tea.jpeg'
    },
    {
      name: 'Orange Juice',
      description: 'Freshly squeezed orange juice.',
      image: 'assets/images/Orange_juice.jpeg'
    }
  ];
}
