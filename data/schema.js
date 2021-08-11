import * as Yup from "yup";
const DataTypes = { string: 0, date: 1, bool: 3 };

const sidebarOptions = [
  { menuItem: "Profile", urlSuffix: "profile" },
  { menuItem: "Education", urlSuffix: "edudation" },
  { menuItem: "Conferences", urlSuffix: "conferences" },
  { menuItem: "Publications", urlSuffix: "publications" },
  { menuItem: "Experience", urlSuffix: "experience" },
  { menuItem: "Seminars", urlSuffix: "seminars" },
  { menuItem: "Projects", urlSuffix: "projects" },
];

const schema = {
  employeeID: "",
  hashedPassword: "",
  Profile: [
    {
      label: "Full Name",
      value: "",
      info: "Your full name",
      excel_field_name: "Full Name",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "name",
      validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
    },
    {
      label: "Father's Name",
      value: "",
      info: "Your Father's name",
      excel_field_name: "Father's Name",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "f_name",
      validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
    },
    /*     {
      label: "Mother's Name",
      value: "",
      info: "Your Mother's name",
      excel_field_name: "Mother's Name",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "m_name",
      validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
    }, */
    {
      label: "Permanent Address (Full Postal Address)",
      value: "",
      info: "Your permanent address",
      excel_field_name: "Permanent Address",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "p_address",
      validation: Yup.string().min(10, "Too Short!").max(80, "Too Long!").required("Required!"),
    },
    {
      label: "Local Address",
      value: "",
      info: "Your local address",
      excel_field_name: "Local Address",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "l_address",
      validation: Yup.string().min(10, "Too Short!").max(80, "Too Long!").required("Required!"),
    },
    {
      label: "Official Email of IEM domain",
      value: "",
      info: "Your official email adress",
      excel_field_name: "Official Email",
      excel_col_width: 20,
      type: "string",
      input_type: "email",
      required: true,
      db_field: "oficial_email",
      validation: Yup.string().email("Invalid email").required("Required!"),
    },
    {
      label: "Personal Email",
      value: "",
      info: "Your personal email",
      excel_field_name: "Personal Email",
      excel_col_width: 20,
      type: "string",
      input_type: "email",
      required: true,
      db_field: "personal_email",
      validation: Yup.string().email("Invalid email").required("Required!"),
    },
    {
      label: "Blood Group",
      value: "",
      info: "Your blood group",
      excel_field_name: "Blood Group",
      excel_col_width: 20,
      type: "string",
      input_type: "select",
      options: ["A", "B", "AB+", "AB-", "O+", "O-"],
      required: true,
      db_field: "bld_grp",
      validation: Yup.string().required("Required!"),
    },
    {
      label: "Mobile Number(for SMS)",
      value: "",
      info: "Your mobile number for reveiving SMS",
      excel_field_name: "Mobile Number",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "mobile_no",
      validation: Yup.string().length(10, "Must be of 10 digits!").required("Required!"),
    },
    {
      label: "Landline Number.",
      value: "",
      info: "Your landline number",
      excel_field_name: "Land. Number",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "landline_no",
      validation: Yup.string().length(8, "Must be of 8 digits!"),
    },
    {
      label: "Date of Birth",
      value: "",
      info: "Your date of birth",
      excel_field_name: "D.O.B.",
      excel_col_width: 20,
      type: "date",
      input_type: "date",
      required: true,
      db_field: "dob",
      validation: Yup.date().required("Required!"),
    },
    {
      label: "Gender",
      value: "",
      info: "Your gender",
      excel_field_name: "Gender",
      excel_col_width: 20,
      type: "string",
      input_type: "select",
      options: ["Male", "Female"],
      required: true,
      db_field: "gender",
      validation: Yup.string().required("Required!"),
    },
    {
      label: "Department",
      value: "",
      info: "",
      excel_field_name: "Department",
      excel_col_width: 20,
      type: "string",
      input_type: "select",
      options: ["C.S.E.", "MECH.", "ELEC.", "BIO", "CHEM.", "PHYS."],
      required: true,
      db_field: "department",
      validation: Yup.string().required("Required!"),
    },
    {
      label: "Designation",
      value: "",
      info: "",
      excel_field_name: "Designation",
      excel_col_width: 20,
      type: "string",
      input_type: "select",
      options: ["H.O.D.", "Asst. Prof.", "Prof"],
      required: true,
      db_field: "designation",
      validation: Yup.string().required("Required!"),
    },
    {
      label: "Date of Joining(at the Organisation)",
      value: "",
      info: "",
      excel_field_name: "D.O.J.",
      excel_col_width: 20,
      type: "string",
      input_type: "date",
      required: true,
      db_field: "dojioning",
      validation: Yup.date().required("Required!"),
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
      required: true,
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
      required: true,
      db_field: "caste",
      validation: Yup.string().required("Required!"),
    }, */
    /*     {
      label: "PAN",
      value: "",
      info: "",
      excel_field_name: "PAN",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "pan",
      validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
    }, */
    /*     {
      label: "Bank Name(with Branch) [Salary] ",
      value: "",
      info: "",
      excel_field_name: "Bank Name",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "bank_name",
      validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
    }, */
    /*     {
      label: "Salary Account",
      value: "",
      info: "",
      excel_field_name: "Salary Account",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "salary_account",
      validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
    }, */
    /*     {
      label: "IFSC",
      value: "",
      info: "",
      excel_field_name: "IFSC",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "IFSC",
      validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
    }, */
    /*     {
      label: "PF-Account Number",
      value: "",
      info: "",
      excel_field_name: "PF-Account Number",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "pf_acc_no",
      validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
    }, */
    /*     {
      label: "Passport Number",
      value: "",
      info: "",
      excel_field_name: "Passport Number",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "passport_number",
      validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
    }, */
    /*     {
      label: "Driving License",
      value: "",
      info: "",
      excel_field_name: "Driving License",
      excel_col_width: 20,
      type: "string",
      input_type: "text",
      required: true,
      db_field: "driving_license",
      validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
    }, */
    {
      label: "Location (in Campus)",
      value: "",
      info: "",
      excel_field_name: "Location (in  Campus)",
      excel_col_width: 20,
      type: "string",
      input_type: "select",
      options: ["Management", "Gurukul", "Ashram"],
      required: true,
      db_field: "loc_in_campus",
      validation: Yup.string().required("Required!"),
    },
  ],
  Education: [],
  Conferences: [],
  Publications: {
    sl_no: null,
    fields: [
      {
        label: "Author's Name",
        value: "",
        info: "Name of the Author of the paper",
        excel_field_name: "Author's Name",
        excel_col_width: 20,
        type: "string",
        input_type: "text",
        required: true,
        db_field: "name_of_auth",
        validation: Yup.string().min(5, "Too Short!").max(80, "Too Long!").required("Required!"),
      },
      {
        label: "Published on",
        value: "",
        info: "Year of Publication of the paper",
        excel_field_name: "Published on",
        excel_col_width: 20,
        type: "string",
        input_type: "date",
        required: true,
        db_field: "yop",
        validation: Yup.date().required("Required!"),
      },
      {
        label: "Title",
        value: "",
        info: "Title of the Paper",
        excel_field_name: "Title",
        excel_col_width: 40,
        type: "string",
        input_type: "text",
        required: true,
        db_field: "title",
        validation: Yup.string().min(5, "Too Short!").max(100, "Too Long!").required("Required!"),
      },
      {
        label: "Journal",
        value: "",
        info: "Name of the Journal",
        excel_field_name: "Journal",
        excel_col_width: 20,
        type: "string",
        input_type: "text",
        required: true,
        db_field: "journal_name",
        validation: Yup.string().min(1, "Too Short!").max(30, "Too Long!").required("Required!"),
      },
      {
        label: "Coverage",
        value: "",
        info: "National/ International",
        excel_field_name: "Coverage",
        excel_col_width: 20,
        type: "string",
        input_type: "select",
        options: ["National", "International"],
        required: true,
        db_field: "nat_inter_imp",
        validation: Yup.string().required("Required!"),
      },
      {
        label: "Impact" /*make this field a color value*/,
        value: "",
        info: "Impact Factor",
        excel_field_name: "Impact Factor",
        excel_col_width: 20,
        type: "number",
        input_type: "text",
        required: true,
        db_field: "impact_factor",
        validation: Yup.string().required("Required!"),
      },
      {
        label: "Volume No.",
        value: "",
        info: "Volume No. of the paper",
        excel_field_name: "Volume No.",
        excel_col_width: 20,
        type: "string",
        input_type: "text",
        required: true,
        db_field: "vol_no",
        validation: Yup.string().min(1, "Too Short!").max(10, "Too Long!").required("Required!"),
      },
      {
        label: "Issue No.",
        value: "",
        info: "Issue No. of the paper",
        excel_field_name: "Issue No.",
        excel_col_width: 20,
        type: "string",
        input_type: "text",
        required: true,
        db_field: "issue_no",
        validation: Yup.string().min(1, "Too Short!").max(10, "Too Long!").required("Required!"),
      },
      {
        label: "Page No.",
        value: "",
        info: "Page No. of the paper",
        excel_field_name: "Page No",
        excel_col_width: 20,
        type: "string",
        input_type: "text",
        required: true,
        db_field: "page_no",
        validation: Yup.string().min(1, "Too Short!").max(10, "Too Long!").required("Required!"),
      },
      {
        label: "ISSN/ISBN",
        value: "",
        info: "ISSN/ISBN of the paper",
        excel_field_name: "ISSN/ISBN",
        excel_col_width: 20,
        type: "string",
        input_type: "text",
        required: true,
        db_field: "issn_isbn",
        validation: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required!"),
      },
      {
        label: "Indexing",
        value: "",
        info: "Indexing of the paper",
        excel_field_name: "Indexing",
        excel_col_width: 20,
        type: "string",
        input_type: "text",
        required: true,
        db_field: "indexing",
        validation: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required!"),
      },
      {
        label: "Students Involved",
        value: "",
        info: "Number of students involved (if any)",
        excel_field_name: "Students Involved",
        excel_col_width: 20,
        type: "number",
        input_type: "text",
        required: true,
        db_field: "studs_involved",
        validation: Yup.string().required("Required!"),
      },
      {
        label: "Invited Paper",
        value: false,
        info: "Whether the paper was an invited paper ? Input Yes/No",
        excel_field_name: "Invited Paper",
        excel_col_width: 20,
        type: "boolean",
        input_type: "checkbox",
        required: true,
        db_field: "inv_paper",
        validation: Yup.boolean().required("Required!"),
      },
      {
        label: "Proof of Invitation",
        value: {},
        info: "Proof of Invitation (Upload pdf)",
        excel_field_name: "Proof of Invitation",
        excel_col_width: 20,
        type: "object",
        input_type: "file",
        input_range: "application/pdf",
        required: true,
        db_field: "prof_inv_file",
        validation: Yup.object()
          .shape({ fname: Yup.string().required(), fuid: Yup.string().required() })
          .required("Required!"),
      },
      {
        label: "First Page of Publication",
        value: {},
        info: "Attachments",
        excel_field_name: "Publication First Page",
        excel_col_width: 20,
        type: "object",
        input_type: "file",
        input_range: "application/pdf",
        required: true,
        db_field: "first_page_pb",
        validation: Yup.object()
          .shape({ fname: Yup.string().required(), fuid: Yup.string().required() })
          .required("Required!"),
      },
    ],
  },
  Experience: [],
  Seminars: [],
  Projects: [],
};

const getProfileValidationSchema = () => {
  let profileValidationSchema = {};
  schema["Profile"].forEach((field) => {
    profileValidationSchema[field.db_field] = field.validation;
  });
  return Yup.object().shape(profileValidationSchema);
};

const getPublicationValidationSchema = () => {
  let publicationValidationSchema = {};
  schema["Publications"]["fields"].forEach((field) => {
    publicationValidationSchema[field.db_field] = field.validation;
  });
  return Yup.object().shape(publicationValidationSchema);
};

const fileSchema = { filename: "", encoding: "", mimetype: "", fuid: "", mapped: false };

export {
  DataTypes,
  sidebarOptions,
  schema,
  getProfileValidationSchema,
  getPublicationValidationSchema,
};
