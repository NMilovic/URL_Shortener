import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../../../services/core.service';

@Component({
  selector: 'app-daily-top',
  templateUrl: './daily-top.component.html',
  styleUrls: ['./daily-top.component.scss']
})
export class DailyTopComponent implements OnInit {
  public tinyUrlArray: any[] = [];

  constructor(
    private _coreService: CoreService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getDailyTop();
  }

  back(){
    this._router.navigate(['']);
  }

  getDailyTop(){
    this._coreService.getAllByDate().subscribe((response: any) => {
      this.tinyUrlArray = [...response];
    }, err => {
      alert('Error occured');
    })
  }

}
