import { Tutorial } from '../tutorial';
import { Component, OnInit, Input } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { TutorialListComponent } from '../tutorial-list/tutorial-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  id: number;
  tutorial: Tutorial;

  constructor(private route: ActivatedRoute, private router: Router,
              private tutorialService: TutorialService) { }

  ngOnInit() {
    this.tutorial = new Tutorial();

    this.id = this.route.snapshot.params.id;

    this.tutorialService.getTutorial(this.id)
      .subscribe(data => {
        console.log(data);
        this.tutorial = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['tutorials']);
  }
}
