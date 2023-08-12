"use client";
import axios from "axios";
import { useState, useRef } from "react";
import useSWR from "swr";
import Categories from "../components/menus/categories";
import MenuLists from "../components/menus/menuLists";
import "../../styles/components/Menus.scss";

const token = localStorage.getItem("accessToken");

export default function Orders() {
  const { data, error, isLoading } = useSWR(
    "http://35.197.145.54:3000/item-masters",
    (url: string) =>
      axios
        .get(url, { headers: { Authorization: "Bearer " + token } })
        .then((r) => r.data)
  );
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
            <div className="formDiv relative">
              <i
                className="pos-search h-6 w-6 iconSearch absolute"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search menu"
                className="txtSearch"
              />
              <i
                className="pos-circle-xmark h-6 w-6 absolute iconClose"
                aria-hidden="true"
                onClick={() => handleClick(false)}
              />
            </div>
          ) : (
            <>
              <div className="filterGrid relative">
                <i
                  className="pos-search h-6 w-6 iconFilter"
                  aria-hidden="true"
                  onClick={() => handleClick(true)}
                />
              </div>
              <div className="filterGrid relative">
                <i
                  className="pos-filter h-6 w-6 iconFilter"
                  aria-hidden="true"
                />
              </div>
              <Categories></Categories>
            </>
          )}
        </header>
      </div>
      <div>
        {data?.map((m: any) => {
          return <MenuLists item={m} key={m.id}></MenuLists>;
        })}
      </div>
    </div>
  );
}
