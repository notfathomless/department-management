import * as Yup from "yup";
import BookIcon from "@material-ui/icons/Book";

import { VALUE_TYPE, INPUT_TYPE, DB_FIELD_TYPE, WIDTH_TYPE } from "../types/types";
import Validation from "../validation/schemas";

const FIELDS = [
  {
    label: "Title",
    value: "",
    info: "Title of the Book",
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
  /*  {
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
    label: "Published on",
    value: new Date().toISOString(),
    info: "Year of Publication of the paper",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.DATE,
    input_type: INPUT_TYPE.DATE,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "yop",
    validation: Validation.date(),
  },
  {
    label: "Written/Edited whole Book",
    value: false,
    info: "Have you written/edited the whole book?",
    type: VALUE_TYPE.BOOLEAN,
    input_type: INPUT_TYPE.CHECKBOX,
    db_field_type: DB_FIELD_TYPE.BOOLEAN,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "writ_wh_bk",
    validation: Validation.boolean(),
  },
  {
    label: "Name of Chapters Contributed",
    value: "",
    info: "if No, then name of the chapter, you contributed (Otherwise write NA)",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.MULTILINE_TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "chaps_contrib",
    validation: Yup.string().when(["writ_wh_bk"], {
      is: true,
      then: Validation.string(true, 2, 2000),
      otherwise: Validation.string(false),
    }),
  },
  {
    label: "Name of the Proceedings",
    value: "",
    info: "Name of the Proceedings",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.MULTILINE_TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "name_proceed",
    validation: Validation.string(),
  },
  {
    label: "Volume No.",
    value: "",
    info: "Volume No. of the book",
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
    info: "Issue No. of the book",
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
    info: "Page No. of the book",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "page_no",
    validation: Validation.string(),
  },
  {
    label: "Publisher's Name",
    value: "",
    info: "Name of the Publisher ",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "name_of_publisher",
    validation: Validation.string(),
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
    label: "Indexing",
    value: "",
    info: "Indexing of the paper",
    type: VALUE_TYPE.STRING,
    db_field_type: DB_FIELD_TYPE.STRING,
    input_type: INPUT_TYPE.CUSTOM_SELECT,
    view_width: WIDTH_TYPE.MEDIUM,
    options: [
      "Scopus",
      "Elsevier",
      "PubMed",
      "Google Scholar",
      "Sci-Hub",
      "ScienceDirect",
      "Web of Science",
      "Thomson Reuters ISI",
      "Sci",
      "Esci",
      "Scie",
    ],
    db_field: "indexing",
    validation: Validation.string(),
  },
  {
    label: "Invited Paper",
    value: false,
    info: "Whether the book was an invited contribution ?",
    type: VALUE_TYPE.BOOLEAN,
    input_type: INPUT_TYPE.CHECKBOX,
    db_field_type: DB_FIELD_TYPE.BOOLEAN,
    view_width: WIDTH_TYPE.SMALL,
    db_field: "inv_contrib",
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
    validation: Yup.object().when(["inv_contrib"], {
      is: true,
      then: Validation.file(true),
      otherwise: Validation.file(false),
    }),
  },
  {
    label: "First Page of Book",
    value: {},
    info: "First Page of Book",
    type: VALUE_TYPE.OBJECT,
    input_type: INPUT_TYPE.FILE,
    db_field_type: DB_FIELD_TYPE.OBJECT,
    view_width: WIDTH_TYPE.LARGE,
    input_range: "application/pdf",
    db_field: "first_page_bk",
    validation: Validation.file(),
  },
];

const SCHEMA = {
  id: "",
  last_modified: new Date().toISOString(),
  key: "book-publications",
  diplay_name: "Book Publication",
  icon: <BookIcon />,
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
