import React, { FC } from "react";

interface LinkPreviewProps {
  url: string;
  title: string;
  getSelecteURL: (v: string) => void;
  removeSelectedURL: () => void;
}

const LinkPreview: FC<LinkPreviewProps> = ({
  url,
  title,
  getSelecteURL,
  removeSelectedURL,
}) => {
  return (
    <div>
      <a
        href={"/"}
        target="_blank"
        onMouseEnter={() => getSelecteURL(url)}
        onMouseLeave={removeSelectedURL}
      >
        {title}
      </a>
    </div>
  );
};

export default LinkPreview;
