import React,{useState} from "react";
import S from "styled-components";
import OnboardInterestList from "./components/OnboardInterestList";


const InterestListPage = () => {

  return (
    <StyledMainSection>
      <OnboardingAboutPageContainer>
        <PageTitle>Select some things you are interested in.</PageTitle>
        <SubHeading>
          Don't worry, you will be able to change these later.
        </SubHeading>
      </OnboardingAboutPageContainer>
      <OnboardInterestList/>
    </StyledMainSection>
  );
};
export default InterestListPage;

const StyledMainSection = S.main`
    margin-top: 100px;
`;
const OnboardingAboutPageContainer = S.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin 40px 0;
`;
const PageTitle = S.h2`
    font-size: 4rem;
    width: 100%;
`;
const SubHeading = S.p`
    font-size: 2.4rem;
    width: 100%;
    color: #0077ff;
    font-style: italic;
`;