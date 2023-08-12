"use client";
import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import "../../../styles/components/Categories.scss";

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

export default function Categories() {
  const { data, error, isLoading } = useSWR(
    "http://35.197.145.54:3000/categories",
    (url: string) =>
      axios
        .get(url, { headers: { Authorization: "Bearer " + token } })
        .then((r) => r.data)
  );
  const [category, setCategory] = useState("all");
  function handleClick(value: string) {
    setCategory(value);
  }
  return (
    <div id="Categories">
      {category === "all" ? (
        <div className="categoriesGrid">
          <button className="btnCategory btnActive">
            <Image
              src="/all.svg"
              alt="Category All"
              className="all"
              width={30}
              height={30}
              priority
            />
            All
          </button>
        </div>
      ) : (
        <div className="categoriesGrid">
          <button className="btnCategory">
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
          </button>
        </div>
      )}
      {data?.map((cat: Categories) => {
        return category === cat.name ? (
          <div className="categoriesGrid">
            <button
              className="btnCategory btnActive"
              key={cat.id}
              onClick={() => handleClick(cat.name)}
            >
              {cat.name}
            </button>
          </div>
        ) : (
          <div className="categoriesGrid">
            <button
              className="btnCategory"
              key={cat.id}
              onClick={() => handleClick(cat.name)}
            >
              {cat.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
