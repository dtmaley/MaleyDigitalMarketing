import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { ErrorService } from "./error.service";
import { ToasterService } from "angular2-toaster";

import { Profile } from "../classes/profile";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

    private profileUrl = "api/Profile"
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http, private errorService: ErrorService, private toasterService: ToasterService) { }

    getProfiles(): Promise<Profile[]> {
        const url = `${this.profileUrl}/GetList`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Profile[])
            .catch(error => this.errorService.handleError(error));
    }

    getProfile(codename: string): Promise<Profile> {
        const url = `${this.profileUrl}/Get`;
        return this.http.get(url, { params: { codename: codename } })
            .toPromise()
            .then(response => response.json() as Profile)
            .catch(error => this.errorService.handleError(error));
    }
}
