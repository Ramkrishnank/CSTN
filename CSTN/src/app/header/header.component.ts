import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.Native
  
})
export class HeaderComponent implements OnInit {

  
  navItems = [
    { name: 'Map', URL: '/map' },
    { name: 'About', URL: 'about.html' },
    { name: 'Help', URL: 'help.html' },
    { name: 'FAQ', URL: 'FAQ.html' },
    { name: 'Contact', URL: 'Contact.html' },
    { name: 'What&#39;s New', URL: 'WhatsNew.html' },
    { name: 'Test', URL: 'index.html' }
];
  constructor() {
    
  }

  ngOnInit() {

  }

  onSubmit(header:any) {

  }
}

export class Menu {
  name: string;
  URL: string;
}
