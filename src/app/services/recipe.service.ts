import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RECIPES } from '../mock/mock-recipes';
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private messageService: MessageService) { }

  getRecipes(): Observable<Recipe[]>{
    this.messageService.add('Fetched the recipes!');
    return of(RECIPES);
  }
  getRecipe(id: number): Observable<Recipe> {
    this.messageService.add(`Recipeservice: fetched recipe id=${id}`);
    return of(RECIPES.find(hero => hero.id === id));
  }
}
