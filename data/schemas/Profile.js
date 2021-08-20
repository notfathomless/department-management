import * as Yup from "yup";
import { VALUE_TYPE, INPUT_TYPE, DB_FIELD_TYPE, WIDTH_TYPE } from "../types/types";
import Validation from "../../validation/schemas";

const FIELDS = [
  {
    label: "Full Name",
    value: "",
    info: "Your full name",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "name",
    validation: Validation.string(),
  },
  {
    label: "Father's Name",
    value: "",
    info: "Your Father's name",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "f_name",
    validation: Validation.string(),
  },
  {
    label: "Mother's Name",
    value: "",
    info: "Your Mother's name",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "m_name",
    validation: Validation.string(),
  },
  {
    label: "Permanent Address",
    value: "",
    info: "Your permanent address  (Full Postal Address)",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "p_address",
    validation: Validation.string(),
  },
  {
    label: "Local Address",
    value: "",
    info: "Your local address",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "l_address",
    validation: Validation.string(),
  },
  {
    label: "Official Email",
    value: "",
    info: "Your official email of IEM domain",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.EMAIL,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "oficial_email",
    validation: Validation.email(),
  },
  {
    label: "Personal Email",
    value: "",
    info: "Your personal email",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.EMAIL,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "personal_email",
    validation: Validation.email(),
  },
  {
    label: "Blood Group",
    value: "",
    info: "Your blood group",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    db_field: "bld_grp",
    validation: Validation.option(),
  },
  {
    label: "Mobile Number",
    value: "",
    info: "Your mobile number for reveiving SMS",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "mobile_no",
    validation: Validation.string(true, 10, 18),
  },
  {
    label: "Landline Number",
    value: "",
    info: "Your landline number",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "landline_no",
    validation: Validation.string(true, 8, 16),
  },
  {
    label: "Date of Birth",
    value: "",
    info: "Your date of birth",
    type: VALUE_TYPE.DATE,
    input_type: INPUT_TYPE.DATE,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "dob",
    validation: Validation.date(),
  },
  {
    label: "Gender",
    value: "",
    info: "Your gender",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["Male", "Female"],
    db_field: "gender",
    validation: Validation.option(),
  },
  {
    label: "Department",
    value: "",
    info: "Your Department",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["C.S.E.", "MECHANICAL", "ELECTRICAL", "BIOLOGY", "CHEMISTRY.", "PHYSICS"],
    db_field: "department",
    validation: Validation.option(),
  },
  {
    label: "Designation",
    value: "",
    info: "Your Designation",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["H.O.D.", "Asst. Prof.", "Prof"],
    db_field: "designation",
    validation: Validation.option(),
  },
  {
    label: "Date of Joining",
    value: "",
    info: "Date of Joining(at the Organisation)",
    type: VALUE_TYPE.DATE,
    input_type: INPUT_TYPE.DATE,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    db_field: "dojioning",
    validation: Validation.date(),
  },
  /*     {
      label: "Religion",
      value: "",
      info: "",
      excel_field_name: "Religion",
      excel_col_width: 20,
      type: "string",
      input_type: "select",
      options: ["Hinduisim", "Christian", "Bhudhisim", "Muslim"],
      
      db_field: "religion",
      validation: Yup.string().required("Required!"),
    }, */
  /*     {
      label: "Caste",
      value: "",
      info: "",
      excel_field_name: "Caste",
      excel_col_width: 20,
      type: "string",
      input_type: "select",
      options: ["General", "S.C.", "S.T.", "O.B.C."],
      
      db_field: "caste",
      validation: Yup.string().required("Required!"),
    }, */
  {
    label: "Location",
    value: "",
    info: "Location (in Campus)",
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    db_field_type: DB_FIELD_TYPE.STRING,
    view_width: WIDTH_TYPE.MEDIUM,
    options: ["Management", "Gurukul", "Ashram"],
    db_field: "loc_in_campus",
    validation: Validation.option(),
  },
];

const SCHEMA = FIELDS;

const getValidationSchema = () => {
  let validationSchema = {};
  FIELDS.forEach((field) => {
    validationSchema[field.db_field] = field.validation;
  });
  return Yup.object().shape(validationSchema);
};

const export_object = { FIELDS, SCHEMA, getValidationSchema };

export default export_object;
