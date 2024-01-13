"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar(params: { title: string }) {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { title } = params;

  function createQueryString(name: string, value: string) {
    const params = new URLSearchParams();
    params.set(name, value);
    return params.toString();
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (pathName === "/user") {
      const query = createQueryString("name", search);
      router.push(pathName + "?" + query);
    } else {
      const query = createQueryString("title", search);
      router.push(pathName + "?" + query);
    }
  }

  return (
    <div className="w-full border border-primary bg-card-primary h-50 p-4   rounded-md">
      <h3 className="font-bold text-lg">Search {title}</h3>
      <div className="mb-5 mt-5">
        <form>
          <input
            type="text"
            id="search"
            className=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder={`Seacrh by ${title.toLowerCase()}`}
            onChange={(e) => setSearch(e.target.value)}
            required
          />

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
