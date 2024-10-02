import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const SideFilter = ({ setSize, setGender, setColors, colors }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterValGender = searchParams.get("gender");

  const colorOptions = [
    "none",
    "blue",
    "green",
    "red",
    "yellow",
    "black",
    "white",
    "purple",
    "pink",
    "orange",
    "grey",
    "brown",
    "beige",
    "teal",
    "aqua",
    "maroon",
    "navy",
    "lime",
    "cyan",
    "violet",
    "indigo",
  ];

  // next js documentation new update for router
  const createQueryString = useCallback(
    (name, value) => {
      // console.log(value, "front value", name);

      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value); // Set the new query parameter
      } else {
        params.delete(name); // Remove the query parameter if value is empty
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleSelectChange = (e) => {
    const value = e?.target?.value;
    // setColors([...colors, value]);

    setColors((prevSelectedOptions) => {
      let updatedColor = [];
      console.log(prevSelectedOptions, "front prev");
      if (prevSelectedOptions?.includes(value)) {
        console.log("front 11");
        updatedColor = prevSelectedOptions?.filter(
          (option) => option !== value
        );
        // return prevSelectedOptions.filter((option) => option !== value);
      } else {
        console.log("front 222");
        updatedColor = [...prevSelectedOptions, value];
        // return [...prevSelectedOptions, value];
      }
      router.push(
        `${pathname}?${createQueryString(
          "colors",
          updatedColor?.includes("none") ? "" : updatedColor
        )}`,
        {
          shallow: true,
        }
      );
      console.log(updatedColor, "front updatedColor");

      return updatedColor;
    });
    // console.log(value, "front value");

    // router?.push(
    //   `${pathname}?${createQueryString("colors", updatedColor?.join(","))}`,
    //   {
    // router.push(
    //   `${pathname}?${createQueryString("colors", prevSelectedOptions)}`,
    //   {
    //     shallow: true,
    //   }
    // );
    // return updatedColor;
  };
  console.log(colors, "front value");

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setGender(value);
    router.push(`${pathname}?${createQueryString("gender", value)}`, {
      shallow: true,
    });
  };

  // console.log(colors, "front colors");

  // const updateGenderQueryParam = (value) => {
  //   if (typeof window !== "undefined") {
  //     const newQuery = { ...router.query, gender: value };
  //     if (!value) delete newQuery.gender;
  //     router.push({ pathname: router.pathname, query: newQuery }, undefined, {
  //       shallow: true,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   if (router.query && router.query.gender) setGender(router.query.gender);
  // }, [router.query]);
  // console.log(colors, "11", router);

  // Function to create a new query string by merging existing parameters

  return (
    <div className="w-full md:w-1/4 lg:w-1/5 bg-white shadow-lg rounded p-4 m-4">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="gender">
          Gender
        </label>
        <select
          id="gender"
          className="block w-full p-2 border rounded"
          onChange={handleGenderChange}
          // onChange={(e) => {
          //   // setGender(e.target.value);
          // }}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="size">
          Size
        </label>
        <select
          id="size"
          className="block w-full p-2 border rounded"
          onChange={(e) => {
            setSize(e.target.value);
            router.push(
              `${pathname}?${createQueryString("size", e?.target?.value)}`,
              {
                shallow: true,
              }
            );
          }}
        >
          <option value="">All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="color">
          Colors
        </label>
        <select
          multiple
          value={colors}
          onChange={handleSelectChange}
          className="block w-full p-2 border rounded"
        >
          {colorOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SideFilter;

//////////////

// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// // import { useRouter } from "next/router";

// const SideFilter = ({ gender, setSize, setGender, setColors, colors }) => {
//   const router = useRouter();

//   const handleGenderChange = (e) => {
//     const value = e.target.value;
//     setGender(value);
//     updateGenderQueryParam(value);
//   };

//   const handleSizeChange = (e) => {
//     setSize(e.target.value);
//   };

//   const updateGenderQueryParam = (value) => {
//     const newQuery = { ...router.query, gender: value };
//     if (!value) delete newQuery.gender;
//     router.push({ pathname: router.pathname, query: newQuery }, undefined, {
//       shallow: true,
//     });
//   };

//   useEffect(() => {
//     if (router.isReady && router.query.gender) {
//       setGender(router.query.gender);
//     }
//   }, [router.isReady, router.query]);

//   return (
//     <div className="w-full md:w-1/4 lg:w-1/5 bg-white shadow-lg rounded p-4 m-4">
//       <h2 className="text-2xl font-bold mb-4">Filters</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2" htmlFor="gender">
//           Gender
//         </label>
//         <select
//           id="gender"
//           className="block w-full p-2 border rounded"
//           value={gender}
//           onChange={handleGenderChange}
//         >
//           <option value="">All</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="non-binary">Non-binary</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2" htmlFor="size">
//           Size
//         </label>
//         <select
//           id="size"
//           className="block w-full p-2 border rounded"
//           onChange={handleSizeChange}
//         >
//           <option value="">All</option>
//           <option value="small">Small</option>
//           <option value="medium">Medium</option>
//           <option value="large">Large</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2" htmlFor="color">
//           Colors
//         </label>
//         <select
//           multiple
//           value={colors}
//           onChange={(e) =>
//             setColors([...e.target.selectedOptions].map((o) => o.value))
//           }
//           className="block w-full p-2 border rounded"
//         >
//           {[
//             "blue",
//             "green",
//             "red",
//             "yellow",
//             "black",
//             "white",
//             "purple",
//             "pink",
//             "orange",
//             "grey",
//             "brown",
//             "beige",
//             "teal",
//             "aqua",
//             "maroon",
//             "navy",
//             "lime",
//             "cyan",
//             "violet",
//             "indigo",
//           ].map((color, index) => (
//             <option key={index} value={color}>
//               {color}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SideFilter;
