"use client";
import Image from "next/image";
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
    <div className="flex items-center p-0 overflow-hidden overflow-x-scroll min-h-fit gap-x-2">
      <div className="min-w-fit">
        <button
          key={"all"}
          className={
            category === "all"
              ? "min-w-fit max-h-[46px] rounded-2xl py-2 px-5 text-black border border-solid font-sans text-[14px] font-semibold leading-[21px] capitalize flex items-center border-[#ea8063] bg-salmon-transprent"
              : "min-w-fit max-h-[46px] rounded-2xl py-2 px-5 text-black border border-solid font-sans text-[14px] font-semibold leading-[21px] capitalize flex items-center border-[#ededed]"
          }
          onClick={() => handleClick("all")}
        >
          <Image
            src="/all.svg"
            alt="Category All"
            className="mr-2"
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
            <div key={index} className="min-w-fit">
              <button
                className={
                  category === cat.name
                    ? "min-w-fit max-h-[46px] rounded-2xl py-2 px-5 text-black border border-solid font-sans text-[14px] font-semibold leading-[21px] capitalize flex items-center border-[#ea8063] bg-[rgba(234, 128, 99, 0.1)]"
                    : "min-w-fit max-h-[46px] rounded-2xl py-2 px-5 text-black border border-solid font-sans text-[14px] font-semibold leading-[21px] capitalize flex items-center border-[#ededed]"
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
