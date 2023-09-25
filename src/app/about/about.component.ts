import { Component } from '@angular/core';
import { DataFetchService } from '../services/data-fetch-service/data-fetch.service';
import { Observable } from 'rxjs';
import { LayoutComponent } from '../layout/layout.component';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    standalone: true,
    imports: [
        NgFor,
        LayoutComponent,
        AsyncPipe,
    ],
})
export class AboutComponent {
  aboutDataPath: string = 'assets/data/about.json';
  about$: Observable<any[]>;

  constructor(private dataFetchService: DataFetchService) {}

  ngOnInit() {
    this.about$ = this.dataFetchService.getData$(this.aboutDataPath);
  }
}
