import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RECIPES } from '../mock/mock-recipes';
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private messageService: MessageService, private _httpClient: HttpClient) { }
  private _apiEndPointRecipes = `${environment.Jordvand9Api.url}${environment.Jordvand9Api.endPoints.recipes}`;
  private _apiEndPointsRecipeDetail = `${environment.Jordvand9Api.url}${environment.Jordvand9Api.endPoints.recipes}`;

  getRecipes(): Observable<Recipe[]>{
    return this._httpClient.get<Recipe[]>(this._apiEndPointRecipes)
      .pipe(
        tap(recipes => this.log('fetched recipes')), 
        catchError(this.handleError('getRecipes', []))
      );
    }
    
    getRecipe(id: number): Observable<Recipe> {
      return this._httpClient.get<Recipe>(`${this._apiEndPointsRecipeDetail}/${id}?_embed`).pipe(
        tap(_ => this.log(`fetched recipe id=${id}`)),
        catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
      )
    }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`RecipeService: ${message}`);
  }
}
