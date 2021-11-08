import React, { Fragment } from "react";
import {
  Grid,
  Box,
  ButtonGroup,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useUserContext } from "../../contexts/UserContext";
import DisplayNode from "../nodes/DisplayNode";
import { MASTER_SCHEMA } from "../../data/schema";
import { WIDTH_TYPE } from "../../data/types/types";
import { deleteAchievementHandler } from "./handlers";
import AchievementCard from "./AchievementCard";

const DisplayAchievement = ({
  achievementCategory,
  achievement,
  index,
  setIsEditing,
  expanded,
  setExpanded,
}) => {
  const { user, setUser } = useUserContext();
  return (
    <Fragment>
      <AchievementCard
        {...{
          achievementIndex: index,
          achievement,
          achievementCategory,
          setIsEditing,
          expanded,
          setExpanded,
        }}
        cardActions={
          <Fragment>
            <IconButton
              sx={{ pl: "1rem", pr: "1rem" }}
              color="primary"
              aria-label="edit"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="primary"
              onClick={(e) => {
                e.stopPropagation();

                /*  <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      Let Google help apps determine location. This means
                      sending anonymous location data to Google, even when no
                      apps are running.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                  </DialogActions>
                </Dialog>; */

                deleteAchievementHandler(
                  user["profile"].employeeID,
                  achievement.id,
                  setUser,
                  achievementCategory
                );
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Fragment>
        }
        cardContent={
          <Grid container>
            {MASTER_SCHEMA[achievementCategory]["fields"].map(
              (field, index) => {
                const value = achievement[field.db_field];

                return (
                  <Grid
                    item
                    {...{ xs: 12, sm: 12, md: 12, lg: 6 }}
                    key={field.db_field}
                  >
                    <DisplayNode field={field} value={value}></DisplayNode>
                  </Grid>
                );
              }
            )}
          </Grid>
        }
      />
    </Fragment>
  );
};

export default DisplayAchievement;
