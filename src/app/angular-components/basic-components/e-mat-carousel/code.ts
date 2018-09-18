export const Code = {
    html: {
        content: ` 
        <ngx-slick class="carousel" #slickModal="slick-modal" [config]="slideConfig" (afterChange)="afterChange($event)">
            <div ngxSlickItem *ngFor="let slide of slides" class="slide">
                <img src="{{ slide.img }}" alt="" width="100%">
            </div>
        </ngx-slick>
        <button mat-button (click)="addSlide()">Add</button>
        <button mat-button (click)="removeSlide()">Remove</button>
        <button mat-button (click)="slickModal.slickGoTo(2)">slickGoto 2</button>
        <button mat-button (click)="slickModal.unslick()">unslick</button>
    `,
        language: 'html'
        },
    ts: {
        content: `
        import { Component, OnInit } from '@angular/core';

        @Component({
            selector: 'app-e-mat-carousel',
            templateUrl: './e-mat-carousel.component.html',
            styleUrls: ['./e-mat-carousel.component.scss']
        })
        export class EMatCarouselComponent implements OnInit {

            constructor() { }

            ngOnInit() {
            }

            slides = [
                {img: "https://www.cdc.gov/wcms/3.0/cdcwp/gadgets/images/kitchen_adventurer_cheesecake_brownie.jpg"},
                {img: "https://www.cdc.gov/wcms/3.0/cdcwp/gadgets/images/kitchen_adventurer_donut_1.jpg"},
                {img: "https://www.cdc.gov/wcms/3.0/cdcwp/gadgets/images/kitchen_adventurer_caramel.jpg"},
            ];

            slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};

            addSlide() {
                this.slides.push({img: "https://www.cdc.gov/wcms/3.0/cdcwp/gadgets/images/kitchen_adventurer_caramel.jpg"})
            }

            removeSlide() {
                this.slides.length = this.slides.length - 1;
            }

            afterChange(e) {
                console.log('afterChange');
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
        }
    }