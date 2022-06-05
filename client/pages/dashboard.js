import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DashboardCard from '../component/common/dashboardCard';
import FullScreenLoader from '../component/common/fullScreenLoader';
// import { getTeamList } from '../apis/roleManagement';
// import { fetchTeam } from '../apis/teamManagement';
import { constants } from '../constants';
import { dashboardClassName, dashboardPath, imagePath } from '../utility/mappers';


const Dashboard = ({ history }) => {
  const { dashboard } = constants || {};
  const { title } = dashboard;

  const [state, setState] = useState({
    isLoading: false,
    teamData: [],
  })

  // useEffect(() => {
  //   fetchTeamData();
  // }, []);

  const { isLoading, teamData } = state;

  const fetchTeamData = () => {
    setState({
      ...state,
      isLoading: true
    })
    // getTeamList().then((res) => {
    //   if (res?.data?.success) {
    //     setState({
    //       ...state,
    //       teamData: res?.data?.teams,
    //       isLoading: false,
    //     });
    //   }
    // }).catch((e) => {
    //   setState({
    //     ...state,
    //     teamData: [],
    //     isLoading: false,
    //   })
    // });
  }
  return (
    <Container fluid className="dashboard">
      <div>
        <h5 class="mb-4">{title}</h5>
      </div>
      <Row className="small-data-card-info">
        {isLoading && <FullScreenLoader />}

        {teamData && Object.keys(teamData).length > 0 && Object.keys(teamData).map((item, index) => {
          let value = teamData?.[item]?.toLowerCase()
          return (
            <DashboardCard
              history={history}
              key={item}
              id={item}
              label={teamData?.[item]}
              colorClass={item?.color}
              imagePath={imagePath?.[value]}
              path={dashboardPath?.[value]}
              className={dashboardClassName?.[value]}
            />
          )
        })}
      </Row>
    </Container>
  );
};

export default Dashboard;
