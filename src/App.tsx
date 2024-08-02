import React, { useEffect, useState } from "react";
import { ScreenShotModel } from "./models";
import LinkPreview from "./components/LinkPreview";
import Microlink from "@microlink/react";

const dummyUrls: ScreenShotModel[] = [
  {
    url: "https://tailwindcss.com/docs/installation",
    title: "Tailwind docs",
  },
  {
    url: "https://www.npmjs.com/package/@microlink/react",
    title: "Microlink docs",
  },
];

function App() {
  const [screenShotData, setScreenShotData] = useState<ScreenShotModel[]>([]);
  const [selectedUrl, setSelectedUrl] = useState<string>("");

  const getScreenShots = () => {
    const url = "";
  };

  const getSelecteURL = (url: string) => {
    setSelectedUrl(url);
  };

  const removeSelectedURL = () => {
    setSelectedUrl("");
  };

  useEffect(() => {}, []);

  return (
    <div className="p-20">
      {dummyUrls.map((item) => (
        <LinkPreview
          url={item.url}
          title={item.title}
          getSelecteURL={getSelecteURL}
          removeSelectedURL={removeSelectedURL}
        />
      ))}
    </div>
  );
}

export default App;
