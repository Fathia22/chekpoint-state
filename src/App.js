
import './App.css';
import { Component } from 'react';
import Compteur from './compteur';


class App extends Component{
  state ={
    fullName : 'Fathia AZZOUZI',
    bio: 'My name is Fathia AZZOUZI I m a full stack web developer', 
    imgSrc:'../image/my_photo.jpg',
    profession: 'my Profession is a Web Developer',
    show: false
    };
  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

render () {
  return (
    <div className="Profile">
       {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" className='photo'/>
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )
        }
        <button onClick={this.handleShow}>{!this.state.show ? "show" : "hide"}</button>
        <>
        <h1>Show the count</h1>
        <Compteur />
        </>
     
    </div>
  );
  }}

export default App;
