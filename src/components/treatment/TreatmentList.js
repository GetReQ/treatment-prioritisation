import React, {PropTypes} from 'react';
import TreatmentListRow from './TreatmentListRow';

const TreatmentList = ({treatments}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Author</th>
        <th>Unit Cost</th>
        <th>Life</th>
      </tr>
      </thead>
      <tbody>
      {treatments.map(treatment =>
        <TreatmentListRow key={treatment.id} treatment={treatment} />
      )}
      </tbody>
    </table>
  );
};

TreatmentList.propTypes = {
  treatments: PropTypes.array.isRequired
};

export default TreatmentList;
