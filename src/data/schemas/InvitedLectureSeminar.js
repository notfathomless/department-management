import * as Yup from "yup";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";

import { VALUE_TYPE, INPUT_TYPE, DB_FIELD_TYPE, WIDTH_TYPE } from "../types/types";
import Validation from "../validation/schemas";

const FIELDS = [
  {
    label: "Event Title",
    value: "",
    info: "Title of the Event",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.LARGE,
    db_field: "event_title",
    validation: Validation.string(),
  },
  {
    label: "Entry Date",
    value: new Date().toISOString(),
    info: "Date of Entry",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.DATE,
    input_type: INPUT_TYPE.DATE,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "entry_date",
    validation: Validation.date(),
  },
  /*  {
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
  }, */
  {
    label: "Type of Event",
    value: "",
    info: "Type of Event",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.CUSTOM_SELECT,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["Seminar", "Webinar"],
    db_field: "event_type",
    validation: Validation.string(),
  },
  {
    label: "Lecture Title",
    value: "",
    info: "Title of Your Lecture",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.LARGE,
    db_field: "lecture_title",
    validation: Validation.string(),
  },
  {
    label: "Organizing Institute",
    value: "",
    info: "Organizing Institute",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "org_inst",
    validation: Validation.string(),
  },
  {
    label: "Event Start Date",
    value: new Date().toISOString(),
    info: "Date of Event (From)",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.DATE,
    input_type: INPUT_TYPE.DATE,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "event_start_date",
    validation: Validation.date(),
  },
  {
    label: "Event End Date",
    value: new Date().toISOString(),
    info: "Date of Event (End)",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.DATE,
    input_type: INPUT_TYPE.DATE,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "event_end_date",
    validation: Validation.date(),
  },
  {
    label: "Coverage",
    value: "",
    info: "National/ International",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["National", "International"],
    db_field: "nat_inter_imp",
    validation: Validation.option(),
  },
  {
    label: "Participants",
    value: 0,
    info: "Approximate Number of Participants",
    type: VALUE_TYPE.NUMBER,
    input_type: INPUT_TYPE.NUMBER,
    db_field_type: DB_FIELD_TYPE.INT32,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "participants",
    validation: Validation.number(),
  },
  {
    label: "Proof",
    value: {},
    info: "Proof of seminar organized",
    type: VALUE_TYPE.OBJECT,
    input_type: INPUT_TYPE.FILE,
    db_field_type: DB_FIELD_TYPE.OBJECT,
    view_width: WIDTH_TYPE.LARGE,
    input_range: "application/pdf",
    db_field: "proof",
    validation: Validation.file(),
  },
];

const SCHEMA = {
  id: "",
  last_modified: new Date().toISOString(),
  diplay_name: "Invited Lecture Seminar",
  key: "invited-lecture",
  icon: <AddIcCallIcon />,
  fields: FIELDS,
};

const getValidationSchema = () => {
  let validationSchema = {};
  FIELDS.forEach((field) => {
    validationSchema[field.db_field] = field.validation;
  });
  return Yup.object().shape(validationSchema);
};

export { FIELDS, SCHEMA, getValidationSchema };