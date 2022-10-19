import AllRoundInsurance from './AllRoundInsurance/AllRoundInsurance.component';
import Banner from './Banner/Banner.component';
import BespokePlans from './BespokePlans/BespokePlans.component';
import BespokeSolutions from './BespokeSolutions/BespokeSolutions.component';
import Brands from './Brands/Brands.component';
import ClaimsAssessments from './ClaimsAssessments/ClaimsAssessments.component';
import CoCreatingSolution from './CoCreatingSolution/CoCreatingSolution.component';
import Faq from './Faq/Faq.component';
import GetInsurance from './GetInsurance/GetInsurance.component';

const Homepage = () => {
  return (
    <>
      <Banner />
      <Brands />
      <AllRoundInsurance />
      <BespokeSolutions />
      <BespokePlans />
      <ClaimsAssessments />
      <GetInsurance />
      <CoCreatingSolution />
      <Faq />
    </>
  );
};

export default Homepage;
