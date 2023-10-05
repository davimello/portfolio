import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ContactTriggerService {
  openContactComponent: Subject<boolean> = new Subject<boolean>;
  openContactComponent$: Observable<boolean> = this.openContactComponent.asObservable();

  open(): void {
    this.openContactComponent.next(true);
  }

  close(): void {
    this.openContactComponent.next(false);
  }
}
