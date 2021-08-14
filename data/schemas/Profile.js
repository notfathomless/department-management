import * as Yup from "yup";
import { VALUE_TYPE, INPUT_TYPE, DB_FIELD_TYPE } from "../types/types";
import {
  NAME_VALIDATION_SCHEMA,
  ADDRESS_VALIDATION_SCHEMA,
  EMAIL_VALIDATION_SCHEMA,
  OPTIONS_VALIDATION_SCHEMA,
  MOBILE_VALIDATION_SCHEMA,
  LANDLINE_VALIDATION_SCHEMA,
  DATE_VALIDATION_SCHEMA,
  FILE_VALIDATION_SCHEMA,
  FILE_REQUIRED_VALIDATION_SCHEMA,
  STRING_REQUIRED_VALIDATION_SCHEMA,
  BOOLEAN_REQUIRED_VALIDATION_SCHEMA,
} from "../../validation/schemas";

const PROFILE_FIELDS = [
  {
    label: "Full Name",
    value: "",
    info: "Your full name",
    excel_field_name: "Full Name",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "name",
    validation: NAME_VALIDATION_SCHEMA(),
  },
  {
    label: "Father's Name",
    value: "",
    info: "Your Father's name",
    excel_field_name: "Father's Name",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "f_name",
    validation: NAME_VALIDATION_SCHEMA(),
  },
  {
    label: "Mother's Name",
    value: "",
    info: "Your Mother's name",
    excel_field_name: "Mother's Name",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "m_name",
    validation: NAME_VALIDATION_SCHEMA(),
  },
  {
    label: "Permanent Address (Full Postal Address)",
    value: "",
    info: "Your permanent address",
    excel_field_name: "Permanent Address",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "p_address",
    validation: ADDRESS_VALIDATION_SCHEMA(),
  },
  {
    label: "Local Address",
    value: "",
    info: "Your local address",
    excel_field_name: "Local Address",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "l_address",
    validation: ADDRESS_VALIDATION_SCHEMA(),
  },
  {
    label: "Official Email of IEM domain",
    value: "",
    info: "Your official email adress",
    excel_field_name: "Official Email",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.EMAIL,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "oficial_email",
    validation: EMAIL_VALIDATION_SCHEMA(),
  },
  {
    label: "Personal Email",
    value: "",
    info: "Your personal email",
    excel_field_name: "Personal Email",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.EMAIL,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "personal_email",
    validation: EMAIL_VALIDATION_SCHEMA(),
  },
  {
    label: "Blood Group",
    value: "",
    info: "Your blood group",
    excel_field_name: "Blood Group",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    db_field_type: DB_FIELD_TYPE.STRING,
    options: ["A", "B", "AB+", "AB-", "O+", "O-"],
    db_field: "bld_grp",
    validation: OPTIONS_VALIDATION_SCHEMA(),
  },
  {
    label: "Mobile Number(for SMS)",
    value: "",
    info: "Your mobile number for reveiving SMS",
    excel_field_name: "Mobile Number",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "mobile_no",
    validation: MOBILE_VALIDATION_SCHEMA(),
  },
  {
    label: "Landline Number.",
    value: "",
    info: "Your landline number",
    excel_field_name: "Land. Number",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.TEXT,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "landline_no",
    validation: LANDLINE_VALIDATION_SCHEMA(),
  },
  {
    label: "Date of Birth",
    value: "",
    info: "Your date of birth",
    excel_field_name: "D.O.B.",
    excel_col_width: 20,
    type: VALUE_TYPE.DATE,
    input_type: INPUT_TYPE.DATE,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "dob",
    validation: DATE_VALIDATION_SCHEMA(),
  },
  {
    label: "Gender",
    value: "",
    info: "Your gender",
    excel_field_name: "Gender",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    db_field_type: DB_FIELD_TYPE.STRING,
    options: ["Male", "Female"],
    db_field: "gender",
    validation: OPTIONS_VALIDATION_SCHEMA(),
  },
  {
    label: "Department",
    value: "",
    info: "",
    excel_field_name: "Department",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    db_field_type: DB_FIELD_TYPE.STRING,
    options: ["C.S.E.", "MECH.", "ELEC.", "BIO", "CHEM.", "PHYS."],
    db_field: "department",
    validation: OPTIONS_VALIDATION_SCHEMA(),
  },
  {
    label: "Designation",
    value: "",
    info: "",
    excel_field_name: "Designation",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    db_field_type: DB_FIELD_TYPE.STRING,
    options: ["H.O.D.", "Asst. Prof.", "Prof"],
    db_field: "designation",
    validation: OPTIONS_VALIDATION_SCHEMA(),
  },
  {
    label: "Date of Joining(at the Organisation)",
    value: "",
    info: "",
    excel_field_name: "D.O.J.",
    excel_col_width: 20,
    type: VALUE_TYPE.DATE,
    input_type: INPUT_TYPE.DATE,
    db_field_type: DB_FIELD_TYPE.STRING,
    db_field: "dojioning",
    validation: DATE_VALIDATION_SCHEMA(),
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
    label: "Location (in Campus)",
    value: "",
    info: "",
    excel_field_name: "Location (in  Campus)",
    excel_col_width: 20,
    type: VALUE_TYPE.STRING,
    input_type: INPUT_TYPE.SELECT,
    db_field_type: DB_FIELD_TYPE.STRING,
    options: ["Management", "Gurukul", "Ashram"],
    db_field: "loc_in_campus",
    validation: OPTIONS_VALIDATION_SCHEMA(),
  },
];

const PROFILE_SCHEMA = PROFILE_FIELDS;

const getProfileValidationSchema = () => {
  let profileValidationSchema = {};
  PROFILE_FIELDS.forEach((field) => {
    profileValidationSchema[field.db_field] = field.validation;
  });
  return Yup.object().shape(profileValidationSchema);
};

export { PROFILE_FIELDS, PROFILE_SCHEMA, getProfileValidationSchema };
