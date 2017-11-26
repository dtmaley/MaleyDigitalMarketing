import { Component, OnInit } from '@angular/core';
import { ContentService } from "../../services/content.service";

import { NavigationItem } from "../../classes/navigationItem";


@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['../../scss/master.scss']
})
export class NavMenuComponent implements OnInit {

    navigationItems: NavigationItem[];
    private fragment: string;

    constructor(private contentService: ContentService) {}

    ngOnInit() {
        this.contentService.getNavigationItems().then(navItems => this.navigationItems = navItems);
    }
}
