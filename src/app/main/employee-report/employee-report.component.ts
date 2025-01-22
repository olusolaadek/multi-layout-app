import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrl: './employee-report.component.css',
})
export class EmployeeReportComponent {
  rows: { name: string; age: number; city: string }[] = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'Los Angeles' },
    { name: 'Jack', age: 28, city: 'Chicago' },
  ];

  allColumns = [
    { name: 'Name', prop: 'name', selected: true },
    { name: 'Age', prop: 'age', selected: true },
    { name: 'City', prop: 'city', selected: true },
  ];

  visibleColumns = this.allColumns.filter((col) => col.selected);

  updateVisibleColumns() {
    this.visibleColumns = this.allColumns.filter((col) => col.selected);
  }

  exportToCSV() {
    const headers = this.visibleColumns.map((col) => col.name).join(',');
    const data = this.rows
      .map((row) =>
        this.visibleColumns
          .map((col) => row[col.prop as keyof typeof row])
          .join(',')
      )
      .join('\n');
    const csv = `${headers}\n${data}`;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'datatable_export.csv');
  }
}
