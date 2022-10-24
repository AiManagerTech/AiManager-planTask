// ************************************************ //
// This page switch between types of campaigns
// Values: Multilanguage, Singlelanguage.

// ************************************************ //
// Example of URLs for QR code:
// Singlelanguage:
// http://localhost:3030/CampaignSinglelanguage?subsidiary=test
// https://survey.aimanager.online/CampaignSinglelanguage?subsidiary=test
// Multilanguage:
// http://localhost:3030/CampaignMultilanguage?subsidiary=test
// https://survey.aimanager.online/CampaignMultilanguage?subsidiary=test
// Redirection to URL when typeform finishes: https://survey.aimanager.online/options

// ************************************************ //
// Dependencies
import React, { Fragment, useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useCookies } from 'react-cookie';

// Components
import InvalidSubsidiary from './InvalidSubsidiary';
import SelectLanguage from './SelectLanguage';
import ViewSurveyParams from './ViewSurveyParams';

//  Database
import db from '../firebase/firebaseConfig';
// import ViewSurvey from './ViewSurvey';

// JSX
const Home = () => {
  // UUID for the user
  const [uuid, setUuid] = useState();
  uuid || setUuid(uuidv4()); // Set UUID if it's not set

  // States
  const [surveyData, setSurveyData] = useState({});
  const [params, setParams] = useSearchParams();
  const [hasLoaded, setHasLoaded] = useState(false);

  // Params
  const { campaign } = useParams();

  // Queries string
  let subsidiaryMin = params.get('subsidiary');

  // Get Surveys from database who match with QR code
  useEffect(() => {
    try {
      const getData = async () => {
        const surveyRef = query(
          collection(db, 'survey'),
          where('campaign', '==', campaign)
        );
        const querySnapshot = await getDocs(surveyRef);
        querySnapshot.forEach((survey) => {
          // Filter subsidiary
          // console.log(updateData.subsidiaryMin, '===', subsidiary);
          survey.data().subsidiaryMin === subsidiaryMin
            ? setSurveyData(survey.data())
            : null;
        });
        setHasLoaded(true);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Cookies
  const [cookies, setCookie, removeCookie] = useCookies();
  useEffect(() => {
    removeCookie('uuid', { path: '/' });
  }, [removeCookie]);
  useEffect(() => {
    setCookie('uuid', uuid, { path: '/', sameSite: 'Lax' });
  }, [setCookie]);

  return hasLoaded ? (
    // JSX
    <Fragment>
      {console.log('surveyData:', surveyData)}
      {/* Match campaignType and Status. TODO status false. */}
      {surveyData.status ? (
        <div>
          {{
            // Swich type. TODO: Test single Language.
            Multilanguage: (
              <SelectLanguage
                surveyData={surveyData}
                uuid={uuid}
                subsidiaryMin={subsidiaryMin}
                img={surveyData.mainImg}
                contact={surveyData.contact}
              />
            ),
            Singlelanguage: (
              <ViewSurveyParams
                uuid={uuid}
                language={Object.keys(surveyData.surveys)[0]}
                FormID={
                  surveyData.surveys[Object.keys(surveyData.surveys)[0]]
                    .typeformLink
                }
                subsidiaryMin={subsidiaryMin}
                data={surveyData.surveys[Object.keys(surveyData.surveys)[0]]}
                contact={surveyData.contact}
              />
            ),
          }[surveyData.campaignType] || console.log('No campaignType')}
        </div>
      ) : (
        // <MsjGeoLocation surveyData={surveyData} />
        // <ViewSurvey surveyData={surveyData} uuid={uuid} />
        <InvalidSubsidiary qr={qr} />
      )}
    </Fragment>
  ) : (
    // TODO: Impruve this loading screen
    <p>loading...</p>
  );
};
export default Home;
