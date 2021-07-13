import { TutorialDetailsComponent } from '../tutorial-details/tutorial-details.component';
import { Observable } from 'rxjs';
import { TutorialService } from '../tutorial.service';
import { Tutorial } from '../tutorial';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;

  constructor(private tutorialService: TutorialService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tutorialService.getTutorialsList()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => console.log(error));
  }

  deleteTutorial(id: number) {
    this.tutorialService.deleteTutorial(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  tutorialDetails(id: number) {
    this.router.navigate(['detailsTuto', id]);
  }

  updateTutorial(id: number) {
    this.router.navigate(['updateTuto', id]);
  }

  searchByTitle(title: string) {
    console.log(title);
    this.tutorialService.findByTitle(title)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchByPublished(published: boolean) {
    // console.log(emailId);
    this.tutorialService.findByPublished(published)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
