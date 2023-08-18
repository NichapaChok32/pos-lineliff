"use client";
import { useState, useRef, useEffect } from "react";
import { useGetMenulistsQuery } from "@/services/menulists";
import { MenuCategories } from "@/interfaces/menus/MenuCategories";
import CategoriesFilter from "../components/menus/categoriesFilter";
import Loading from "../components/main/Loading";
import MenuLists from "../components/menus/menuLists";

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
  const [isSearch, setIsSearch] = useState(false);
  const handleClick = (value: boolean) => {
    if (!value) {
      setMenuAll(data);
    }
    setIsSearch(value);
  };
  const handleSearch = (event: any) => {
    if (event.target.value) {
      let menus;
      menus = data.filter((m: any) => m.name.indexOf(event.target.value) > -1);
      setMenuAll(menus);
    } else {
      setMenuAll(data);
    }
  };
  return (
    <div>
      <div className="overflow-hidden">
        <header className="flex p-4 flex-nowrap gap-x-4">
          {isSearch ? (
            <div className="relative w-full">
              <i
                className="absolute w-6 h-6 pos-search top-[10px] left-4 text-[24px] leading-[24px] text-[#92929d]"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search menu"
                className="w-full h-[46px] px-12 py-[7px] rounded-lg border border-solid border-[#ea8063] outline-offset-0"
                onKeyUp={(event) => handleSearch(event)}
              />
              <i
                className="absolute w-6 h-6 pos-circle-xmark top-[12px] right-4 text-[24px] leading-[24px] text-[#92929d]"
                aria-hidden="true"
                onClick={() => handleClick(false)}
              />
            </div>
          ) : (
            <>
              <div className="relative flex items-center p-0 gap-x-2 min-w-fit">
                <i
                  className="w-6 h-6 pos-search text-[24px] leading-[24px] text-[#171725]"
                  aria-hidden="true"
                  onClick={() => handleClick(true)}
                />
              </div>
              <div className="relative flex items-center p-0 gap-x-2 min-w-fit">
                <i
                  className="w-6 h-6 pos-filter text-[24px] leading-[24px] text-[#171725]"
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
