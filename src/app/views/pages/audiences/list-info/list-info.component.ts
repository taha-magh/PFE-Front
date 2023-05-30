
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ExcelAssociationService } from '../../utils/excel-association.service';
@Component({
  selector: "kt-list-audiences",
  templateUrl: "./list-info.component.html",
  styleUrls: ["./list-info.component.scss"],
})
export class ListInfoComponent implements OnInit {
  assoc: any;
  data: excelData[] = [];
  columns: any[];
  footerData: any[][] = [];
  // ============================================
  // Presentation de datasource
  // ============================================
  displayedColumns: string[] = [
    "num",
    "nom",
  
  "typeAffaire",
  "dateDebut",
  
   "actions",
  ];
  // ============================================
  // Declarations
  // ============================================
  dataSource = new MatTableDataSource<any>();
  isLoadingResults = true;
  isLoading = true;

  // ============================================
  // Controles pagination
  // ============================================
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  // ============================================
  // Constructeur
  // ============================================
  constructor(

    private translate: TranslateService,
    private router: Router,

    private datePipe: DatePipe,
    private excelService: ExcelAssociationService,
  ) {
    this.data = [{
      "num": "1",
      "nom": "nom affaire 1 ",
      "dateDebut":"3/5/22",
      "demandresse": "",
      "tribunal": "Tech ",
      "typeAffaire": "",
     

      
    },
    {
      "num":"2",
      "nom": "nom affaire 2",
      "dateDebut":"3/5/22",
      "demandresse": "",
      "tribunal": "Tribunal ",
      "typeAffaire": "Indemnisation",
      
      
    },
    {
      "num": "3",
      "nom": "nom affaire 3",
      "dateDebut":"3/5/22",
      "demandresse": "",
      "tribunal": "Tech ",
      "typeAffaire": "Annulation",
     
    },
    {
      "num": "4",
      "nom": "nom affaire 4",
      "dateDebut":"3/5/22",
      "demandresse": "",
      "tribunal": "Tribunal ",
      "typeAffaire": "Annulation",
	},
     
    {
      "num": "5",
      "nom": "nom affaire 5",
      "dateDebut":"3/5/22",
      "demandresse": "",
      "tribunal": "Tech ",
      "typeAffaire": "Annulation",
      
    }
    ]


  }

  ngOnInit() {
    this.columns = ["num",
      "nom",
      "tribunal",
      "typeAffaire",
      "dateDebut",
      "demandresse",
      ];
    this.dataSource = new MatTableDataSource(this.data);

  }
  consulterDetail(): void {
		this.router.navigate(["pages/audiences/detail-infos"]);

	}

  // ============================================
  // Filter de recherche
  // ============================================
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // ============================================
  // Methode de suppression des associations
  // ============================================


  // ============================================
  // Methode d'insertion des associations
  // ============================================
  addAssociation(): void {
    this.router.navigate(["pages/audiences/edit-info"]);
  }
  add(): void {
    this.router.navigate(["pages/audiences/saisir-info"]);
  }

  

  deleteAssociation(id: number): void {
    Swal.fire({
      title: 'Voulez vous supprimer cet enregistrement ?',
      icon: 'question',
      iconHtml: '?',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: this.translate.instant("PAGES.GENERAL.MSG_DEL_CONFIRMED"),
          showConfirmButton: false,
          timer: 1500
        })


      }
    })
  }

  // ============================================
  // Export data as excel
  // ============================================
  exportTable() {
    //this.fileService.exportToExcel("exportData", this.translate.instant("PAGES.ASSOCIATION.TITRE_INDEX"));
    this.excelService.exportAsExcelFile('Liste audiences', '', this.columns, this.data, this.footerData, 'Liste-audiences', this.translate.instant("PAGES.AFFAIRE.TITRE_INDEX"))
  }
  createDataJson(i: number): excelData {
    return {
      num: this.assoc[i].num,
      nom: this.assoc[i].nom,
      dateDebut: this.assoc[i].dateDebut,
      demandresse: this.assoc[i].demandresse,
      tribunal: this.assoc[i].tribunal,
      typeAffaire: this.assoc[i].typeAffaire,
     
     
    };
  }
}

export interface excelData {
  num: string;
  nom: string;
  dateDebut:string;
  demandresse:string;
  tribunal: string;
  typeAffaire: string;
 
}
