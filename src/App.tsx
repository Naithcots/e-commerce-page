import Container from "./components/container";
import Carousel from "./components/main/carousel/carousel";
import ProductDetails from "./components/main/product-details";

const App = () => {
  return (
    <main>
      <Container>
        <Carousel />
        {/* <ProductDetails /> */}
      </Container>
    </main>
  );
};

export default App;
