import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">
          <span>{ name }</span>
        </p>
        <p data-testid="mission-year">
          <span>Ano: </span>
          { year }
        </p>
        <p data-testid="mission-country">
          <span>Pais: </span>
          { country }
        </p>
        <p data-testid="mission-destination">
          <span>Destino: </span>
          { destination }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
