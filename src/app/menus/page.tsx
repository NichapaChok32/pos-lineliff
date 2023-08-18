"use client";
import { useState, useRef, useEffect } from "react";
import { useGetMenulistsQuery } from "@/services/menulists";
import { MenuCategories } from "@/interfaces/menus/MenuCategories";
import CategoriesFilter from "../components/menus/categoriesFilter";
import Loading from "../components/main/Loading";
import MenuLists from "../components/menus/menuLists";
import "../../styles/components/Menus.scss";

export default function Orders() {
  const [category, setCategoryType] = useState("all");
  const { data, error, isLoading } = useGetMenulistsQuery("");
  const [menuAll, setMenuAll] = useState<MenuCategories[]>([]);
  const changeMenuLists = (event: any) => {
    setCategoryType(event);
    let menus;
    if (event === "all") {
      menus = data;
    } else {
      menus = data.filter(
        (m: any) => m.categories && m.categories.name === event
      );
    }
    setMenuAll(menus);
  };
  useEffect(() => {
    if (category === "all") {
      setMenuAll(data);
    }
  }, [data]);
  const searchRef = useRef(
    null
  ) as React.MutableRefObject<HTMLInputElement | null>;
  const [isSearch, setIsSearch] = useState(false);
  const handleClick = (value: boolean) => {
    setIsSearch(value);
  };
  const handleSearch = (event: any) => {
    let menus;
    menus = data.filter((m: any) => m.name.indexOf(event.target.value) > -1);
    setMenuAll(menus);
  };
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
                onKeyUp={(event) => handleSearch(event)}
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
              <CategoriesFilter
                onCategoryChange={(event) => changeMenuLists(event)}
              />
            </>
          )}
        </header>
      </div>
      <div>
        {isLoading && !Array.isArray(menuAll) ? (
          <Loading isLoading={isLoading}></Loading>
        ) : (
          menuAll?.map((m: any) => {
            return <MenuLists item={m} key={m.id}></MenuLists>;
          })
        )}
      </div>
    </div>
  );
}
