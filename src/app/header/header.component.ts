import {Component, OnInit} from '@angular/core';
import {ActiveSectionService} from "../active-section.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeSection!: string;


  constructor(private activeSectionService: ActiveSectionService) { }

  ngOnInit(): void {
    this.activeSectionService.activeSection$.subscribe((section) => {
      this.activeSection = section;
    });
  }

}
