"use client";
import Cards from "@/components/cards/Cards";
import SideFilter from "@/components/sideFilter/SideFilter";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterValGender = searchParams.get("gender");
  const filterValSize = searchParams.get("size");
  const filterValColors = searchParams.get("colors");

  const [size, setSize] = useState(filterValSize || "");
  const [colors, setColors] = useState(filterValColors || []);
  const [gender, setGender] = useState(filterValGender || "");

  const people = [
    {
      name: "John Doe",
      colors: ["blue", "green", "red"],
      gender: "male",
      skills: ["JavaScript", "React", "Node.js"],
      size: "large",
    },
    {
      name: "Jane Smith",
      colors: ["red", "yellow"],
      gender: "female",
      skills: ["HTML", "CSS", "Python"],
      size: "medium",
    },
    {
      name: "Sam Brown",
      colors: ["black", "white"],
      gender: "non-binary",
      skills: ["Java", "Spring", "Hibernate"],
      size: "small",
    },
    {
      name: "Alice Johnson",
      colors: ["purple", "pink"],
      gender: "female",
      skills: ["C++", "C#", "Unity"],
      size: "large",
    },
    {
      name: "Bob Lee",
      colors: ["orange", "grey"],
      gender: "male",
      skills: ["Ruby", "Rails", "Sinatra"],
      size: "medium",
    },
    {
      name: "Charlie Kim",
      colors: ["brown", "beige"],
      gender: "male",
      skills: ["PHP", "Laravel", "Symfony"],
      size: "small",
    },
    {
      name: "Diana Wang",
      colors: ["teal", "aqua"],
      gender: "female",
      skills: ["Swift", "Objective-C", "iOS Development"],
      size: "large",
    },
    {
      name: "Ethan Davis",
      colors: ["maroon", "navy"],
      gender: "male",
      skills: ["Go", "Kubernetes", "Docker"],
      size: "medium",
    },
    {
      name: "Fiona Green",
      colors: ["lime", "cyan"],
      gender: "female",
      skills: ["Perl", "Bash", "Linux"],
      size: "small",
    },
    {
      name: "George Hall",
      colors: ["violet", "indigo"],
      gender: "male",
      skills: ["TypeScript", "Angular", "NestJS"],
      size: "large",
    },
  ];

  const filterArr = people.filter(
    (el) =>
      el.gender === gender ||
      el.size === size ||
      el.colors.some((c) => colors?.includes(c))
  );

  // useEffect(() => {
  //   if (typeof window !== "undefined" && router?.query?.gender) {
  //     setGender(router?.query?.gender);
  //   }
  // }, [router.query]);

  // console.log(gender, size, filterArr);
  // const colorfill = people.filter((el) =>
  //   el.colors.some((c) => colors.includes(c))
  // );
  // console.log(colorfill, "22");

  // console.log(filterValGender, "front filterVal");
  // console.log(router, " front22", pathname);

  // console.log(pathname, " front22", paraRouter);

  console.log(colors, "front colorsss");

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col md:flex-row">
      <SideFilter
        setGender={setGender}
        setSize={setSize}
        setColors={setColors}
        colors={colors}
      />
      <div className="flex flex-wrap justify-center md:w-3/4 lg:w-4/5">
        <Cards people={filterArr.length > 0 ? filterArr : people} />
      </div>
    </div>
  );
};

export default Filter;

/////////////////

// "use client";
// import Cards from "@/components/cards/Cards";
// import SideFilter from "@/components/sideFilter/SideFilter";
// // import { useRouter } from "next/router";
// // import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";

// import { useRouter } from "next/navigation";
// import { useRouter as useQueryRouter } from "next/router";

// const Filter = () => {
//   const router = useRouter();
//   // const paramRouter = useQueryRouter();
//   // const pathname = paramRouter?.pathname;

//   // console.log(router, "r4343");
//   // console.log(pathname, "r4343");
//   const [gender, setGender] = useState("");

//   useEffect(() => {
//     if (router.isReady && router.query.gender) {
//       setGender(router.query.gender);
//     }
//   }, [router.isReady, router?.query?.gender]);

//   const [size, setSize] = useState("");
//   const [colors, setColors] = useState([]);

//   const people = [
//     {
//       name: "John Doe",
//       colors: ["blue", "green", "red"],
//       gender: "male",
//       skills: ["JavaScript", "React", "Node.js"],
//       size: "large",
//     },
//     {
//       name: "Jane Smith",
//       colors: ["red", "yellow"],
//       gender: "female",
//       skills: ["HTML", "CSS", "Python"],
//       size: "medium",
//     },
//     {
//       name: "Sam Brown",
//       colors: ["black", "white"],
//       gender: "non-binary",
//       skills: ["Java", "Spring", "Hibernate"],
//       size: "small",
//     },
//     {
//       name: "Alice Johnson",
//       colors: ["purple", "pink"],
//       gender: "female",
//       skills: ["C++", "C#", "Unity"],
//       size: "large",
//     },
//     {
//       name: "Bob Lee",
//       colors: ["orange", "grey"],
//       gender: "male",
//       skills: ["Ruby", "Rails", "Sinatra"],
//       size: "medium",
//     },
//     {
//       name: "Charlie Kim",
//       colors: ["brown", "beige"],
//       gender: "male",
//       skills: ["PHP", "Laravel", "Symfony"],
//       size: "small",
//     },
//     {
//       name: "Diana Wang",
//       colors: ["teal", "aqua"],
//       gender: "female",
//       skills: ["Swift", "Objective-C", "iOS Development"],
//       size: "large",
//     },
//     {
//       name: "Ethan Davis",
//       colors: ["maroon", "navy"],
//       gender: "male",
//       skills: ["Go", "Kubernetes", "Docker"],
//       size: "medium",
//     },
//     {
//       name: "Fiona Green",
//       colors: ["lime", "cyan"],
//       gender: "female",
//       skills: ["Perl", "Bash", "Linux"],
//       size: "small",
//     },
//     {
//       name: "George Hall",
//       colors: ["violet", "indigo"],
//       gender: "male",
//       skills: ["TypeScript", "Angular", "NestJS"],
//       size: "large",
//     },
//   ];

//   const filterArr = people.filter(
//     (el) =>
//       (!gender || el.gender === gender) &&
//       (!size || el.size === size) &&
//       (colors.length === 0 || el.colors.some((c) => colors.includes(c)))
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 flex flex-col md:flex-row">
//       <SideFilter
//         gender={gender}
//         setGender={setGender}
//         setSize={setSize}
//         setColors={setColors}
//         colors={colors}
//       />
//       <div className="flex flex-wrap justify-center md:w-3/4 lg:w-4/5">
//         <Cards people={filterArr.length > 0 ? filterArr : people} />
//       </div>
//     </div>
//   );
// };

// export default Filter;
