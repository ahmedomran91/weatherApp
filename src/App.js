
//author: Ahmed omran
import React,{Component} from 'react';
import Form from './Components/Form'
import Weather from './Components/Weather'
import './App.css';
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
const API_KEY ="e36ed364400282e43250b6c4c0274d44"  // from openweather map site 
class App extends Component {
  state ={
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }

  getWeather= async(e)=>{ //using (async-await) to connect with api 
    e.preventDefault();
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;

    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json();
     
    if(city&&country){this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''})}
    
    else { 
      this.setState({
      temperature:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:'There is no Data Entered! '
    })}
  }
  render(){
  return (
    <div className="wrapper">
      <div className="form-container">
      <Form  getWeather={this.getWeather}/>
      <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}/> 
      

      </div>
       
     </div>
       

  );
}}

export default App;
