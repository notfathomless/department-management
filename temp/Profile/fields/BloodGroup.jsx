import React, { Fragment, useState } from "react";
import Image from "next/image";
import Card from "../../../components/ui/card/Card";
import { useUserContext } from "../../../contexts/UserContext";
/* import {} from "./CommonHandlers.jsx"; */
import styles from "./Fields.module.css";

import editIcon from "../../../public/icons/edit.png";
import applyIcon from "../../../public/icons/checked.png";
import cancelIcon from "../../../public/icons/remove.png";
import { getNodes } from "./CommonHandlers.jsx";

const data = {
  label: "Blood Group",
  value: "",
  info: "Your blood group",
  type: "string",
  input_type: "select",
  options: ["A", "B", "AB+", "AB-", "O+", "O-"],
  required: true,
  db_field: "bld_grp",
};

const BloodGroup = () => {
  const { user, setUser } = useUserContext();
  const [value, setValue] = useState(user["Profile"][data.db_field]);
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const { onApplyHandler, applyButton, cancelButton, inputNode } = getNodes(
    data,
    user,
    setUser,
    value,
    setValue,
    isBeingEdited,
    setIsBeingEdited
  );

  return (
    <Card key={data.db_field} title={data.info}>
      <div className={styles.Fields__field_label} title={data.info}>
        {data.label}
      </div>
      {!isBeingEdited ? (
        <div className={styles.Fields__field_value}>
          {user["Profile"][data.db_field]}
          <span
            className={styles.Fields__edit_icon}
            id={data.db_field}
            onClick={() => {
              setIsBeingEdited(true);
            }}
          >
            <Image src={editIcon} alt="Edit icon" layout="responsive" quality={100}></Image>
          </span>
        </div>
      ) : (
        inputNode
      )}
    </Card>
  );
};

export default BloodGroup;