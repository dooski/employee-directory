import React, { Component } from 'react'
const data = require('./Data')

class App extends Component {
  state = { dir: data }
  handleFirstAZ = _ => {
    let dir = JSON.parse(JSON.stringify(this.state.dir))
    dir.sort((a, b) => a.first_name.localeCompare(b.first_name))
    this.setState({ dir: dir })
  }

  handleFirstZA = _ => {
    let dir = JSON.parse(JSON.stringify(this.state.dir))
    dir.sort((b, a) => a.first_name.localeCompare(b.first_name))
    this.setState({ dir: dir })
  }

  handleLastAZ = _ => {
    let dir = JSON.parse(JSON.stringify(this.state.dir))
    dir.sort((a, b) => a.last_name.localeCompare(b.last_name))
    this.setState({ dir: dir })
  }

  handleLastZA = _ => {
    let dir = JSON.parse(JSON.stringify(this.state.dir))
    dir.sort((b, a) => a.last_name.localeCompare(b.last_name))
    this.setState({ dir: dir })
  }

  handleEmailAZ = _ => {
    let dir = JSON.parse(JSON.stringify(this.state.dir))
    dir.sort((a, b) => a.email.localeCompare(b.email))
    this.setState({ dir: dir })
  }

  handleEmailZA = _ => {
    let dir = JSON.parse(JSON.stringify(this.state.dir))
    dir.sort((b, a) => a.email.localeCompare(b.email))
    this.setState({ dir: dir })
  }

  handleRoleFilter = ({ target }) => {
    let dir
    switch (target.value) {
      case 'All':
        dir = data.filter((a) => (a.role !== null))
        break
      case 'Managing Editor':
        dir = data.filter((a) => (a.role === 'Managing Editor'))
        break
      case 'Poetry Editor':
        dir = data.filter((a) => (a.role === 'Poetry Editor'))
        break
      case 'Artist':
        dir = data.filter((a) => (a.role === 'Artist'))
        break
      default:
        dir = data
        break
    }
    this.setState({ dir: dir })
  }


  render() {
    return (
      <>
        <div className='uk-padding-large center title-card'><h2 className='uk-heading-small'>Pineapple Magazine Employee Directory</h2></div>
        <div className='uk-container center'>
          <br>
          </br>
          <br></br>
          <table className='uk-table uk-table-striped center'>
            <thead>
              <tr>
                <th>
                  <button className='uk-button-small' onClick={this.handleFirstAZ}>&#x2191;</button>
                  <button className='uk-button-small' onClick={this.handleFirstZA}>&#x2193;</button>
                  <br></br>First Name
                  </th>
                <th>
                  <button className='uk-button-small' onClick={this.handleLastAZ}>&#x2191;</button>
                  <button className='uk-button-small' onClick={this.handleLastZA}>&#x2193;</button>
                  <br></br>Last Name
                  </th>
                <th>
                  <button className='uk-button-small' onClick={this.handleEmailAZ}>&#x2191;</button>
                  <button className='uk-button-small' onClick={this.handleEmailZA}>&#x2193;</button>
                  <br></br>Email Address
                  </th>
                <th>
                  <select className='uk-select uk-form-width-small' defaultValue={this.state.selectValue} onChange={this.handleRoleFilter}>
                    <option value="All">All</option>
                    <option value="Managing Editor">Managing Editor</option>
                    <option value="Poetry Editor">Poetry Editor</option>
                    <option value="Artist">Artist</option>
                  </select>
                  <br></br>Role
                  </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.dir.map(elem => (
                  <tr key={elem.id}>
                    <td>{elem.first_name}</td>
                    <td>{elem.last_name}</td>
                    <td>{elem.email}</td>
                    <td>{elem.role}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default App