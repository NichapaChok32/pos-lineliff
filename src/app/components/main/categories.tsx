"use client";
import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
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
  const [isSearch, setIsSearch] = useState(false);
  function handleClick(value: boolean) {
    setIsSearch(value);
  }
  return (
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
  );
}
