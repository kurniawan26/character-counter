import React, { useState } from 'react';

function LetterDensity({ letterDensity }) {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <>
      {letterDensity.length > 0 ? (
        <>
          {letterDensity
            .slice(0, seeMore ? letterDensity.length : 5)
            .map(({ letter, density, totalLetters }) => (
              <div className="flex gap-2 items-center" key={letter}>
                <p className="text-preset-4">{letter.toUpperCase()}</p>
                <div className="w-full bg-neutral-100 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-purple-400 h-2.5 rounded-full"
                    style={{
                      width: `${density}%`,
                      transition: 'width 0.5s',
                    }}
                  ></div>
                </div>
                <p className="text-preset-4  flex gap-2">
                  {totalLetters} <span>({Math.ceil(density)}%)</span>
                </p>
              </div>
            ))}
          {letterDensity.length > 5 && (
            <div className="flex gap-2 items-center">
              <button
                className="text-preset-4"
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'See Less' : 'See More'}
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-preset-4">
          No characters found. Start typing to see letter density.
        </p>
      )}
    </>
  );
}

export default LetterDensity;
