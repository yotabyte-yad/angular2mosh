import {Component} from 'angular2/core'
import {CourseService} from './course.service'


@Component({
  selector: 'courses',
  template: `
            <h2>Courses</h2>
            {{title}}
            <input type="text" autoGrow />
            <ul>
              <li *ngFor="#course of courses">
                {{course}}
              </li>              
            </ul>
            `,
   providers: [CourseService],
   directives: []         
})
export class CoursesComponent {
    title: String = "The title of courses page";
    courses;
    
    constructor(courseService: CourseService){
      this.courses = courseService.getCourses();
    }
}