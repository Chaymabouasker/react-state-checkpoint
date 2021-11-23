import React from "react";
import '../style.css'
export default class Profile extends React.Component {
   
        state = {
            Person: {
                ImgSrc:<img style={{borderRadius:'100%', width:"280px" , height:"300px" }} src='./picture.jpg' alt="mypic"/>,
                FullName:"David Smith",
                Profession:"Full-Stack JS Developer",
                Bio:"I am a freelance web designer and developer based in Los Angeles. I strive to create simple, original, and impactful user experiences.",
            },
            Timer: 0,
            Interval: null,
        }
   

    componentDidMount() {
        this.setState({
            Interval: setInterval(() => {
                this.setState({ Timer: this.state.Timer + 1 });
            }, 1000),
        });
    }

    render() {
        return (
         <div className="profile-card" >
      
        
         <ul>
           <div><li className="pic" >{this.state.Person.ImgSrc}</li></div>
           <div className="container">
             <li><span className='label'>Name: </span>{this.state.Person.FullName}</li>
             <br/>
             <li><span className='label'>Bio: </span>{this.state.Person.Bio}</li> 
             <br/>
             <li><span className='label'>Profession: </span>{this.state.Person.Profession}</li>
           </div>
           <button className="btn">{this.state.Timer}</button>
           
        </ul>
         
         
      
        
      </div>
            
        );
    }}
