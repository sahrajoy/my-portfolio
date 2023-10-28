import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  @ViewChild('projects') myCarousel!: ElementRef;

  ngAfterViewInit() {
    this.adjustVisibleSlides();
  }

  adjustVisibleSlides() {
    const carouselElement = this.myCarousel.nativeElement;
    const carouselItems = carouselElement.querySelectorAll('.carousel-item');
    
    // By default, only show the first slide
    carouselItems.forEach((item: any) => item.classList.remove('active'));
    carouselItems[0]?.classList.add('active');

    if (window.innerWidth >= 768) {  // For larger screens, show the first 3 slides
      carouselItems[1]?.classList.add('active');
      carouselItems[2]?.classList.add('active');
    }
  }

  onSlide(event: any) {
    const carouselElement = this.myCarousel.nativeElement;
    const currentItem = event.relatedTarget;
    const idx = Array.from(carouselElement.children).indexOf(currentItem);
    const direction = event.direction;
    const carouselItems = carouselElement.querySelectorAll('.carousel-item');

    if (window.innerWidth >= 768) {  // For larger screens
      if (direction === 'left') {
        carouselItems[idx + 1]?.classList.add('active');
        carouselItems[idx + 2]?.classList.add('active');
      } else {
        carouselItems[idx - 1]?.classList.remove('active');
        carouselItems[idx - 2]?.classList.remove('active');
      }
    }
    // For smaller screens, the default behavior of Bootstrap should slide one item at a time
  }

  onSlid(event: any) {
    // This logic remains largely unchanged
    const carouselElement = this.myCarousel.nativeElement;
    const activeItems = carouselElement.querySelectorAll('.carousel-item.active');
    activeItems.forEach((item: Element, index: number) => {
      if (index >= 3 || index < 0) {
        item.classList.remove('active');
      }
    });
  }
}