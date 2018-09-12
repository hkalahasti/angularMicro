import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-e-mat-video',
  templateUrl: './e-mat-video.component.html',
  styleUrls: ['./e-mat-video.component.scss']
})
export class EMatVideoComponent implements OnInit {
  @Input() video;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }
  getEmbedUrl() {
    if(this.video){
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
    }else{
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/229457692');
    }
  }
} 
