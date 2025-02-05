import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActiveSectionService } from "../active-section.service";
import { BrowserService } from "../browser.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit {
  activeSection: string = '';

  projects = [
    { title: 'Project 1', thumbnail: 'assets/images/project1.jpg', fullImage: 'assets/images/project1.jpg' },
    { title: 'Project 2', thumbnail: 'assets/images/project2.jpg', fullImage: 'assets/images/project2.jpg' },
    { title: 'Project 3', thumbnail: 'assets/images/project3.jpg', fullImage: 'assets/images/project3.jpg' },
    { title: 'Project 4', thumbnail: 'assets/images/project4.jpg', fullImage: 'assets/images/project4.jpg' },
    { title: 'Project 5', thumbnail: 'assets/images/project5.jpg', fullImage: 'assets/images/project5.jpg' },
    { title: 'Project 6', thumbnail: 'assets/images/project6.jpg', fullImage: 'assets/images/project6.jpg' },
  ];

  modalOpen = false;
  modalImage: string | null = null;
  selectedIndex = 0;

  constructor(
      private browserService: BrowserService,
      private activeSectionService: ActiveSectionService,
      private el: ElementRef
  ) {}

  ngOnInit(): void {}

  isSafariMobile(): boolean {
    return this.browserService.isSafariMobile();
  }

  isFirefox(): boolean {
    return this.browserService.isFirefox();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const sections = this.el.nativeElement.querySelectorAll('.section');
    let activeSection = '';

    sections.forEach((section: HTMLElement) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSection = section.id;
      }
    });

    this.activeSectionService.setActiveSection(activeSection);
  }

  openModal(fullImage: string, index: number): void {
    this.modalImage = fullImage;
    this.selectedIndex = index;
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
    this.modalImage = null;
  }

  nextImage(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.projects.length;
    this.modalImage = this.projects[this.selectedIndex].fullImage;
  }

  prevImage(): void {
    this.selectedIndex = (this.selectedIndex - 1 + this.projects.length) % this.projects.length;
    this.modalImage = this.projects[this.selectedIndex].fullImage;
  }
}
