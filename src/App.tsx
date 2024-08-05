// components
import LinkPreview from "./components/LinkPreview";

function App() {
  return (
    <div className=" h-screen p-80">
      <LinkPreview url={"https://tailwindcss.com/docs/installation"}>
        click on link to visit
      </LinkPreview>

      <LinkPreview url={"https://microlink.io/docs/sdk/integrations/react"}>
        you can also visit
      </LinkPreview>
    </div>
  );
}

export default App;
