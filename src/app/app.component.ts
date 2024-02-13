import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sections = [
    {
      title: 'Directives',
      body: 'The Angular directive helps us to manipulate the DOM...',
      color: 'red',
    },
    {
      title: 'Pipes',
      body: 'The Angular pipes are used to Transform the Data...',
      color: 'green',
    },
    {
      title: 'Component Life Cycle Hook',
      body: 'The life cycle hooks are the methods that angular invokes...',
      color: 'blue',
    },
    {
      title: 'HTTP',
      body: 'The newly designed HttpClient Module allows us to query...',
      color: 'orange',
    },
  ];

  titleColor: string = 'black';

  onSectionClicked(color: string) {
    this.titleColor = color;
  }
}
