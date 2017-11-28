import { Component, OnInit, NgZone } from '@angular/core';
import { ContentService } from "../../services/content.service";

import { NavigationItem } from "../../classes/navigationItem";


@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['../../scss/master.scss']
})
export class NavMenuComponent implements OnInit {

    navigationItems: NavigationItem[];
    navClass: string;

    constructor(private contentService: ContentService, zone: NgZone) {
        window.onscroll = () => {
            zone.run(() => {
                if (window.pageYOffset > 100) {
                    this.navClass = "navbar-shrink"
                } else {
                    this.navClass = "";
                }
            });
        }
    }

    ngOnInit() {
        this.contentService.getNavigationItems().then(navItems => this.navigationItems = navItems);
    }
}
