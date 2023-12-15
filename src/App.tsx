import Container from "./components/container";
import Carousel from "./components/main/carousel/carousel";
import ProductDetails from "./components/main/product-details";

const App = () => {
  return (
    <main>
      <Container>
        <div className="md:mt-12 md:grid md:grid-cols-[45%_auto] md:items-center md:gap-10 lg:items-start lg:gap-14">
          <Carousel />
          <div className="p-6 md:p-0 lg:mt-[10%]">
            <ProductDetails />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default App;
