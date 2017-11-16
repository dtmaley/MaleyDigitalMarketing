import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToasterService } from "angular2-toaster";

import 'rxjs/add/observable/throw'


@Injectable()
export class ErrorService {

    constructor(private toasterService: ToasterService) {
    }

    handleError(error: any): Promise<any> {
        console.log(error);
        this.toasterService.pop('error', 'An Error Has Occured', 'Please Try Again');
        return Promise.reject(error.message || error);
    }
}
