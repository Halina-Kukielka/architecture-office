import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    @ViewChild('imprintEnd') imprintEnd: ElementRef | undefined;
    show = false

    constructor() {
    }

    ngOnInit(): void {
    }

    showImprint() {
        this.show = !this.show;

        console.log("showImprint");
        setTimeout(() => {
            if (this.imprintEnd != undefined) {
                this.imprintEnd.nativeElement.scrollIntoView({block: 'start'});
            }
        }, 300);
    }

}
