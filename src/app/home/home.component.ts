import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tableData = [];
  constructor(public httpserviceService: HttpserviceService) { }
  public dataSource;

  ngOnInit() {
    this.httpserviceService.getData().subscribe(
      output => {
        this.dataSource = output;
      },
      err => {
      }
    );
  }
}
