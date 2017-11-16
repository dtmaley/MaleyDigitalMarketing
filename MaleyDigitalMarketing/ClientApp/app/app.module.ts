import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { ErrorService } from "./services/error.service";
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ProfileService } from "./services/profile.service";

import 'bootstrap';

import { AppRoutingModule, routedComponents } from "./app.routing";
import { AppComponent } from "./app/app.component";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        /* Root Components -- Not Routed */
        AppComponent,
        routedComponents,
        NavMenuComponent,        
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule,
        ToasterModule,
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin },
        ToasterService,
        ErrorService,
        ProfileService
    ]
})
export class AppModule {
}
