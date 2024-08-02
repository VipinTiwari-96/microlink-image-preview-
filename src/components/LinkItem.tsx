import React, { FC } from "react";
// components
import { ImagePreview } from "./ImagePreview";
// models
import { ScreenShotDataModel } from "../models";

interface LinkItemProps {
  url: string;
  title: string;
  getSelecteURL: (url: string) => void;
  removeSelectedURL: () => void;
  screenShotData: ScreenShotDataModel | undefined;
  id: number;
}

const LinkItem: FC<LinkItemProps> = ({
  url,
  title,
  getSelecteURL,
  removeSelectedURL,
  screenShotData,
  id,
}) => {
  return (
    <ImagePreview
      image={screenShotData?.screenshot?.url}
      shoPreview={screenShotData?.url === url}
    >
      <div className="mt-4">
        <a href={url} target="_blank" className="cursor-default">
          you can visit{" "}
          <span
            className="text-xl font-semibold cursor-pointer"
            onMouseEnter={() => getSelecteURL(url)}
            onMouseLeave={removeSelectedURL}
          >
            {title}
          </span>{" "}
          to get more info.
        </a>
      </div>
    </ImagePreview>
  );
};

export default LinkItem;
