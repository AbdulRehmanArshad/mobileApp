import Banner from "../../components/Banner";
import BestSellingProduct from "../../components/BestSelingProduct";
import Carousel from "../../components/Carousel";
import Nav from "../../components/NavigationBar";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <Banner />
      {/* <Cart /> */}
      <BestSellingProduct />
      <Carousel />
    </>
  );
};

export default Dashboard;
