import { TutorialService } from '../tutorial.service';
import { Tutorial } from '../tutorial';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.css']
})
export class CreateTutorialComponent implements OnInit {

  tutorial: Tutorial = new Tutorial();
  submitted = false;

  constructor(private tutorialService: TutorialService,
              private router: Router) { }

  ngOnInit() {
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }

  save() {
    this.tutorialService
    .createTutorial(this.tutorial).subscribe(data => {
      console.log(data);
      this.tutorial = new Tutorial();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/tutorials']);
  }
}
