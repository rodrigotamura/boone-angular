import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = `<strong>Boone</strong>Car <i class="fa fa-wrench"></i>`

  constructor() { }

  ngOnInit() {
  }

}
