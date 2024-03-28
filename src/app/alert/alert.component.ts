import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ContactFormService } from '../services/contact-form-service/contact-form.service';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  standalone: true,
  imports: [NgIf, NgClass],
})
export class AlertComponent {
  success: boolean;
  toggleDrawer: boolean = false;
  header: string = '';
  subheader: string = '';

  constructor(private contactFormService: ContactFormService) {}

  ngOnInit() {
    this.success = true;
    this.header = 'Right on!';
    this.subheader =
      'Your e-mail has been sent. You can expect a response within 48 hours.';
    this.openAlertComponent();
    this.handleShowDrawer();
  }

  openAlertComponent(): void {
    this.contactFormService.openAlertComponent$
      .pipe(take(1))
      .subscribe((success: boolean) => {
        if (success !== null) {
          this.success = success;
          if (success) {
            this.header = 'Right on!';
            this.subheader =
              'Your e-mail has been sent. You can expect a response within 48 hours.';
          } else {
            this.header = 'Whoops!';
            this.subheader = 'Your e-mail has not been sent. Please try again.';
          }
        }
      });
  }

  handleShowDrawer(): void {
    setTimeout(() => (this.toggleDrawer = true), 500);
  }

  handleHideDrawer(): void {
    this.toggleDrawer = false;
  }

  onAlertClose(): void {
    this.toggleDrawer = false;
  }
}
