import React, { Fragment, useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Grid, Box, makeStyles, Backdrop, CircularProgress } from "@material-ui/core";

import { MASTER_SCHEMA, getPublicationValidationSchema } from "../../data/schema";
import { useUserContext } from "../../contexts/UserContext";
import EditNode from "../nodes/EditNode";
import { editPublicationHandler } from "./handlers";

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
    onSubmit: async (values, { setSubmitting }) => {
      editPublicationHandler(
        user.employeeID,
        publication.id,
        index,
        values,
        { setSubmitting },
        setUser,
        setIsEditing
      );
    },
    validationSchema: getPublicationValidationSchema(),
  });

  useEffect(() => {
    if (isUploading || formik.isSubmitting) setOpen(true);
    else setOpen(false);
  }, [isUploading, formik.isSubmitting]);

  const getFormNode = (
    <form onSubmit={formik.handleSubmit} /* encType="multipart/form-data" */>
      <Grid container>
        {MASTER_SCHEMA["publications"]["fields"].map((field) => (
          <Grid item xs={12} md={6} key={field.db_field}>
            <Box px={0.5} py={0.5}>
              <EditNode field={field} formik={formik} setIsUploading={setIsUploading}></EditNode>
            </Box>
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
      <Box pt={2}>
        <Grid container>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="default"
              fullWidth
              onClick={() => {
                setIsEditing(false);
              }}
            >
              {"Cancel"}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              {"Save"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default EditPublication;
