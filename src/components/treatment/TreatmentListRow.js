import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TreatmentListRow = ({treatment}) => {
  return (
    <tr>
      <td><Link to={'/treatment/' + treatment.name}>{treatment.name}</Link></td>
      <td>{treatment.description}</td>
      <td>{treatment.author}</td>
      <td>{treatment.unitCost}</td>
      <td>{treatment.life}</td>
    </tr>
  );
};

TreatmentListRow.propTypes = {
  treatment: PropTypes.object.isRequired
};

export default TreatmentListRow;
