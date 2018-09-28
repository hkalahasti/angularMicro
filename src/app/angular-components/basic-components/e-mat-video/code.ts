export const Code = {
    html: {
      content: ` 
    <iframe [src]="getEmbedUrl()" frameborder="0" class="padding-side" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width:98%;height:98%"></iframe>
  `,
      language: 'html'
    },
    ts: {
      content: `
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
        `,
    language: 'javascript'
  },
    css: {
      content: `
    /** No CSS for this example */
          `,
      language: 'css'
    },
    setup: {
        content: {
            step1: ``,
            step2: `
    {
        ...
        "apps": [
            {
            ...
            "scripts": [
                "../node_modules/jquery/dist/jquery.min.js", 
                "../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js"
            ],
            ... 
`,
            step3: `
    {
        ...
        "apps": [
          {
            ...
            "styles": [
                    "../node_modules/ion-rangeslider/css/ion.rangeSlider.css",
                    "../node_modules/ion-rangeslider/css/ion.rangeSlider.skinFlat.css"
            ],
            ...   
` ,
            step4: `
import { IonRangeSliderModule } from "ng2-ion-range-slider";
@NgModule({
    imports: [IonRangeSliderModule]
})`
        },


    }
  }