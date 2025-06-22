import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'foods', component: FoodsComponent},
    { path: 'drinks', component: DrinksComponent},
    { path: 'feedback', component: FeedbackComponent},
];
