import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { ErrorService } from "./error.service";
import { ToasterService } from "angular2-toaster";

import { HomePage } from "../classes/homePage";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContentService {

    private contentUrl = "api/Content";
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http, private errorService: ErrorService, private toasterService: ToasterService) { }

    getHomePageContent(codename: string): Promise<HomePage> {
        const url = `${this.contentUrl}/GetHomePageContent`;
        return this.http.get(url, { params: { codename: codename } })
            .toPromise()
            .then(response => response.json() as HomePage)
            .catch(error => this.errorService.handleError(error));
    }


    /*TODO Remove
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
    */
}
