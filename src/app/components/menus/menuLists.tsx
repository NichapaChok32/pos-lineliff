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
    <div className="px-4 py-3">
      <div className="w-full flex gap-x-[10px] min-h-[100px]">
        <div className="min-w-[100px] min-h-[100px]">
          <Image
            src="/food.png"
            alt="Food"
            className="rounded-lg"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="w-full">
          <label className="text-[16px] font-semibold leading-[24px] mb-1">
            {item.name}
          </label>
          <p className="overflow-hidden text-ellipsis min-w-[240px] text-[#92929d] text-[12px] font-normal leading-[16px] tracking-[0.48px] menuParagraph">
            {item.detail}
          </p>
          <div className="flex gap-x-[10px] max-h-fit mt-[10px] justify-between items-center self-stretch">
            <div>
              <label className="text-[16px] font-semibold leading-[24px] text-[#0d998b]">
                {item.price}
              </label>
            </div>
            <div>
              <button className="flex items-center text-center w-6 h-6 p-1 bg-[#ffdeca] rounded">
                <i className="pos-add w-4 h-4 text-[16px] leading-[16px] text-[#ea8063]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
