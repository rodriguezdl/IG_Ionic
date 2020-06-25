import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public feed = [{
    user: 'Daniel',
    image: '/assets/pics/sunflower.jpg',
    profileImg: '/assets/pics/Daniel-profile.jpg'
  },
  {
    user: 'Darren',
    image:'/assets/pics/gorge.jpg'
  },
  {
    user: 'Yadu',
    image: '/assets/pics/japan.jpg'
  },
  ]

  constructor() { }

  ngOnInit() {
  }



}
