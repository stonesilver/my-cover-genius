import AllRoundInsurance from '../../components/Homepage/AllRoundInsurance/AllRoundInsurance.component';
import Banner from '../../components/Homepage/Banner/Banner.component';
import BespokePlans from '../../components/Homepage/BespokePlans/BespokePlans.component';
import BespokeSolutions from '../../components/Homepage/BespokeSolutions/BespokeSolutions.component';
import Brands from '../../components/Homepage/Brands/Brands.component';
import ClaimsAssessments from '../../components/Homepage/ClaimsAssessments/ClaimsAssessments.component';
import CoCreatingSolution from '../../components/Homepage/CoCreatingSolution/CoCreatingSolution.component';
import Faq from '../../components/Homepage/Faq/Faq.component';
import GetInsurance from '../../components/Homepage/GetInsurance/GetInsurance.component';

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
