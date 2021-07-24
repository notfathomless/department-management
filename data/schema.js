const DataTypes = { string: 0, date: 1, bool: 3 };

const sidebarOptions = [
  "Profile",
  "Education",
  "Conferences",
  "Publications",
  "Experience",
  "Seminars",
  "Projects",
];

const schema = {
  employeeID: "",
  isDataLoaded: false,
  Profile: [
    {
      label: "Full Name",
      value: "",
      info: "Your full name",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "name",
    },
    {
      label: "Father's Name",
      value: "",
      info: "Your Father's name",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "f_name",
    },
    {
      label: "Mother's Name",
      value: "",
      info: "Your Mother's name",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "m_name",
    },
    {
      label: "Permanent Address (Full Postal Address)",
      value: "",
      info: "Your permanent address",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "p_address",
    },
    {
      label: "Local Address",
      value: "",
      info: "Your local address",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "l_address",
    },
    {
      label: "Official Email of IEM domain",
      value: "",
      info: "Your official email adress",
      type: "string",
      input_type: "email",
      required: true,
      db_field: "oficial_email",
    },
    {
      label: "Blood Group",
      value: "",
      info: "Your blood group",
      type: "string",
      input_type: "select",
      options: ["A", "B", "AB+", "AB-", "O+", "O-"],
      required: true,
      db_field: "bld_grp",
    },
    {
      label: "Personal Email",
      value: "",
      info: "Your personal email",
      type: "string",
      input_type: "email",
      required: true,
      db_field: "personal_email",
    },
    {
      label: "Mobile Number(for SMS)",
      value: "",
      info: "Your mobile number for reveiving SMS",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "mobile_no",
    },
    {
      label: "Landline umber.",
      value: "",
      info: "Your landline number",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "landline_no",
    },
    {
      label: "Date of Birth",
      value: "",
      info: "Your date of birth",
      type: "date",
      input_type: "date",
      required: true,
      db_field: "dob",
    },
    {
      label: "Gender",
      value: "",
      info: "Your gender",
      type: "string",
      input_type: "select",
      options: ["Male", "Female"],
      required: true,
      db_field: "gender",
    },
    {
      label: "Department",
      value: "",
      info: "",
      type: "string",
      input_type: "select",
      options: ["C.S.E.", "MECH.", "ELEC.", "BIO", "CHEM.", "PHYS."],
      required: true,
      db_field: "department",
    },
    {
      label: "Designation",
      value: "",
      info: "",
      type: "string",
      input_type: "select",
      options: ["H.O.D.", "Asst. Prof.", "Prof"],
      required: true,
      db_field: "designation",
    },
    {
      label: "Date of Joining(at the Organisation)",
      value: "",
      info: "",
      type: "string",
      input_type: "date",
      required: true,
      db_field: "dojioning",
    },
    {
      label: "Religion",
      value: "",
      info: "",
      type: "string",
      input_type: "select",
      options: ["Hinduisim", "Christian", "Bhudhisim", "Muslim"],
      required: true,
      db_field: "religion",
    },
    {
      label: "Caste",
      value: "",
      info: "",
      type: "string",
      input_type: "select",
      options: ["General", "S.C.", "S.T.", "O.B.C."],
      required: true,
      db_field: "caste",
    },
    {
      label: "PAN",
      value: "",
      info: "",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "pan",
    },
    {
      label: "Bank Name(with Branch) [Salary] ",
      value: "",
      info: "",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "bank_name",
    },
    {
      label: "Salary Account",
      value: "",
      info: "",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "salary_account",
    },
    {
      label: "IFSC",
      value: "",
      info: "",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "IFSC",
    },
    {
      label: "PF-Account Number",
      value: "",
      info: "",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "pf_acc_no",
    },
    {
      label: "Passport Number",
      value: "",
      info: "",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "passport_number",
    },
    {
      label: "Driving License",
      value: "",
      info: "",
      type: "string",
      input_type: "text",
      required: true,
      db_field: "driving_license",
    },
    {
      label: "Location (in Campus)",
      value: "",
      info: "",
      type: "string",
      input_type: "select",
      options: ["Management", "Gurukul", "Ashram"],
      required: true,
      db_field: "loc_in_campus",
    },
  ],
  Education: [],
  Conferences: [],
  Publications: [
    {
      sl_no: null,
      fields: [
        {
          label: "Author's Name",
          value: "",
          info: "Name of the Author of the paper",
          type: "string",
          input_type: "text",
          required: true,
          db_field: "name_of_auth",
        },
        {
          label: "Published on",
          value: "",
          info: "Year of Publication of the paper",
          type: "string",
          input_type: "date",
          required: true,
          db_field: "yop",
        },
        {
          label: "Title",
          value: "",
          info: "Title of the Paper",
          type: "string",
          input_type: "text",
          required: true,
          db_field: "title",
        },
        {
          label: "Journal",
          value: "",
          info: "Name of the Journal",
          type: "string",
          input_type: "text",
          required: true,
          db_field: "journal_name",
        },
        {
          label: "Coverage",
          value: "",
          info: "National/ International",
          type: "string",
          input_type: "select",
          options: ["National", "International"],
          required: true,
          db_field: "nat_inter_imp",
        },
        {
          label: "Impact" /*make this field a color value*/,
          value: "",
          info: "Impact Factor",
          type: "number",
          input_type: "text",
          required: true,
          db_field: "impact_factor",
        },
        {
          label: "Volume No/Issue No. & Page No",
          value: "",
          info: "Volume No/Issue No. & Page No of the paper",
          type: "text",
          input_type: "text",
          required: true,
          db_field: "vol_issue_no",
        },
        {
          label: "ISSN/ISBN",
          value: "",
          info: "ISSN/ISBN of the paper",
          type: "text",
          input_type: "text",
          required: true,
          db_field: "issn_isbn",
        },
        {
          label: "Indexing",
          value: "",
          info: "Indexing of the paper",
          type: "text",
          input_type: "text",
          required: true,
          db_field: "indexing",
        },
        {
          label: "Invited Paper",
          value: null,
          info: "Whether the paper was an invited paper ? Input Yes/No",
          type: "boolean",
          input_type: "checkbox",
          required: true,
          db_field: "inv_paper",
        },
        {
          label: "Proof of Invitation",
          value: null,
          info: "Proof of Invitation (Upload pdf)",
          type: "file",
          input_type: "file",
          required: true,
          db_field: "prof_inv_file",
        },
        {
          label: "Students Involved",
          value: "",
          info: "Number of students involved (if any)",
          type: "number",
          input_type: "text",
          required: true,
          db_field: "studs_involved",
        },
        {
          label: "Attachments",
          value: [],
          info: "Attachments",
          type: "file",
          input_type: "file",
          required: true,
          db_field: "attachments",
        },
      ],
    },
  ],
  Experience: [],
  Seminars: [],
  Projects: [],
};

export { DataTypes, sidebarOptions, schema };
