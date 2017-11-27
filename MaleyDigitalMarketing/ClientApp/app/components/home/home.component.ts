import { Component, OnInit } from '@angular/core';
import { ContentService } from "../../services/content.service";

import { HomePage } from "../../classes/homePage";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['../../scss/master.scss', './home.scss' ]
})
export class HomeComponent implements OnInit {

    homeContent: HomePage;

    constructor(private contentService: ContentService) { };

    ngOnInit() {

        this.contentService.getHomePageContent("home_page").then(homeContent => this.homeContent = homeContent);
    }
}
