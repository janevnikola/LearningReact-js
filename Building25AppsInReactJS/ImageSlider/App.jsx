import ImageSlider from "./components/image-slider/ImageSlider";

function App() {
  return (
    <>
      <ImageSlider
        urlOfPictures={"https://picsum.photos/v2/list"}
        limitOfPictures={"5"}
      />
    </>
  );
}

export default App;
