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
  const [category, setCategory] = useState("all");
  function handleClick(value: string) {
    setCategory(value);
  }
  return (
    <Grid className="filter-grid categories-grid">
      {category === "all" ? (
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
      ) : (
        <Button className="btnCategory">
          <Image
            src="/all.svg"
            alt="Category All"
            className="all"
            width={30}
            height={30}
            priority
            onClick={() => handleClick("all")}
          />
          All
        </Button>
      )}
      {data?.map((cat: Categories) => {
        return category === cat.name ? (
          <Button
            className="btnCategory btnActive"
            key={cat.id}
            onClick={() => handleClick(cat.name)}
          >
            {cat.name}
          </Button>
        ) : (
          <Button
            className="btnCategory"
            key={cat.id}
            onClick={() => handleClick(cat.name)}
          >
            {cat.name}
          </Button>
        );
      })}
    </Grid>
  );
}
