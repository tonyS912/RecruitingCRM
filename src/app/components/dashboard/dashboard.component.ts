import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Data } from '@angular/router';

export interface PeriodicElement {
  firstName: string;
  lastName: string;
  position: number;
  job: string;
  termin: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, firstName: 'Nora', lastName: 'Johnson', job: 'Backend-Developer', termin: '03.12.2023'},
  {position: 2, firstName: 'Jessie', lastName: 'Lucas', job: 'Junior-Developer', termin: '03.12.2023'},
  {position: 3, firstName: 'Clifford', lastName: 'White', job: 'Frontend-Developer', termin: '03.12.2023'},
  {position: 4, firstName: 'Jesse', lastName: 'Barnett', job: 'Fullstack-Developer', termin: '03.12.2023'},
  {position: 5, firstName: 'Ron', lastName: 'Hansen', job: 'Backend-Developer', termin: '03.12.2023'},
  {position: 6, firstName: 'Eva', lastName: 'Burns', job: 'Fullstack-Developer', termin: '03.12.2023'},
  {position: 7, firstName: 'Jar', lastName: 'Coleman', job: 'Backend-Developer', termin: '03.12.2023'},
  {position: 8, firstName: 'Luke', lastName: 'Kuhn', job: 'Frontend-Developer', termin: '03.12.2023'},
  {position: 9, firstName: 'Terry', lastName: 'Smith', job: 'Developer', termin: '03.12.2023'},
  {position: 10, firstName: 'Calvin', lastName: 'Dunn', job: 'Fullstack-Developer', termin: '03.12.2023'},
  {position: 11, firstName: 'Kelly', lastName: 'Butler', job: 'Developer', termin: '03.12.2023'},
  {position: 12, firstName: 'Dwayne', lastName: 'Green', job: 'Frontend-Developer', termin: '03.12.2023'},
  {position: 13, firstName: 'Sylvia', lastName: 'Sutton', job: 'Developer', termin: '03.12.2023'},
  {position: 14, firstName: 'Anita', lastName: 'Webb', job: 'Developer', termin: '03.12.2023'},
  {position: 15, firstName: 'Roger', lastName: 'Stevens', job: 'Fullstack-Developer', termin: '03.12.2023'},
  {position: 16, firstName: 'Kristin', lastName: 'Olson', job: 'Frontend-Developer', termin: '03.12.2023'},
  {position: 17, firstName: 'Gladys', lastName: 'Morales', job: 'Frontend-Developer', termin: '03.12.2023'},
  {position: 18, firstName: 'Anne', lastName: 'Daniels', job: 'Backend-Developer', termin: '03.12.2023'},
  {position: 19, firstName: 'Wayne', lastName: 'Smith', job: 'Backend-Developer', termin: '03.12.2023'},
  {position: 20, firstName: 'Harry', lastName: 'Campbell', job: 'Frontend-Developer', termin: '03.12.2023'},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'job', 'termin'];
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




