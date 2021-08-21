import * as Yup from "yup";
import { VALUE_TYPE, INPUT_TYPE, DB_FIELD_TYPE, WIDTH_TYPE } from "../types/types";
import Validation from "../../validation/schemas";

const FIELDS = [
  {
    label: "Title",
    value: "",
    info: "Title of the Paper",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.LARGE,
    db_field: "title",
    validation: Validation.string(),
  },
  {
    label: "Author's Name",
    value: "",
    info: "Author (Only name of the faculty associated with BSH, No Co-author)",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "name_of_auth",
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
  },
  {
    label: "Published on",
    value: "",
    info: "Year of Publication of the paper",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.DATE,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "yop",
    validation: Validation.date(),
  },
  {
    label: "Conference Name",
    value: "",
    info: "Name of the Conference",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "conf_name",
    validation: Validation.string(),
  },
  {
    label: "Impact Factor" /*make this field a color value*/,
    value: "",
    info: "Impact Factor",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "impact_factor",
    validation: Validation.string(),
  },
  {
    label: "Volume No.",
    value: "",
    info: "Volume No. of the paper",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "vol_no",
    validation: Validation.string(),
  },
  {
    label: "Issue No.",
    value: "",
    info: "Issue No. of the paper",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "issue_no",
    validation: Validation.string(),
  },
  {
    label: "Page No.",
    value: "",
    info: "Page No. of the paper",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "page_no",
    validation: Validation.string(),
  },
  {
    label: "ISSN/ISBN No.",
    value: "",
    info: "ISSN/ISBN No. of the paper",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.LARGE,
    db_field: "issn_isbn",
    validation: Validation.string(),
  },
  {
    label: "Conference Website Link",
    value: "",
    info: "Website link of the Conference",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.LARGE,
    db_field: "conf_web_link",
    validation: Validation.url(),
  },
  {
    label: "Indexing",
    value: "",
    info: "Indexing of the paper",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "indexing",
    validation: Validation.string(),
  },
  {
    label: "Invited Paper",
    value: false,
    info: "Whether the paper was an invited paper ? Input Yes/No",
    type: VALUE_TYPE.BOOLEAN,
    input_type: INPUT_TYPE.CHECKBOX,
    db_field_type: DB_FIELD_TYPE.BOOLEAN,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "inv_paper",
    validation: Validation.boolean(),
  },
  {
    label: "Proof of Invitation",
    value: {},
    info: "Proof of Invitation (Upload pdf)",
    type: VALUE_TYPE.OBJECT,
    input_type: INPUT_TYPE.FILE,
    db_field_type: DB_FIELD_TYPE.OBJECT,
    view_width: WIDTH_TYPE.LARGE,
    input_range: "application/pdf",
    db_field: "prof_inv_file",
    validation: Yup.object().when(["inv_paper"], {
      is: true,
      then: Yup.object().shape({
        fname: Yup.string().required(),
        fuid: Yup.string().required(),
      }),
      otherwise: Yup.object().shape({}),
    }),
  },
  {
    label: "Students Involved",
    value: 0,
    info: "Number of students involved (if any)",
    type: VALUE_TYPE.NUMBER,
    input_type: INPUT_TYPE.NUMBER,
    db_field_type: DB_FIELD_TYPE.INT32,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "studs_involved",
    validation: Validation.number(),
  },
  {
    label: "Students who Co-authored",
    value: 0,
    info: "Name of the Students who are co-author",
    type: VALUE_TYPE.NUMBER,
    input_type: INPUT_TYPE.NUMBER,
    db_field_type: DB_FIELD_TYPE.INT32,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "studs_coa_involved",
    validation: Validation.number(),
  },
  {
    label: "First Page of Publication",
    value: {},
    info: "Attachments",
    type: VALUE_TYPE.OBJECT,
    input_type: INPUT_TYPE.FILE,
    db_field_type: DB_FIELD_TYPE.OBJECT,
    view_width: WIDTH_TYPE.LARGE,
    input_range: "application/pdf",
    db_field: "first_page_pb",
    validation: Validation.file(),
  },
  {
    label: "Financial Support from IEM",
    value: false,
    info: "Have you received any financial support from IEM group to attend this conference?",
    type: VALUE_TYPE.BOOLEAN,
    input_type: INPUT_TYPE.CHECKBOX,
    db_field_type: DB_FIELD_TYPE.BOOLEAN,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "fin_supp",
    validation: Validation.boolean(),
  },
  {
    label: "Financial Support Details",
    value: "",
    info: "Financial Support Details",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.MULTILINE_TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "fin_supp_details",
    validation: Yup.string().when(["fin_supp"], {
      is: true,
      then: Validation.string(true, 2, 500),
      otherwise: Validation.string(false),
    }),
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
