import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';

import { ProfileService } from "../../services/profile.service";

import { Profile } from "../../classes/profile";
import { TaxonomyTerm } from "../../classes/taxonomyTerm";

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'profile-detail',
    templateUrl: './profile-detail.component.html',
    styleUrls: ['../../scss/master.scss', '/profile-detail.scss']
})

export class ProfileDetailComponent implements OnInit {

    profile: Profile;

    constructor(private profileService: ProfileService, private route: ActivatedRoute, private location: Location) { };

    ngOnInit() {

        // Route subscriptions auto-unsubscribe
        this.route.params
            .switchMap((params: Params) => this.profileService.getProfile(params['codename']))
            .subscribe(profile => this.profile = profile);
    } 
}
