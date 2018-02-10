import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TreatmentListRow = ({treatment}) => {
  return (
    <tr>
      <td><a href={treatment.watchHref} target="_blank">Select</a></td>
      <td><Link to={'/treatment/' + treatment.id}>{treatment.name}</Link></td>
      <td>{treatment.description}</td>
      <td>{treatment.author}</td>
    </tr>
  );
};

TreatmentListRow.propTypes = {
  treatment: PropTypes.object.isRequired
};

export default TreatmentListRow;
