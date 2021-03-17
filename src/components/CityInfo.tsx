import React, { memo } from "react";

const CityInfo = (props: any) => {
  const { info } = props;
  const displayName = `${info.city}, ${info.state}`;

  return (
    <div>
      <div>
        {displayName} |{" "}
        <a
          target="_new"
          href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
        >
          Wikipedia
        </a>
      </div>
      <img width={240} src={info.image} />
    </div>
  );
};

export default memo(CityInfo);
