import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {
  public sideMenu: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sideMenu = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
