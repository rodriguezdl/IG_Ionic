import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {
  public likes = [{
    user:'Daniel',
    image: 'assets/pics/index.jpg'
  },
  {
    user: 'Darren',
    image: 'assets/pics/index.jpg'
  },
  {
    user: 'Yadu',
    image: 'assets/pics/index.jpg'
  },
]

  constructor() { }

  ngOnInit() {
  }

}
