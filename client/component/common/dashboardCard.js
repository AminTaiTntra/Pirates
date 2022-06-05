import React from 'react';
import { Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const DashboardCard = ({
  label,
  imagePath,
  colorClass,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  history,
  id
}) => {
  return (
    <Col xs={xs || 4} sm={sm || 6} md={md || 4} lg={lg || 4} xl={xl || 3}>
      <div className="cardWrapper" onClick={() => history.push(`rms-team/${id}`)}>
        <Card>
          <Card.Body className={`dashboard-card  + ${className}`}>
            <h5>{label}</h5>
           <div className="icon white">
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default DashboardCard;
