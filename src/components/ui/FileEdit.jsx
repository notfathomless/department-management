import React, { Fragment } from "react";
import { Card, Button, makeStyles, Link as MuiLink } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { isEmptyObject } from "../../lib/util";
import stageFileUpload from "../../lib/fileUpload";

const useStyles = makeStyles((theme) => ({ errorBody: { color: theme.palette.error.main } }));

const FileEdit = ({ formik, field, setIsUploading }) => {
  const classes = useStyles();

  const value = formik.values[field.db_field];
  const isNull = isEmptyObject(value);
  let fileUploadNode;

  if (isNull) {
    fileUploadNode = (
      <Fragment>
        <input
          hidden
          id={field.db_field}
          type="file"
          name={field.db_field}
          accept={field.input_range}
          onBlur={formik.handleBlur}
          onChange={async (event) => {
            const file = event.currentTarget.files[0];
            stageFileUpload(file, setIsUploading, (file_obj) => {
              formik.setFieldValue(field.db_field, {
                fname: file_obj.fname,
                fuid: file_obj.fuid,
                isLink: false,
                flink: "",
              });
            });
          }}
        />
        <label htmlFor={field.db_field}>
          {field.label}
          <br />
          <Button fullWidth variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
      </Fragment>
    );
  } else {
    fileUploadNode = value.isLink ? (
      <MuiLink href={value.flink} target="_blank">
        {value.flink}
      </MuiLink>
    ) : (
      <Fragment>
        {field.label}
        <Card>
          <Button
            varient="contained"
            color="primary"
            component="span"
            onClick={() => window.open("/api/file/get/" + value.fuid, "_blank")}
          >
            {value.fname}
          </Button>
          <Button
            endIcon={<DeleteIcon />}
            onClick={() => {
              formik.setFieldValue(field.db_field, {});
            }}
          ></Button>
        </Card>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {fileUploadNode}
      {!!formik.errors[field.db_field] && formik.touched[field.db_field] ? (
        <div className={classes.errorBody}>{`${field.label} must not be empty`}</div>
      ) : null}
    </Fragment>
  );
};

export default FileEdit;