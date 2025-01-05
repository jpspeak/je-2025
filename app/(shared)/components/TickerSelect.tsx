"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import { Minus } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
};

// Function Declaration for Component
function CustomSelect({
  options,
  placeholder = "Select an option",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle Dropdown Visibility
  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  // Select Option and Close Dropdown
  function selectOption(option: Option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  // Close Dropdown on Outside Click
  useEffect(function addClickOutsideListener() {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative border-l border-[#606060] cursor-pointer"
      ref={dropdownRef}
    >
      {/* Dropdown Trigger */}
      <div
        className="text-white font-light w-[240px] px-[20px] h-[55px] flex items-center justify-between gap-[10px] text-[15px]"
        onClick={toggleDropdown}
      >
        <span className="truncate whitespace-nowrap">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            className="size-[11px]"
          >
            <path fill-rule="evenodd" fill="#FFF" d="M0 8.1h22v4H0z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            className="size-[11px]"
          >
            <path
              fill-rule="evenodd"
              fill="#FFF"
              d="M22 13h-9v9H8.1v-9H0V8.1h8.1V0H13v8.1h9V13z"
            />
          </svg>
        )}
      </div>

      {/* Dropdown Menu */}
      {/* {isOpen && (
        <ul className="absolute w-full bg-black text-white max-h-60 overflow-y-auto z-50 shadow-lg pb-[10px]">
          {options.map((option, i) => (
            <li
              key={i}
              onClick={() => selectOption(option)}
              className={cn(
                "px-[20px] py-2 hover:text-secondary cursor-pointer font-light text-[15px] whitespace-nowrap",
                selectedOption?.value === option.value ? "text-secondary" : ""
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )} */}

      <ul
        className={cn(
          "absolute w-full bg-black text-white max-h-0 z-50 overflow-hidden shadow-lg transition-all custom-scrollbar",
          isOpen && "max-h-60 pb-[10px] overflow-y-auto"
        )}
      >
        {options.map((option, i) => (
          <li
            key={i}
            onClick={() => selectOption(option)}
            className={cn(
              "px-[20px] py-2 hover:text-secondary cursor-pointer font-light text-[15px] whitespace-nowrap",
              selectedOption?.value === option.value ? "text-secondary" : ""
            )}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomSelect;
