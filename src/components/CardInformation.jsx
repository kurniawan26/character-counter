import clsx from 'clsx';
import React from 'react';

function CardInformation({ totalCharacters, labelCard, className }) {
  return (
    <div
      className={clsx(
        'card rounded min-h-[150px] flex justify-center flex-col p-4 bg-pattern',
        className
      )}
    >
      <p className="text-preset-1 dark:text-neutral-900">{totalCharacters}</p>
      <h2 className="text-preset-3 dark:text-neutral-900">{labelCard}</h2>
    </div>
  );
}

export default CardInformation;
