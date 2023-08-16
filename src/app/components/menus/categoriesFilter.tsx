"use client";
import Image from "next/image";
import "../../../styles/components/Categories.scss";
import { useState } from "react";
import { useGetCategoriesQuery } from "@/services/categories";
import { Categories } from "@/interfaces/menus/Categories";

export default function CategoriesFilter() {
  const { data, error, isLoading } = useGetCategoriesQuery("");
  console.log(data);
  const [category, setCategory] = useState("all");
  function handleClick(value: string) {
    setCategory(value);
  }
  return (
    <div id="Categories">
      <div className="categoriesGrid">
        <button
          key={"all"}
          className={
            category === "all" ? "btnActive btnCategory" : "btnCategory"
          }
          onClick={() => handleClick("all")}
        >
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
      {data?.map((cat: Categories, index: number) => {
        return (
          <div key={index} className="categoriesGrid">
            <button
              className={
                category === cat.name ? "btnActive btnCategory" : "btnCategory"
              }
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
