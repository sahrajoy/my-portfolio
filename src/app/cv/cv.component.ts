import { Component } from '@angular/core';
import { cvContent } from '../cvContent';
import { CvContent } from '../ICvContent';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  cvArr : CvContent[] = cvContent;
}
