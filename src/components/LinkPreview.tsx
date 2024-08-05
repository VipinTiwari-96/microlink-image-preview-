import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
// models
import { ScreenShotDataModel } from "../models";

interface LinkPreviewProps {
  url: string;
  children: ReactNode;
}
const LinkPreview: FC<LinkPreviewProps> = ({ url, children }) => {
  const [screenShotData, setScreenShotData] = useState<
    ScreenShotDataModel | undefined
  >(undefined);

  const [selectedUrl, setSelectedUrl] = useState<string | undefined>(undefined);

  const microlink = useMemo(
    () =>
      `https://api.microlink.io?url=${selectedUrl}&screenshot=true&meta=false`,
    [selectedUrl]
  );

  const getScreenShotData = useCallback(() => {
    fetch(microlink)
      .then((res) => res.json())
      .then((res) => setScreenShotData(res.data))
      .catch(() => console.log("something went wrong!"));
  }, [microlink]);

  useEffect(() => {
    getScreenShotData();
  }, [getScreenShotData]);

  const imageUrl = useMemo(
    () => screenShotData?.screenshot?.url,
    [screenShotData]
  );

  return (
    <div className=" relative">
      {imageUrl && (
        <div className="absolute -top-72 p-5 drop-shadow-2xl rounded-lg transition-opacity ease-linear duration-900">
          <img src={imageUrl} width={400} height={200} />
        </div>
      )}
      <div className="mt-4">
        <a href={url} target="_blank" className="cursor-default">
          <span
            className="text-xl font-semibold cursor-pointer"
            onMouseEnter={() => setSelectedUrl(url)}
            onMouseLeave={() => setSelectedUrl(undefined)}
          >
            {children}
          </span>
        </a>
      </div>
    </div>
  );
};

export default LinkPreview;
