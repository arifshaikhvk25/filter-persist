import React from "react";

const Cards = ({ people }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {people.map((person, index) => (
        <div
          key={index}
          className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 transition-transform transform hover:scale-105"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{person.name}</div>
            <p className="text-gray-700 text-base mb-2">
              Gender: {person.gender}
            </p>
            <p className="text-gray-700 text-base mb-4">Size: {person.size}</p>
            <div className="mb-4">
              <h4 className="font-bold">Colors:</h4>
              <ul className="list-disc list-inside">
                {person.colors.map((color, index) => (
                  <li key={index}>{color}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Skills:</h4>
              <ul className="list-disc list-inside">
                {person.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
