import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tabs = [
        {title: 'Title of the 1 tab', content: 'Conent of tab 1'},
        {title: 'Title of the 2 tab', content: 'Conent of tab 2'},
        {title: 'Title of the 3 tab', content: 'Conent of tab 3'},
    ];
}
