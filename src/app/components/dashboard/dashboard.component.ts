import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Data } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  gewicht: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', gewicht: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', gewicht: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', gewicht: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', gewicht: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', gewicht: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', gewicht: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', gewicht: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', gewicht: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', gewicht: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', gewicht: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', gewicht: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', gewicht: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', gewicht: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', gewicht: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', gewicht: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', gewicht: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', gewicht: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', gewicht: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', gewicht: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', gewicht: 40.078, symbol: 'Ca'},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'gewicht', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.sort = new MatSort();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  clickedRows = new Set<PeriodicElement>();
}




