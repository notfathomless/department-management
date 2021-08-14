import React, { Fragment, useState, useEffect, useRef } from "react";
import * as ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { MASTER_SCHEMA } from "../../data/schema";
import { isEmptyObject } from "../../lib/util";

function TypeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

class Cell {
  static convertColumnToNumber(column_str) {
    if (column_str.length === 1) {
      return column_str.charCodeAt(0) - 65 + 1; //starts from 1
    } else if (column_str.length === 2 && column_str.charCodeAt(0) === "A") {
      return column_str.charCodeAt(1) - 65 + 1 + 26; //starts from 1
    } else {
      return undefined;
    }
  }
  static convertNumberToColumn(column_num) {
    if (column_num >= 1 && column_num <= 26) {
      return String.fromCharCode(column_num - 1 + 65); //starts from 1
    } else if (column_num >= 27 && column_num <= 52) {
      return "A" + String.fromCharCode(column_num - 26 - 1 + 65); //starts from 1
    } else {
      return undefined;
    }
  }

  constructor(_column, _row) {
    this.row = TypeOf(_row) === "number" ? _row : undefined;
    this.column =
      TypeOf(_column) === "number"
        ? _column
        : TypeOf(_column) === "string"
        ? Cell.convertColumnToNumber(_column)
        : undefined;
  }
  getString() {
    return `${Cell.convertNumberToColumn(this.column)}${this.row}`;
  }
}

