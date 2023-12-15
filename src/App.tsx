import Container from "./components/container";
import Carousel from "./components/main/carousel/carousel";
import ProductDetails from "./components/main/product-details";

const App = () => {
  return (
    <main>
      <Container>
        <div className="md:mt-12 md:grid grid-cols-2 items-center gap-6">
          <Carousel />
          <ProductDetails />
        </div>
      </Container>
    </main>
  );
};

export default App;
