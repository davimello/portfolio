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
import { ContactComponent } from '../contact/contact.component';
import { Router } from '@angular/router';
import { ContactTriggerService } from '../services/contact-trigger/contact-trigger.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
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
  templateUrl: './home.component.html'
})
export class HomeComponent {
  showContactComponent: boolean;

  constructor(
    private router: Router,
    private contactTriggerService: ContactTriggerService
  ) {}

  ngOnInit() {
    this.openContactComponent();

    if (this.router.url.includes('/contact')) {
      this.contactTriggerService.open();
    } else {
      this.contactTriggerService.close();
    }
  }

  ngOnDestroy() {
    this.contactTriggerService.openContactComponent.complete();
  }

  openContactComponent(): void {
    this.contactTriggerService.openContactComponent$
      .subscribe((open: boolean) => {
        this.showContactComponent = open;
      });
  }
}
