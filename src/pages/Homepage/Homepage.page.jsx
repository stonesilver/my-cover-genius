import AllRoundInsurance from './AllRoundInsurance/AllRoundInsurance.component';
import Banner from './Banner/Banner.component';
import BespokePlans from './BespokePlans/BespokePlans.component';
import { BespokeSolutions } from './BespokeSolutions/BespokeSolutions.component';
import Brands from './Brands/Brands.component';

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <AllRoundInsurance />
      <BespokeSolutions />
      <BespokePlans />
    </div>
  );
};

export default Homepage;
