import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as treatmentActions from '../../actions/treatmentActions';
import TreatmentList from './TreatmentList';
import {browserHistory} from'react-router';

class TreatmentsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddTreatmentPage = this.redirectToAddTreatmentPage.bind(this);
    }

  treatmentRow(treatment, index){
    return <div key={index}>{treatment.name}</div>;
  }

  redirectToAddTreatmentPage() {
    browserHistory.push('/treatment');
  }

  render() {
    const {treatments} = this.props;
    return (
      <div>
        <h1>Treatments</h1>
        <input
          type="submit"
          value="Add Treatment"
          className="btn btn-primary"
          onClick={this.redirectToAddTreatmentPage}/>
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
