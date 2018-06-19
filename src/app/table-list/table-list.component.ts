import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements AfterViewInit, OnInit {
  @Input() dataSource;
  public data;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = [];
  constructor() { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.data = this.dataSource;
    const obj = this.data[0];
    this.displayedColumns = Object.keys(obj);
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase(); // Remove whitespace
    this.dataSource.filter = filterValue;
  }

  printValue(val, column) {
    if (column === 'url') {
      return '<a href="' + val + '" target="_blank">' + val + '</a>';
    } else if (column === 'thumbnailUrl') {
      return '<img src="' + val + '" style="height:20px">';
    } else {
      return val;
    }
  }
}
