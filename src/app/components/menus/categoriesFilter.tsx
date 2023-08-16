"use client";
import Image from "next/image";
import "../../../styles/components/Categories.scss";
import { useEffect, useState } from "react";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setCategoriesLists } from "@/features/menuCategories/categoriesSlice";
import { useGetCategoriesQuery } from "@/services/categories";
import { Categories } from "@/interfaces/menus/Categories";

type Props = {
  onCategoryChange?: (newType: string) => void;
};

export default function CategoriesFilter({ onCategoryChange }: Props) {
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetCategoriesQuery("");
  useEffect(() => {
    dispatch(setCategoriesLists(data));
  }, [data]);
  function handleClick(value: string) {
    setCategory(value);
    onCategoryChange?.(value);
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
      {!isLoading && data ? (
        data?.map((cat: Categories, index: number) => {
          return (
            <div key={index} className="categoriesGrid">
              <button
                className={
                  category === cat.name
                    ? "btnActive btnCategory"
                    : "btnCategory"
                }
                onClick={() => handleClick(cat.name)}
              >
                {cat.name}
              </button>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
