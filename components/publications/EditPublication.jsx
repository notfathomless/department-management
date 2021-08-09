import React from "react";
import { Fragment, useState, useEffect, useCallback } from "react";
import { schema } from "../../data/schema";
import { useUserContext } from "../../contexts/UserContext";
import axios from "axios";
import { isEmptyObject } from "../../lib/util";
import {
  Card,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  CardContent,
  Grid,
  FormControlLabel,
  Checkbox,
  Box,
  MenuItem,
  Typography,
  makeStyles,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { Formik, useFormik, Field, Form, ErrorMessage } from "formik";
import DeleteIcon from "@material-ui/icons/Delete";
import EditNode from "../../lib/EditNode";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const EditPublication = ({ publication, index, setIsEditing }) => {
  const classes = useStyles();
  const { user, setUser } = useUserContext();
  const [isUploading, setIsUploading] = useState(false);
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: publication,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      axios({
        url: "api/user/editData/publications/edit",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          employeeID: user.employeeID,
          pub_sl_no_to_update: publication.sl_no,
          updateObject: values,
        },
      })
        .then((response) => response.data)
        .then((result) => {
          if (result.isUpdated === true) {
            setUser((oldState) => {
              let newState = { ...oldState };
              newState["Publications"][index] = {
                ...newState["Publications"][index],
                ...values,
              };
              return newState;
            });
          }
        })
        .then(() => {
          setSubmitting(false);
          setIsEditing(false);
        });
    },
  });

  useEffect(() => {
    if (isUploading || formik.isSubmitting) setOpen(true);
    else setOpen(false);
  }, [isUploading, formik.isSubmitting]);

  const getFormNode = (
    <form onSubmit={formik.handleSubmit} /* encType="multipart/form-data" */>
      <Grid container>
        {schema["Publications"]["fields"].map((field) => (
          <Grid item xs={12} md={6} key={field.db_field}>
            <EditNode field={field} formik={formik} setIsUploading={setIsUploading}></EditNode>
          </Grid>
        ))}
      </Grid>
    </form>
  );

  return (
    <Fragment>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {getFormNode}
      <Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="default"
              fullWidth
              onClick={() => {
                setIsEditing(false);
              }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default EditPublication;
