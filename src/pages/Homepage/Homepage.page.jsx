import AllRoundInsurance from './AllRoundInsurance/AllRoundInsurance.component';
import Banner from './Banner/Banner.component';
import BespokePlans from './BespokePlans/BespokePlans.component';
import { BespokeSolutions } from './BespokeSolutions/BespokeSolutions.component';
import Brands from './Brands/Brands.component';
import ClaimsAssessments from './ClaimsAssessments/ClaimsAssessments.component';

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <AllRoundInsurance />
      <BespokeSolutions />
      <BespokePlans />
      <ClaimsAssessments />
    </div>
  );
};

export default Homepage;
