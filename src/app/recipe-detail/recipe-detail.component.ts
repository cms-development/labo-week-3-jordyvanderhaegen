import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private route:ActivatedRoute, private recipeService: RecipeService, private location: Location) { }

  ngOnInit(): void {
    this.getRecipe();
  }
  
  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }
  goBack(): void {
    this.location.back();
  }

}
