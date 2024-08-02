import React, { useCallback, useEffect, useMemo, useState } from "react";
//models
import { ScreenShotDataModel } from "./models";
// components
import LinkItem from "./components/LinkItem";
import { data } from "./components/Data";

function App() {
  const [screenShotData, setScreenShotData] = useState<
    ScreenShotDataModel | undefined
  >(undefined);

  const [selectedUrl, setSelectedUrl] = useState<string | undefined>(undefined);
  const [isError, setIsError] = useState<boolean>(false);

  const microlink = useMemo(
    () =>
      `https://api.microlink.io?url=${selectedUrl}&screenshot=true&meta=false&cachebuster= ${Date.now()}`,
    [selectedUrl]
  );

  const getScreenShotData = useCallback(() => {
    fetch(microlink)
      .then((res) => res.json())
      .then((res) => setScreenShotData(res.data))
      .catch(() => setIsError(true));
  }, [microlink]);

  const getSelecteURL = (url: string) => {
    setSelectedUrl(url);
  };

  useEffect(() => {
    getScreenShotData();
  }, [getScreenShotData]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  }, [isError]);

  return (
    <div className=" h-screen p-80">
      {isError && (
        <div className="text-red-500">Oops! something went wrong.</div>
      )}
      {data.map((item) => (
        <LinkItem
          id={item.id}
          url={item.url}
          title={item.title}
          getSelecteURL={getSelecteURL}
          removeSelectedURL={() => setSelectedUrl(undefined)}
          screenShotData={screenShotData}
        />
      ))}
    </div>
  );
}

export default App;
