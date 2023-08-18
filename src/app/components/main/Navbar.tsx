"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure id="Navbar" as="nav" className="bg-[#ffdeca]">
      {({ open }) => (
        <>
          <div className="max-w-full px-2 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <i
                      className="block w-6 h-6 pos-xmark text-[24px] leading-[24px] text-[#212b36]"
                      aria-hidden="true"
                    />
                  ) : (
                    <i
                      className="block w-6 h-6 pos-hamburger text-[24px] leading-[24px] text-[#212b36]"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-start flex-1 items-left sm:items-stretch sm:justify-start ml-15">
                <div className="flex flex-shrink-0 items-left">
                  <span className="text-[16px] leading-[24px] font-semibold text-[#14142b]">
                    Table T01
                  </span>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="p-2 rounded-full focus:outline-none">
                      <div className="flex h-[32px] justify-center items-center gap-1">
                        <i
                          className="w-6 h-6 pos-bell text-[24px] leading-[33px] text-[#ea8063]"
                          aria-hidden="true"
                        />
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-10 py-1 origin-top-right bg-white rounded-md shadow-lg right-1 ring-opacity-5 focus:outline-none min-w-[179px]">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Call for waiter
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Call for payment
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="p-2 rounded-full focus:outline-none"
                >
                  <span className="sr-only">Orders</span>
                  <i
                    className="w-6 h-6 pos-document text-[24px] leading-[33px] text-[#ea8063]"
                    aria-hidden="true"
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm rounded-lg focus:outline-none h-[32px] px-1 items-center self-stretch bg-white">
                      <div className="flex h-[32px] justify-center items-center gap-1">
                        <i
                          className="w-6 h-6 pos-globe icon-nav text-[20px] leading-[24px] text-[#ea8063] pr-1"
                          aria-hidden="true"
                        />
                        <span className="text-[14px] leading-[24px] font-medium text-[#ea8063]">
                          TH
                        </span>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-10 origin-top-right bg-white rounded-md shadow-lg right-1 w-50 ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            TH
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            EN
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
