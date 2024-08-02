import React, { FC } from "react";

interface ImagePreview {
  image: string | undefined;
  children: React.ReactNode;
  shoPreview: boolean;
}
export const ImagePreview: FC<ImagePreview> = ({
  image,
  children,
  shoPreview,
}) => {
  return (
    <div className=" relative">
      {image && shoPreview && (
        <div className="absolute -top-72 p-5 drop-shadow-2xl rounded-lg transition-opacity ease-linear duration-900">
          <img src={image} width={400} height={200} />
        </div>
      )}
      {children}
    </div>
  );
};
