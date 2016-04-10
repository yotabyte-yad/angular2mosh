import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorComponent} from './author.component'
import {FavouriteComponent} from './favourite.component'

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
               <i class="glyphicon glyphicon-star"></i>
               <courses></courses>
               <authors></authors>               
               <favourite [isFavourite]="post.isFavourite" (change)="onFavouriteChange($event)"></favourite>`,
    directives: [CoursesComponent, AuthorComponent, FavouriteComponent]
})
export class AppComponent { 
  
  post = {
    title: "Title",
    isFavourite: true
  }
  
  onFavouriteChange($event){
    console.log($event);
  }
  
}