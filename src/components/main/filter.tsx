"use client";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import IconButton from "@mui/material/IconButton";
import "../../../styles/components/Filter.scss";

export default function Filter() {
  return (
    <div id="Filter">
      <Grid className="main-grid" container>
        <Grid className="filter-grid">
          <IconButton className="btnIcon" aria-label="search">
            <i className="pos-search h-6 w-6 icon-filter" aria-hidden="true" />
          </IconButton>
        </Grid>
        <Grid className="filter-grid">
          <IconButton className="btnIcon" aria-label="filter">
            <i className="pos-filter h-6 w-6 icon-filter" aria-hidden="true" />
          </IconButton>
        </Grid>
        <Grid className="filter-grid">{/* <Item>xs=6 md=8</Item> */}</Grid>
      </Grid>
    </div>
  );
}
