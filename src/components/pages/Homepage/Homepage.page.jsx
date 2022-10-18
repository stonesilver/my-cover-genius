import AllRoundInsurance from './AllRoundInsurance/AllRoundInsurance.component';
import Banner from './Banner/Banner.component';
import { BespokeSolutions } from './BespokeSolutions/BespokeSolutions.component';
import Brands from './Brands/Brands.component';

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <AllRoundInsurance />
      <BespokeSolutions />
    </div>
  );
};

export default Homepage;
