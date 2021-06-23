import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isTimer: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.isTimer = !this.isTimer;
  }
}
