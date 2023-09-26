import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataFetchService } from '../services/data-fetch-service/data-fetch.service';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [LayoutComponent, NgFor, CardComponent],
})
export class ProjectsComponent {
  projectsDataPath: string = 'assets/data/projects.json';
  projects: any[];
  cardsTotal: number;

  constructor(private dataFetchService: DataFetchService) {}

  ngOnInit() {
    this.dataFetchService
      .getData$(this.projectsDataPath)
      .subscribe((projects) => {
        this.cardsTotal = projects.length;
        this.projects = projects;
      });
  }
}
