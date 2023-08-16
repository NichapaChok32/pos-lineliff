"use client";
import { useState, useRef } from "react";
import { useGetMenulistsQuery } from "@/services/menulists";
import CategoriesFilter from "../components/menus/categoriesFilter";
import MenuLists from "../components/menus/menuLists";
import "../../styles/components/Menus.scss";
interface Props {
  category: string;
}

export default function Orders(props: Props) {
  const { category } = props;
  const { data, error, isLoading } = useGetMenulistsQuery("");
  const menuLists = data;
  const menusByCategories = () => {
    if (category === "all") {
    }
  };
  const searchRef = useRef(
    null
  ) as React.MutableRefObject<HTMLInputElement | null>;
  const [isSearch, setIsSearch] = useState(false);
  function handleClick(value: boolean) {
    setIsSearch(value);
  }
  return (
    <div id="Menus">
      <div id="Filter">
        <header className="mainGrid">
          {isSearch ? (
            <div className="relative formDiv">
              <i
                className="absolute w-6 h-6 pos-search iconSearch"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search menu"
                className="txtSearch"
              />
              <i
                className="absolute w-6 h-6 pos-circle-xmark iconClose"
                aria-hidden="true"
                onClick={() => handleClick(false)}
              />
            </div>
          ) : (
            <>
              <div className="relative filterGrid">
                <i
                  className="w-6 h-6 pos-search iconFilter"
                  aria-hidden="true"
                  onClick={() => handleClick(true)}
                />
              </div>
              <div className="relative filterGrid">
                <i
                  className="w-6 h-6 pos-filter iconFilter"
                  aria-hidden="true"
                />
              </div>
              <CategoriesFilter></CategoriesFilter>
            </>
          )}
        </header>
      </div>
      <div>
        {Array.isArray(menuLists) ? (
          menuLists?.map((m: any) => {
            return (
              <MenuLists item={m} key={m.id} category={category}></MenuLists>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
