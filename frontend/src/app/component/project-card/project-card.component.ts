import { Component, HostListener, ViewChild } from '@angular/core';
import { Project } from '../../model/project.model';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  project;
  project2;
  project3;
  project4;
  project5;
  projects: Project[];
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  constructor() {
    this.project = new Project();
    this.project.projectName = 'West Lake';
    this.project.modern = false;
    this.project.startTime = '500BC';
    this.project.endTime = 'Present';
    this.project.projectLink = '';
    this.project.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    this.project2 = {...this.project};
    this.project2.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien. Sed risus ultricies tristique nulla aliquet enim tortor at. Ullamcorper dignissim cras tincidunt lobortis feugiat. Consequat interdum varius sit amet mattis vulputate enim. Non consectetur a erat nam at lectus urna duis convallis. Ante in nibh mauris cursus. Ante in nibh mauris cursus mattis molestie a iaculis. Parturient montes nascetur ridiculus mus mauris. Fermentum leo vel orci porta non pulvinar neque laoreet. Fermentum odio eu feugiat pretium nibh ipsum consequat. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Scelerisque in dictum non consectetur a';
    this.project3 = {...this.project};
    this.project3.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem odio, ut sollicitudin tellus vestibulum eget. Etiam commodo id mi sed egestas. Fusce sollicitudin consequat velit.';
    this.project4 = {...this.project};
    this.project4.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus';
    this.project5 = {...this.project2};
    this.projects = [this.project, this.project2, this.project3, this.project4, this.project5, this.project];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.masonry.reloadItems();
    this.masonry.layout();
  }

}
