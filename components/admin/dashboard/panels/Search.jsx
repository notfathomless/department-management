import React, { Fragment, useRef, useEffect } from "react";
import { Box, Grid, Paper, Card, CardContent } from "@material-ui/core";

import ProfileFilter from "./ProfileFilter";
import AchievementFilter from "./AchievementFilter";

const Search = ({
  valueLastUpdatedRef,
  toFilterRef,
  filterRef,

  sortRef,
  displayRef,
}) => {
  return (
    <Fragment>
      <ProfileFilter
        {...{
          valueLastUpdatedRef,
          toFilterRef,
          filterRef,

          sortRef,
          displayRef,
        }}
      />
      <AchievementFilter
        {...{
          valueLastUpdatedRef,
          toFilterRef,
          filterRef,

          sortRef,
          displayRef,
        }}
      />
    </Fragment>
  );
};

export default Search;