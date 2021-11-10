import React from 'react';
import Select from './Select';

class Form extends React.Component {
  constructor() {
    super();


    this.state = {
        textarea: '',
        select: 'opção 1',
        checkbox: false,
        select2: 'option 1',
    }

  }
  
  handleChange = ({ target }) =>{
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { handleChange, option } = this;
    return (
      <>
        <form>
         <fieldset>
            <Select name="select2" value={this.state.select2} onChange={this.handleChange}/>
            <label>
              Teste textarea
            <textarea name="textarea"
            onChange={handleChange}
            />
            </label>
            <label>
              Teste select
              <select name="select"
              onChange={handleChange}>
                <option value="opção 1">opção 1</option>
                <option>opção 2</option>
              </select></label>
              <label>Teste de checkbox
                <input
                type="checkbox"
                name="checkbox" onChange={handleChange}></input>
              </label>
         </fieldset>
        </form>
      </>
    )
  }
}

export default Form;
