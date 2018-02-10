import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as treatmentActions from '../../actions/treatmentActions';
import TreatmentList from './TreatmentList';

class TreatmentsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    }

  treatmentRow(treatment, index){
    return <div key={index}>{treatment.name}</div>;
  }

  render() {
    const {treatments} = this.props;
    return (
      <div>
        <h1>Treatments</h1>
        <TreatmentList treatments={treatments}/>
      </div>
    );
  }
}

TreatmentsPage.propTypes = {
  treatments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    treatments: state.treatments
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(treatmentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentsPage);
