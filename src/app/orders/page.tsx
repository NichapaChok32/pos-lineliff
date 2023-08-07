"use client";
import axios from "axios";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Categories from "../components/main/categories";
import "../../styles/components/Orders.scss";

const token = localStorage.getItem("accessToken");
export default function Orders() {
  const [isSearch, setIsSearch] = useState(false);
  function handleClick(value: boolean) {
    setIsSearch(value);
  }
  return (
    <div id="Filter">
      <Grid className="main-grid" container>
        <Grid className="filter-grid">
          <IconButton
            className="btnIcon"
            aria-label="search"
            onClick={() => handleClick(true)}
          >
            <i className="pos-search h-6 w-6 icon-filter" aria-hidden="true" />
          </IconButton>
        </Grid>
        <Grid className="filter-grid">
          <IconButton className="btnIcon" aria-label="filter">
            <i className="pos-filter h-6 w-6 icon-filter" aria-hidden="true" />
          </IconButton>
        </Grid>
        <Categories></Categories>
      </Grid>
    </div>
  );
}
