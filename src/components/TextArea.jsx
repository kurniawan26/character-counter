import React, { useState } from 'react';

function TextArea({
  value,
  minute = 0,
  onChangeInput,
  onChangeExcludeSpaces = () => {},
}) {
  const [characterLimit, setCharacterLimit] = useState(0);
  const [isCharacterLimit, setIsCharacterLimit] = useState(false);

  return (
    <div className="textarea-container">
      <div className="border p-2 rounded bg-neutral-100 dark:bg-neutral-900 dark:border-purple-500 border-neutral-200">
        <textarea
          value={value}
          onChange={(e) => {
            if (isCharacterLimit && e.target.value.length > characterLimit) {
              return;
            }
            onChangeInput(e.target.value);
          }}
          className="w-full min-h-[200px] placeholder:h-full dark:text-neutral-100 placeholder:text-neutral-700 dark:placeholder:text-neutral-200 active:outline-none focus:outline-none"
          placeholder="Start typing here… (or paste your text)"
        />
      </div>

      {+characterLimit === +value.length && isCharacterLimit ? (
        <div className="flex gap-2 items-center mt-2">
          <img src="/assets/images/icon-info.svg" alt="info" />
          <p className="text-preset-4 text-red-500">
            Limit reached! Your text exceeds {characterLimit} characters.
          </p>
        </div>
      ) : null}

      <div className="information-container flex md:flex-row flex-col justify-between mt-2">
        <div className="flex gap-4 flex-col md:flex-row mt-2">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              id="exclude-spaces"
              onChange={onChangeExcludeSpaces}
            />
            <label className="text-preset-4" htmlFor="exclude-spaces">
              Exclude Spaces
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              id="set-character-limit"
              onChange={(e) => setIsCharacterLimit(e.target.checked)}
            />
            <label className="text-preset-4" htmlFor="set-character-limit">
              Set Character Limit
            </label>
            {isCharacterLimit && (
              <div className="max-w-[55px] border pl-2 rounded border-neutral-600 ">
                <input
                  type="number"
                  min={0}
                  className="active:outline-none focus:outline-none w-full"
                  onChange={(e) => setCharacterLimit(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>

        <p className="text-preset-4">Approx. reading time: {minute} minute</p>
      </div>
    </div>
  );
}

export default TextArea;
