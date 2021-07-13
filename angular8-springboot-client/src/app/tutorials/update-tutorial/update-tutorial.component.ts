import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-update-tutorial',
  templateUrl: './update-tutorial.component.html',
  styleUrls: ['./update-tutorial.component.css']
})
export class UpdateTutorialComponent implements OnInit {

  id: number;
  tutorial: Tutorial;

  constructor(private route: ActivatedRoute, private router: Router, private tutorialService: TutorialService) { }

  ngOnInit() {
    this.tutorial = new Tutorial();

    this.id = this.route.snapshot.params.id;
    this.tutorialService.getTutorial(this.id)
      .subscribe(data => {
        console.log(data);
        this.tutorial = data;
      }, error => console.log(error));
  }

  updateTutorial() {
    this.tutorialService.updateTutorial(this.id, this.tutorial)
      .subscribe(data => {
        console.log(data);
        this.tutorial = new Tutorial();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateTutorial();
  }

  gotoList() {
    this.router.navigate(['/tutorials']);
  }
}
