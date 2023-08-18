"use client";
import Image from "next/image";
import { MenusLists } from "@/interfaces/menus/MenusLists";
import "../../../styles/components/MenuList.scss";

interface Props {
  item: MenusLists;
}

export default function MenuLists(props: Props) {
  const { item } = props;

  // const calculatePriceVat = (price: number, vat: number) => {
  //   const percent = vat / 100;
  //   const diff = price * percent;
  //   return price + diff;
  // };

  return (
    <div id="Menulists">
      <div className="w-full menuGrid">
        <div className="menuCols menuImgCol">
          <Image
            src="/food.png"
            alt="Food"
            className="foodImg"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="w-full menuCols">
          <label className="menuName">{item.name}</label>
          <p className="menuParagraph">{item.detail}</p>
          <div className="menuGrid menuPriceDiv">
            <div className="menuCols">
              <label className="menuPrice">{item.price}</label>
            </div>
            <div className="menuCols">
              <button className="btnAddMenu">
                <i className="w-6 h-6 pos-add iconAdd" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
