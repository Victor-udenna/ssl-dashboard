import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressCardStyle from './ProgressCardStyle';
import ximg from '../../../assets/icons/X.svg';
import Text from '../../atom/Text/Text';

const ProgressCard = () => {
  return (
    <ProgressCardStyle>
      <div className="progress-section">
        <img className="close-icon" src={ximg} />
        <div className="progress-container">
          <CircularProgressbar
            value={86}
            text={`${86}%`}
            styles={buildStyles({
              pathColor: '#6a5af9',
              textColor: '#6a5af9',
              trailColor: '#ddd',
            })}
          />
        </div>
      </div>
      <div className="content">
        <Text className="title" value={'Subscription Plan'} />
        <Text className="description" value={'Your subscription plan will expire soon please upgrade!'} />
        <Text className="upgrade-link" value={'Upgrade'} />
      </div>
    </ProgressCardStyle>
  );
};

export default ProgressCard;
