import { Component } from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.components';


@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [NavbarComponent]
})
export class AppComponent { }
