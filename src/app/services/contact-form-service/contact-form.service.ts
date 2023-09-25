import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  openAlertComponent: Subject<boolean> = new Subject<boolean>();
  openAlertComponent$: Observable<boolean> =
    this.openAlertComponent.asObservable();

  createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      message: new FormControl(null, Validators.required),
    });
  }

  isFieldInvalid(
    form: FormGroup,
    formControlName: string
  ): boolean | undefined {
    return (
      form.get(formControlName)?.invalid && form.get(formControlName)?.dirty
    );
  }

  resetForm(form: FormGroup): void {
    form.reset();
  }

  alert(success: boolean): void {
    this.openAlertComponent.next(success);
  }
}
