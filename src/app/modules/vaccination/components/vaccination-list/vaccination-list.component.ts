import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VaccinationApiService } from '../../services/vaccination-api.service';

@Component({
  selector: 'app-vaccination-list',
  templateUrl: './vaccination-list.component.html',
  styleUrls: ['./vaccination-list.component.css']
})

export class VaccinationListComponent implements AfterViewInit {
  vaccinationData: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['applicationDate', 'name', 'dose', 'batch', 'fabricator', 'actions'];

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;

  constructor(private vaccinationApiService: VaccinationApiService) { }

  ngOnInit(): void {
    // Chame o serviço para obter os dados da API
    this.vaccinationApiService.getVaccinationData().subscribe(
      (data) => {
        this.vaccinationData = new MatTableDataSource(data); // Armazene os dados recebidos na variável local
      },
      (error) => {
        console.error('Erro ao obter dados de vacinação:', error);
      }
    );
  }

  ngAfterViewInit() {
    this.vaccinationData.paginator = this.paginator;
    this.vaccinationData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.vaccinationData.filter = filterValue.trim().toLowerCase();

    if (this.vaccinationData.paginator) {
      this.vaccinationData.paginator.firstPage();
    }
  }
}
