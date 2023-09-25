import { HeroComponent } from './hero/hero.component';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { DividerComponent } from './divider/divider.component';
import { ButtonComponent } from './button/button.component';
import { FloatingNavComponent } from './floating-nav/floating-nav.component';
import { AlertComponent } from './alert/alert.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [
        RouterOutlet,
        AlertComponent,
        FloatingNavComponent,
        ButtonComponent,
        DividerComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        FooterComponent,
        HeroComponent
    ],
})
export class AppComponent {
  constructor(public router: Router) {}
}
