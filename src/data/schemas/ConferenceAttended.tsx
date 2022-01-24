import * as Yup from "yup";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

import {
  VALUE_TYPE,
  INPUT_TYPE,
  DB_FIELD_TYPE,
  WIDTH_TYPE,
} from "../types/types";
import * as Validation from "../validation/schemas";
import { FieldType, SchemaType } from "./types";

const FIELDS: FieldType[] = [
  {
    label: "Conference Title",
    value: "",
    info: "Title of the Conference",
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
    label: "Your Role",
    value: "",
    info: "Your Role (Presenter, Attendee etc.)",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.CUSTOM_SELECT,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["Presenter", "Attendee"],
    db_field: "role",
    validation: Validation.string(),
  },
  {
    label: "Conference Start Date",
    value: new Date().toISOString(),
    info: "Date of Conference (From)",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.DATE,
    input_type: INPUT_TYPE.DATE,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "event_start_date",
    validation: Validation.date(),
  },
  {
    label: "Conference End Date",
    value: new Date().toISOString(),
    info: "Date of Conference (End)",
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

const SCHEMA: SchemaType = {
  id: "",
  last_modified: new Date().toISOString(),
  diplay_name: "Conference Attended",
  key: "conference-attended",
  icon: <VideoCallOutlinedIcon />,
  fields: FIELDS,
  display_title: "title",
  display_date: "event_start_date",
  isCentral: false,
};

function getValidationSchema() {
  let validationSchema = {};
  FIELDS.forEach((field) => {
    validationSchema[field.db_field] = field.validation;
  });
  return Yup.object().shape(validationSchema);
}

export { FIELDS, SCHEMA, getValidationSchema };