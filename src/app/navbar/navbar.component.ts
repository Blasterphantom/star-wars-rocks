import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDrawerOpen: boolean = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    // Check if the clicked element is outside of your component
    const isClickedOutside = !this.elementRef.nativeElement.contains(event.target);

    if (isClickedOutside) {
      this.isDrawerOpen = false;
    }
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
