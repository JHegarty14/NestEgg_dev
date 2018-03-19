import React, { Component } from 'react';
import { Autocomplete, Row, Button } from 'react-materialize';
import { reduxForm, formValueSelector } from 'redux-form';
import Page1 from './portFlow/page1';
import Page2 from './portFlow/page2';
import Page3 from './portFlow/page3';

const banks = {
  'Sallie Mae': null,
  'Fidelity': null,
  'TD Bank': null,
  'Wells Fargo': null,
  'US Government': null,
  'Other': null
}

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      todos: [<Page1 />, <Page2 />, <Page3 />],
      currentPage: 1,
      todosPerPage: 1
    };
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  prevPage(event) {
    event.preventDefault();
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  }

  nextPage(event) {
    event.preventDefault();
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <div key={index}>{todo}</div>;
    });

    // Logic for displaying nav buttons
    const pageNumbers = [1];

    const renderButtons = pageNumbers.map(number => {
      if (this.state.currentPage === 1) {
        return(
          <Row>
            <Button type="submit" value="submit" onClick={this.nextPage}>Next</Button>
          </Row>
        )
      } else if (this.state.currentPage === todos.length) {
        return(
          <Row>
            <Button onClick={this.prevPage}>Previous</Button>
            <Button type="submit" value="submit">Submit</Button>
          </Row>
        )
      }
      return (
        <Row>
          <Button onClick={this.prevPage}>Previous</Button>
          <Button type="submit" value="submit" onClick={this.nextPage}>Next</Button>
        </Row>
      );
    });

    return (
      <div className="container">
        <form method="POST" action="/auth/portfolio">
          {renderTodos}
          {renderButtons}
        </form>
      </div>
    );
  }
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