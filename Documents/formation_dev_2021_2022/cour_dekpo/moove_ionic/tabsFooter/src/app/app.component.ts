import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/side-menu/Inbox', icon: 'mail' },
    { title: 'Homekbox', url: '/tabs/tab1', icon: 'home' },
    { title: 'Outbox', url: '/side-menu/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/side-menu/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/side-menu/Archived', icon: 'archive' },
    { title: 'Trash', url: '/side-menu/Trash', icon: 'trash' },
    { title: 'Spam', url: '/side-menu/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor() {}
}
