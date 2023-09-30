import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { AlertComponent } from '../alert/alert.component';
import { ButtonComponent } from '../button/button.component';
import { DividerComponent } from '../divider/divider.component';
import { FloatingNavComponent } from '../floating-nav/floating-nav.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AlertComponent,
    FloatingNavComponent,
    ButtonComponent,
    DividerComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    HeroComponent,
    WrapperComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
