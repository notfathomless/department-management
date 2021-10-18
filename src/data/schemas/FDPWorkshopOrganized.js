import * as Yup from "yup";
import BuildIcon from "@mui/icons-material/Build";

import {
  VALUE_TYPE,
  INPUT_TYPE,
  DB_FIELD_TYPE,
  WIDTH_TYPE,
} from "../types/types";
import Validation from "../validation/schemas";

const FIELDS = [
  {
    label: "Type of the Event",
    value: "",
    info: "Type of the Event (FDP or workshop)",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.CUSTOM_SELECT,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["FDP", "Workshop"],
    db_field: "event_type",
    validation: Validation.option(),
  },
  {
    label: "FDP/Workshop Title",
    value: "",
    info: "Title of the FDP or Workshop",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.LARGE,
    db_field: "title",
    validation: Validation.string(),
  },
  {
    label: "Speaker Name",
    value: "",
    info: "Name of the Speaker",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "speaker_name",
    validation: Validation.string(),
  },
  {
    label: "Speaker's Affiliation",
    value: "",
    info: "Affiliation of the Speaker",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "speaker_affiliation",
    validation: Validation.string(),
  },
  {
    label: "Speaker's Institute",
    value: "",
    info: "Institute of the Speaker",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "speaker_inst",
    validation: Validation.string(),
  },
  {
    label: "Type of the Event",
    value: "",
    info: "Type of the Event (FDP or workshop)",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.CUSTOM_SELECT,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["Course Instructor", "Organiser", "Convenor"],
    db_field: "role",
    validation: Validation.option(),
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
    db_field: "coverage",
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
  diplay_name: "FDP-Workshop Oranized",
  key: "fdp-workshop-organized",
  icon: <BuildIcon />,
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
