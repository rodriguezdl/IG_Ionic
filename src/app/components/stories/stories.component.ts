import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-stories',
    templateUrl: './stories.component.html',
    styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {

    public images = [{
        user: 'Daniel',
        url: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    },
        {
            user: 'Darren',
            url: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
        },
        {
            user: 'Darren',
            url: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
        },
        {
            user: 'Darren',
            url: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
        },
        {
            user: 'Darren',
            url: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
