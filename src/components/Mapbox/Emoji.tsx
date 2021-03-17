import React, { FC } from "react";

interface IProps {
  symbol: string;
  label: string;
}

export const Emoji: FC<IProps> = ({ symbol, label }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);
