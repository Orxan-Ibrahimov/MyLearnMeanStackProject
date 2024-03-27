import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'universe-course-item',
  templateUrl: './course-item.component.html',
})
export class CourseItemComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Input() courseData:any;

  ngOnInit(): void {
    console.log('okay');
  }
}
