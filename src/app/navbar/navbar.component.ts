import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  clickCounter: number = 0;
  @ViewChild('nav') myDiv!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    // You can be sure that myDiv is available here if you need to do initial setup
  }
  
  myFunction(): void {
    this.clickCounter++;
    if (this.clickCounter % 2 === 1) { 
      this.myDiv.nativeElement.style.display = 'block';
    } else {
      this.myDiv.nativeElement.style.display = 'none';
    }
  }

  navVisible = false;

  toggleNav() {
    this.navVisible = !this.navVisible;
  }
}
