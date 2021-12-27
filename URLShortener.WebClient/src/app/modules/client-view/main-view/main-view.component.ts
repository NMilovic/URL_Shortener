import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../../../services/core.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  public longUrlInput: string = '';
  public shortUrl: string = '';

  constructor(
    private _coreService: CoreService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  openAdminPanel(){
    this._router.navigate(['admin']);
  };

  shorten(){
    this._coreService.shorten(this.longUrlInput).subscribe((response: any) => {
      if(response){
        this.shortUrl = response.tinyUrl;
      }
    }, err => {
      alert('Error occured');
    })
  }

  redirect(){
    window.open(this.shortUrl, '_blank');
  }
}
