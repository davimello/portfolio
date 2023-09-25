import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactFormService } from '../services/contact-form-service/contact-form.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';
import { ButtonComponent } from '../button/button.component';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    standalone: true,
    imports: [
        ClickOutsideDirective,
        ReactiveFormsModule,
        ButtonComponent,
    ],
})
export class ContactComponent {
  toggleDrawer: boolean = false;
  form: FormGroup;
  loading: boolean = false;

  constructor(private router: Router, public formService: ContactFormService) {}

  ngOnInit() {
    document.body.classList.add('overflow-hidden'); // Prevents background scroll
    this.handleShowDrawer();
    this.form = this.formService.createForm();
  }

  ngOnDestroy() {
    document.body.classList.remove('overflow-hidden'); // Allows for background scroll
    this.formService.resetForm(this.form);
  }

  handleShowDrawer(): void {
    setTimeout(() => (this.toggleDrawer = true), 500);
  }

  handleHideDrawer(): void {
    this.toggleDrawer = false;
    setTimeout(() => this.onDrawerClose(), 500);
  }

  onDrawerClose(): void {
    this.router.navigateByUrl('/');
  }

  handleClickOutside(): void {
    if (this.toggleDrawer) {
      this.handleHideDrawer();
    }
  }

  sendEmail(e: Event): void {
    this.loading = true;
    emailjs
      .send(
        environment.EMAIL_SERVICE_ID,
        environment.EMAIL_TEMPLATE_ID,
        {
          name: this.form.get('name')?.value,
          email: this.form.get('email')?.value,
          message: this.form.get('message')?.value,
        },
        environment.EMAIL_PUBLIC_KEY
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.loading = false;
          this.formService.resetForm(this.form);
          this.formService.alert(true);
        },
        (error) => {
          console.error(error.text);
          this.loading = false;
          this.formService.alert(false);
        }
      );
  }
}
