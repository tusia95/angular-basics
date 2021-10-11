import {Component} from '@angular/core';
export interface Post {
    title: string,
    text: string,
    id?: number,
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
    }
    posts: Post[] = [
        {title: 'Хочу учиться', text:'Не хочу жениться', id: 1,},
        {title: 'Хочу учиться2', text:'Не хочу жениться2', id: 2,}
    ]
}
