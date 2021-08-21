import * as Yup from "yup";
import { VALUE_TYPE, INPUT_TYPE, DB_FIELD_TYPE, WIDTH_TYPE } from "../types/types";
import Validation from "../../validation/schemas";

const FIELDS = [
  {
    label: "Project Name",
    value: "",
    info: "Title or name of the Project",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.LARGE,
    db_field: "title",
    validation: Validation.string(),
  },
  {
    label: "Faculty Name",
    value: "",
    info: "Name of the Faculty",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "fac_name",
    validation: Validation.string(),
  },
  {
    label: "Role Of Faculty",
    value: "",
    info: "Role Of Faculty",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["Principal Investigator (PI)", "Co-Principal Investigator (Co-PI)"],
    db_field: "fac_role",
    validation: Validation.option(),
  },
  {
    label: "Department",
    value: "",
    info: "Department",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["Department of Basic Science and Humanities"],
    db_field: "department",
    validation: Validation.option(),
  },
  {
    label: "Co-Principal Investigator Name",
    value: "",
    info: "Name of the Faculty",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "co_pi_name",
    validation: Validation.string(false),
  },
  {
    label: "Date of Sanction",
    value: "",
    info: "Date of Sanction",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.DATE,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "sanc_date",
    validation: Validation.date(),
  },
  {
    label: "Date of Completion",
    value: "",
    info: "Date of publication",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.DATE,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "comp_date",
    validation: Validation.date(false),
  },
  {
    label: "Amount Sanctioned (in INR)",
    value: 0,
    info: "Amount Sanctioned (in INR)",
    type: VALUE_TYPE.NUMBER,
    input_type: INPUT_TYPE.NUMBER,
    db_field_type: DB_FIELD_TYPE.INT32,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "amount_sanc",
    validation: Validation.number(),
  },
  {
    label: "Duration of the project",
    value: "",
    info: "Duration of the project",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "proj_duration",
    validation: Validation.string(),
  },
  {
    label: "Name of the Funding Agency",
    value: "",
    info: "Name of the Funding Agency",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "fund_agency_name",
    validation: Validation.string(),
  },
  {
    label: "Type",
    value: "",
    info: "Type",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["Government", "Non-Government", "International"],
    db_field: "type",
    validation: Validation.option(),
  },
  {
    label: "Utilization certificate submitted?",
    value: false,
    info: "Utilization certificate submitted?",
    type: VALUE_TYPE.BOOLEAN,
    input_type: INPUT_TYPE.CHECKBOX,
    db_field_type: DB_FIELD_TYPE.BOOLEAN,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "util_cert",
    validation: Validation.boolean(),
  },
  {
    label: "Proof of Completion",
    value: {},
    info: "Proof of Completion",
    type: VALUE_TYPE.OBJECT,
    input_type: INPUT_TYPE.FILE,
    db_field_type: DB_FIELD_TYPE.OBJECT,
    view_width: WIDTH_TYPE.LARGE,
    input_range: "application/pdf",
    db_field: "proof_of_comp",
    validation: Validation.file(false),
  },
];

const SCHEMA = {
  id: "",
  last_modified: new Date(2000, 0, 1, 0, 0, 0, 0),
  fields: FIELDS,
};

const getValidationSchema = () => {
  let validationSchema = {};
  FIELDS.forEach((field) => {
    validationSchema[field.db_field] = field.validation;
  });
  return Yup.object().shape(validationSchema);
};

const export_object = { FIELDS, SCHEMA, getValidationSchema };

export default export_object;
