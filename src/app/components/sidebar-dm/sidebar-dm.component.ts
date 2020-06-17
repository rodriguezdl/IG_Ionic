import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-dm',
  templateUrl: './sidebar-dm.component.html',
  styleUrls: ['./sidebar-dm.component.scss'],
})
export class SidebarDmComponent implements OnInit {
  public selectedIndex = 0;
  public labels = ['John','Jerry','Elise','Elo', 'Thais']
  time_elapsed = Math.floor(Math.random());

  constructor() { }

  ngOnInit() {}

}
