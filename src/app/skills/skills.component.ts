import { Component } from '@angular/core';
import { DataFetchService } from '../services/data-fetch-service/data-fetch.service';
import { Observable } from 'rxjs';
import { LayoutComponent } from '../layout/layout.component';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    standalone: true,
    imports: [
        NgFor,
        LayoutComponent,
        AsyncPipe,
    ],
})
export class SkillsComponent {
  skillsDataPath: string = 'assets/data/skills.json';
  skills$: Observable<any[]>;

  constructor(private dataFetchService: DataFetchService) {}

  ngOnInit() {
    this.skills$ = this.dataFetchService.getData$(this.skillsDataPath);
  }
}
