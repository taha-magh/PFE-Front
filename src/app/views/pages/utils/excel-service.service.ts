import { Injectable } from '@angular/core';
import * as fs from 'file-saver';
import { Workbook } from 'exceljs';
import * as logo from './logo.js'
import { DatePipe } from '@angular/common';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {

  constructor(private datePipe: DatePipe) { }

  public exportAsExcelFile(
    reportHeading: string,
    reportSubHeading: string,
    headersArray: any[],
    json: any[],
    footerData: any,
    excelFileName: string,
    sheetName: string
  ) {
    const header = headersArray;
    const data = json;

    /* Create workbook and worksheet */
    const workbook = new Workbook();
    /* Set workbook properties */
    workbook.creator = 'Brome';
    workbook.lastModifiedBy = 'Brome';
    workbook.created = new Date();
    workbook.modified = new Date();
    const worksheet = workbook.addWorksheet(sheetName);
    /* file orientation */
    worksheet.views = [{ rightToLeft: true }]
    /* Add header row */
    worksheet.addRow([]);

    worksheet.mergeCells('D2:E2');
    worksheet.getCell('E2').value = reportHeading;
    worksheet.getCell('E2').alignment = { horizontal: 'center' };
    worksheet.getCell('E2').font = { size: 12, bold: true };
    worksheet.getCell('E2').fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'aeb6e8c5' },
    };
    worksheet.getCell('E2').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    worksheet.addRow([]);
    //let subTitleRow = worksheet.addRow(['date: ' + this.datePipe.transform(new Date(), 'medium' ) ] );

    if (reportHeading !== '') {
      worksheet.mergeCells('D3:E3');
      worksheet.getCell('E3').value = 'تاريخ : ' + this.datePipe.transform(new Date(), 'dd-MM-yyyy');
      worksheet.getCell('E3').alignment = { horizontal: 'center' };
      worksheet.getCell('E3').font = { size: 12, bold: true };
      worksheet.getCell('E3').fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'aedde9el' },
      };
      worksheet.getCell('E3').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
      worksheet.addRow([]);
    }

    //Add Image
    let myLogoImage = workbook.addImage({
      base64: logo.imgBase64,
      extension: 'png',
    });
    // worksheet.addRow([]);
    // worksheet.mergeCells('E2:');
    worksheet.addImage(myLogoImage, {
      tl: { col: 0.6, row: 0.4 },
      ext: { width: 50, height: 80 }
    });
    // worksheet.mergeCells('A1:D2');
    worksheet.addRow([]);
    worksheet.addRow([]);
    /* Add header row */
    const headerRow = worksheet.addRow(header);

    // Cell style : Fill and border
    headerRow.eachCell((cell, index) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffb0eaf6' },
      };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      cell.font = { size: 12, bold: true };

      worksheet.getColumn(index).width = header[index - 1].length < 20 ? 20 : header[index - 1].lenght;
    });

    // Add Data and Conditional Formatting
    data.forEach(d => {
      let row = worksheet.addRow(Object.values(d));
      row.alignment = { vertical: 'middle', horizontal: 'right'};
      let qty = row.getCell(1);
      let color = 'aefaf5b9';
      if (+qty.value < 500) {
        color = 'aefdb772'
      }

      qty.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: color }
      }
      row.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    }

    );
    worksheet.getColumn(1).alignment = { vertical: 'middle', horizontal: 'right' };
    worksheet.getColumn(2).width = 50;
    worksheet.getColumn(2).alignment = { vertical: 'middle', horizontal: 'right', wrapText: true };
    worksheet.getColumn(3).alignment = {  vertical: 'middle', horizontal: 'right' };
    worksheet.addRow([]);

    // Get all collumns from JSON
    /*
    let columnsArray: any[];
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        columnsArray = Object.keys(json[key]);
      }
    }
    */

    // Add data  and conditional formatting
    /*
    data.forEach((element: any) => {
      const eachRow = [];
      columnsArray.forEach((column) => {
        eachRow.push(element[column]);
      });

      if (element.isDeleted === 'y') {
        const deleteRow = worksheet.addRow(eachRow);
        deleteRow.eachCell((cell) => {
          cell.font = { name: 'Calibri', family: 4, size: 11, bold: false, strike: true };
        });
      } else {
        worksheet.addRow(eachRow);
      }
    });

    worksheet.addRow([]);
    if (footerData != null) {
      footerData.forEach((element: any) => {
        const eachRow = [];
        element.forEach((val: any) => {
          eachRow.push(val);
        });

        const footerRow = worksheet.addRow(eachRow);

        footerRow.eachCell((cell) => {
          cell.font = { bold: true };
        });
      });
    }
    */

    //Footer Row
    let footerRow = worksheet.addRow(['هذا الجدول تم إنشاءه من طرف نظام المعلومات']);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'aed4d2c9' },
    };
    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    footerRow.getCell(1).alignment = { horizontal: 'center' }
    //Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:G${footerRow.number}`);

    /* Save Excel File */
    workbook.xlsx.writeBuffer().then((data: ArrayBuffer) => {
      const blob = new Blob([data], { type: EXCEL_TYPE });
      let now = new Date();
      let timeSpan = this.datePipe.transform(now, "ddMMyyyyHHmmss");
      fs.saveAs(blob, excelFileName + '-' + timeSpan + EXCEL_EXTENSION);
    })
  }

}
