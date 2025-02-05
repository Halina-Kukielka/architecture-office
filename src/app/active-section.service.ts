import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActiveSectionService {
  private activeSectionSubject = new BehaviorSubject<string>('start');
  activeSection$ = this.activeSectionSubject.asObservable();

  setActiveSection(section: string): void {
    this.activeSectionSubject.next(section);
  }

  constructor() { }
}
