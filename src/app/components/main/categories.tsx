"use client";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import "../../../styles/components/Orders.scss";

interface SubCategories {
  id: number;
  uuid: string;
  name: string;
}

interface Categories {
  id: number;
  uuid: string;
  status: boolean;
  name: string;
  createdAt: string;
  updatedAt: string;
  subCategories: SubCategories[];
  itemMaster: SubCategories[];
}

const token = localStorage.getItem("accessToken");

const fetcher = (url: string) =>
  axios
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((r) => r.data);

export default function Categories() {
  const { data, error, isLoading } = useSWR(
    "http://35.197.145.54:3000/categories",
    fetcher
  );
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
        <Grid className="filter-grid categories-grid">
          <Button className="btnCategory btnActive">
            <Image
              src="/all.svg"
              alt="Category All"
              className="all"
              width={30}
              height={30}
              priority
            />
            All
          </Button>
          {data?.map((cat: Categories) => (
            <Button className="btnCategory" key={cat.id}>
              {cat.name}
            </Button>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
