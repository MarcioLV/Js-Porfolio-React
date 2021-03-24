import React from 'react'
import Template from './Template'
import '../styles/main.css'
import '../styles/vars.styl'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: undefined
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    const API = 'https://randomuser.me/api/'
    // const API = process.env.API;
    // const apiURl = id ? `${API}${id}` : API;
    this.setState({ loading: true, error: null})
    try {
      const response = await fetch(API);
      const data = await response.json();
      this.setState({ loading: false, data: data.results[0]})
    }catch(error){
      this.setState({ loading: false, error: error})
    }
  }

  render(){
    if(this.state.loading === true && !this.state.data){
      return <h1>Loading!</h1>
    }
    if (this.state.error){
      return <h1>Error</h1>
    }
    return <Template data={this.state.data} />
  }
}

export default App