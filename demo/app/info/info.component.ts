import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [HttpService]
})
export class InfoComponent implements OnInit {

  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit() {
  }

  onContine() {
    this.router.navigate(['Login']);
  }

  onSubmit(grund: string, firma: string, name: string) {
    this.httpService.sendDate({grund: grund, firma: firma, name: name})
      .subscribe(
        data => console.log(data),
        error => console.log(error),
      );

  }

}