const AdminGetData = () => {
  const getCollectionData = async () => {
    return fetch("/api/admin/getUserCollection").then((response) => response.json());
  };

  const getStandardWorkBook = () => {
    const workbook = new ExcelJS.Workbook();

    workbook.creator = "Saikat Dey";
    workbook.lastModifiedBy = "Nobody";
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.lastPrinted = new Date();

    workbook.calcProperties.fullCalcOnLoad = true;
    return workbook;
  };

  const ProfileSaver = async () => {
    const collectionData = await getCollectionData();

    const workbook = getStandardWorkBook();
    const worksheet = workbook.addWorksheet("Profiles");

    const setupHeaders = () => {
      let ws_columns_hot = [
        { header: "ID's", key: "id", width: collectionData[0]["employeeID"].length + 3 },
        { header: "Profile", key: "profile", width: MASTER_SCHEMA["profile"][0].excel_col_width },
      ];
      for (let i = 1; i < MASTER_SCHEMA["profile"].length; ++i) {
        ws_columns_hot.push({
          width: MASTER_SCHEMA["profile"][i].excel_col_width,
        });
      }
      worksheet.columns = ws_columns_hot;
      worksheet.mergeCells("A1:A2");

      const mergeUptoCell = new Cell("B", 1);
      mergeUptoCell.column += MASTER_SCHEMA["profile"].length - 1;
      worksheet.mergeCells(`B1:${mergeUptoCell.getString()}`);

      worksheet.getCell("A1").alignment = { horizontal: "center", vertical: "middle" };
      worksheet.getCell("B1").alignment = { horizontal: "center", vertical: "middle" };

      const iter_cell = new Cell("B", 2);
      MASTER_SCHEMA["profile"].forEach((item, index) => {
        const cell = worksheet.getCell(iter_cell.getString());
        iter_cell.column += 1;
        cell.value = item.excel_field_name;
        cell.alignment = { horizontal: "center", vertical: "middle" };
      });
    };

    const setupDataRows = () => {
      const employeeID_cell = new Cell("A", 3); //A3
      for (let userNo = 0; userNo < collectionData.length; ++userNo) {
        worksheet.getCell(employeeID_cell.getString()).value = collectionData[userNo]["employeeID"];

        const employeeField_cell = new Cell("B", 3 + userNo);
        MASTER_SCHEMA["profile"].forEach((item, index) => {
          const cell = worksheet.getCell(employeeField_cell.getString());
          employeeField_cell.column += 1;
          const value = collectionData[userNo]["profile"][item.db_field];
          cell.value = !!value ? value : null;
        });

        employeeID_cell.row += 1;
      }
    };

    const saveAsFile = async () => {
      await workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], { type: "application/octet-stream" });
        saveAs(blob, "Profiles.xlsx");
      });
    };

    setupHeaders();
    setupDataRows();
    await saveAsFile();
  };

  const PublicationsSaver = async () => {
    const collectionData = await getCollectionData();

    const workbook = getStandardWorkBook();
    const worksheet = workbook.addWorksheet("Publications");
    const rowHeight = 30;

    const setupHeaders = () => {
      let ws_columns_hot = [
        { header: "ID's", key: "id", width: 12 },
        {
          header: "Publications",
          key: "publications",
          width: MASTER_SCHEMA["publications"]["fields"][0].excel_col_width,
        },
      ];

      for (let i = 1; i < MASTER_SCHEMA["publications"]["fields"].length; ++i) {
        ws_columns_hot.push({
          width: MASTER_SCHEMA["publications"]["fields"][i].excel_col_width,
        });
      }
      worksheet.columns = ws_columns_hot;

      const mergeUptoCell = new Cell("B", 1);
      mergeUptoCell.column += MASTER_SCHEMA["publications"]["fields"].length - 1;

      worksheet.mergeCells(`B1:${mergeUptoCell.getString()}`);
      worksheet.mergeCells("A1:A2");

      worksheet.getCell("A1").alignment = { horizontal: "center", vertical: "middle" };
      worksheet.getCell("B1").alignment = { horizontal: "center", vertical: "middle" };

      const iter_cell = new Cell("B", 2);
      MASTER_SCHEMA["publications"]["fields"].forEach((item, index) => {
        const cell = worksheet.getCell(iter_cell.getString());
        iter_cell.column += 1;
        cell.value = item.excel_field_name;
        cell.alignment = { horizontal: "center", vertical: "middle" };
      });
    };

    const setupDataRows = () => {
      const employeeID_iter_cell = new Cell("A", 3); //A3
      let rowsConsumedByPrevUsers = 0;
      let rowsConsumedByAllUsers = 0;

      for (let userNo = 0; userNo < collectionData.length; ++userNo) {
        const employeeID_cell = worksheet.getCell(employeeID_iter_cell.getString());
        employeeID_cell.value = collectionData[userNo]["employeeID"];
        employeeID_cell.alignment = { horizontal: "center", vertical: "middle" };
        worksheet.mergeCells(
          `A${3 + rowsConsumedByPrevUsers}:A${
            3 + rowsConsumedByPrevUsers + collectionData[userNo]["publications"].length - 1
          }`
        );

        for (let pubNo = 0; pubNo < collectionData[userNo]["publications"].length; ++pubNo) {
          let colStart = "B";
          MASTER_SCHEMA["publications"]["fields"].forEach((item, index) => {
            const colCode = colStart.charCodeAt(0) + index;
            const colId = String.fromCharCode(colCode);
            const cell = worksheet.getCell(`${colId}${3 + rowsConsumedByPrevUsers + pubNo}`);
            const value = collectionData[userNo]["publications"][pubNo][item.db_field];
            if (item.input_type !== "file") {
              cell.value = !!value ? value : null;
            } else {
              if (isEmptyObject(value)) {
                cell.value = "No File Uploaded";
              } else {
                cell.value = {
                  //put an env variable for this
                  text: value.fname,
                  hyperlink: "https://faculty-book.vercel.app/api/file/get/" + value.fuid,
                  tooltip: "https://faculty-book.vercel.app/api/file/get/" + value.fuid,
                };
              }
            }
            cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
          });
        }

        rowsConsumedByPrevUsers = collectionData[userNo]["publications"].length;
        rowsConsumedByAllUsers += rowsConsumedByPrevUsers;
        employeeID_iter_cell.row += rowsConsumedByPrevUsers;
      }

      for (let currentRow = 3; currentRow < 3 + rowsConsumedByAllUsers; ++currentRow) {
        worksheet.getRow(currentRow).height = rowHeight;
      }
    };

    const saveAsFile = async () => {
      await workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], { type: "application/octet-stream" });
        saveAs(blob, "Publications.xlsx");
      });
    };

    setupHeaders();
    setupDataRows();
    await saveAsFile();
  };

  return (
    <Fragment>
      <button style={{ margin: "20rem", padding: "2rem" }} onClick={ProfileSaver}>
        Download Excel Sheet for Profile
      </button>
      <button style={{ margin: "2rem", padding: "2rem" }} onClick={PublicationsSaver}>
        Download Excel Sheet for Publications
      </button>
    </Fragment>
  );
};

export default AdminGetData;
