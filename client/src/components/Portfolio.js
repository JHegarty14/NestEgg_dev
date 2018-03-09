import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Autocomplete, Row, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

const banks = {
  'Sallie Mae': null,
  'Fidelity': null,
  'TD Bank': null,
  'Wells Fargo': null,
  'US Government': null,
  'Other': null
}

class prevBtn extends Component {
  render() {
    return <Button onClick={this.prevPage()}>Previous</Button>
  }
}

class nextBtn extends Component {
  render() {
    return <Button onClick={this.nextPage()}>Next</Button>
  }
}

class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = this.state.bind(this);
  }

  handler(e) {
    e.preventDefault()
    this.setState({
      page: 0
    })
  }

  prevPage = () => {
    this.setState(state => ({
      page: state.page - 1
    }))
  }

  nextPage = () => {
    this.setState(state => ({
      page: state.page + 1
    }))
  }

  renderContent() {
    switch(page) {
      case 0:
        return(
          <div>
            Page 1
          </div>
        )
      case 1:
        return(
          <div>
            Page 2
          </div>
        )
    }
  }
    render() {
        return(
            <div>
              <div className="container">
                  <div id="pages">
                  {this.renderContent()}
                  <div className="page">
                    <div className="row">
                      <h5>Welcome to Nestegg!</h5>
                      <p>Let's get started with some fuckin LOAN PAYMENTS</p>
                    </div>
                    <div className="row">
                      <label for="instiution" className="input-field col s4">Select your loan provider:</label>
                    </div>
                    <div className="input-field col s8">
                      <Autocomplete id="inst" title="Institution" data={banks} />             
                    </div>
                    <div className="buttons">
                      <prevBtn handler={this.handler} />
                      <nextBtn handler={this.handler} />
                    </div>
                  </div>
                  </div>
                    <div className="row">
                    </div>
              </div>
            </div>
        )
    }
}

function mapStateToProps({ page }) {
  return { page };
}
/*SelectingFormValuesForm = reduxForm({
  form: 'selectFormValues'
})(SelectingFormValuesForm)

const selector = formValueSelector('selectFormValues')
SelectingFormValuesForm = connect(
  state => {
    const valueOther = selector(state, 'institution')
    if (valueOther === 'Other') {
      return
        valueOther
    }
  }
)(SelectingFormValuesForm)*/

export default Portfolio;