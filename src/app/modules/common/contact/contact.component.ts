import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../../services/github.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  user: any;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUser('andrewjbateman').subscribe((user) => {
      this.user = user;
    });
  }
}
