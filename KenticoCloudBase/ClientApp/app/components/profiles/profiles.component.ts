import { Component, OnInit } from '@angular/core';

import { ProfileService } from "../../services/profile.service";

import { Profile } from "../../classes/profile";
import { TaxonomyTerm } from "../../classes/taxonomyTerm";


@Component({
    selector: 'profiles',
    templateUrl: './profiles.component.html',
    styleUrls: ['../../scss/master.scss', '/profiles.scss']
})

export class ProfilesComponent implements OnInit {

    profiles: Profile[];
    allProfiles: Profile[];
    status: TaxonomyTerm[] = [];
    developmentExperience: TaxonomyTerm[] = [];
    functionalBusinessExperience: TaxonomyTerm[] = [];
    industriesServed: TaxonomyTerm[] = [];
    technicalAndBusinessSkills: TaxonomyTerm[] = [];
    certificationsAndProfessionalMemberships: TaxonomyTerm[] = [];
    methadologies: TaxonomyTerm[] = [];

    statusFilter: string;
    developmentExperienceFilter: string;
    industriesServedFilter: string;
    functionalBusinessExperienceFilter: string;
    technicalAndBusinessSkillsFilter: string;
    certificationsAndProfessionalMembershipsFilter: string;
    methadologiesFilter: string;

    constructor(private profileService: ProfileService) { };

    ngOnInit() {
        // Get all profiles
        this.profileService.getProfiles().then(associateProfiles => {

            // Build filters based on profile values
            associateProfiles.forEach(p => {
                p.associateStatus.forEach(status => this.buildFilter(this.status, status))
                p.developmentExperience.forEach(developmentExperience => this.buildFilter(this.developmentExperience, developmentExperience))
                p.functionalBusinessExperience.forEach(functionalBusinessExperience => this.buildFilter(this.functionalBusinessExperience, functionalBusinessExperience))
                p.industriesServed.forEach(industriesServed => this.buildFilter(this.industriesServed, industriesServed))
                p.technicalAndBusinessSkills.forEach(technicalAndBusinessSkill => this.buildFilter(this.technicalAndBusinessSkills, technicalAndBusinessSkill))
                p.certificationsAndProfessionalMemberships.forEach(certificationsAndProfessionalMemberships => this.buildFilter(this.certificationsAndProfessionalMemberships, certificationsAndProfessionalMemberships))
                p.methodologies.forEach(methodologies => this.buildFilter(this.methadologies, methodologies))
            });

            this.profiles = this.allProfiles = associateProfiles;
        });
    }

    // Adds items to the filter if they do not already exist
    buildFilter(filterName: TaxonomyTerm[], item: TaxonomyTerm) {
        if (!filterName.some(f => f.codename == item.codename)) {
            filterName.push(item);
        }
    }

    filter() {

        this.profiles = this.allProfiles;

        // Peform filtering. All Client Side.
        if (this.statusFilter && this.statusFilter != 'undefined') {
            this.profiles = this.profiles.filter(p => p.associateStatus[0].codename == this.statusFilter);
        }
        if (this.certificationsAndProfessionalMembershipsFilter && this.certificationsAndProfessionalMembershipsFilter != 'undefined') {
            this.profiles = this.profiles.filter(p => p.certificationsAndProfessionalMemberships.find(c => c.codename == this.certificationsAndProfessionalMembershipsFilter) != undefined);
        }
        if (this.technicalAndBusinessSkillsFilter && this.technicalAndBusinessSkillsFilter != 'undefined') {
            this.profiles = this.profiles.filter(p => p.technicalAndBusinessSkills.find(c => c.codename == this.technicalAndBusinessSkillsFilter) != undefined);
        }
        if (this.functionalBusinessExperienceFilter && this.functionalBusinessExperienceFilter != 'undefined') {
            this.profiles = this.profiles.filter(p => p.functionalBusinessExperience.find(c => c.codename == this.functionalBusinessExperienceFilter) != undefined);
        }
        if (this.industriesServedFilter && this.industriesServedFilter != 'undefined') {
            this.profiles = this.profiles.filter(p => p.industriesServed.find(c => c.codename == this.industriesServedFilter) != undefined);
        }
        if (this.developmentExperienceFilter && this.developmentExperienceFilter != 'undefined') {
            this.profiles = this.profiles.filter(p => p.developmentExperience.find(c => c.codename == this.developmentExperienceFilter) != undefined);
        }
        if (this.methadologiesFilter && this.methadologiesFilter != 'undefined') {
            this.profiles = this.profiles.filter(p => p.methodologies.find(c => c.codename == this.methadologiesFilter) != undefined);
        }
    }
}
