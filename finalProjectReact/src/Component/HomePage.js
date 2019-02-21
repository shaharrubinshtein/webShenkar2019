import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import './HomePage.css';
import Box from './Box';
import ShowCloseSheltersFirst from './ShowCloseSheltersFirst';
import './ShowCloseSheltersFirst.css';
import AddShelterFirst from './AddShelterFirst';
import './AddShelterFirst.css';
import AddHospitalityFirst from './AddHospitalityFirst';
import FindHospitalityFirst from './FindHospitalityFirst';


class HomePage extends Component{

    componentDidMount () {
        
    }


    constructor(props){
        super(props);

        this.state={
            pages:[
                {

                    id:1,
                    name:'ShowCloseShelters',
                    flag:0
                },
                {
                    id:2,
                    name:'AddShelter',
                    flag:0
                },
                {
                    id:3,
                    name:'FindHospitality',
                    flag:0
                },
                {
                    id:4,
                    name:'AddHospitality',
                    flag:0

                }
            ],
            token:'null',
            googleEmail:'null',
            signInFlag:0
          
        }

     
        this.run=this.run.bind(this);
        this.update=this.update.bind(this);
        this.AddShelter=this.AddShelter.bind(this);
        this.ShowCloseShelters=this.ShowCloseShelters.bind(this);
        this.google=this.google.bind(this);
        this.loadProfile=this.loadProfile.bind(this);
        this.fromStart=this.fromStart.bind(this);
        this.AddHospitality=this.AddHospitality.bind(this);
        this.FindHospitality=this.FindHospitality.bind(this);
       
    
    }

    google(response){
        this.setState({
            pages:[
                {

                    id:1,
                    name:'ShowCloseShelters',
                    flag:0
                },
                {
                    id:2,
                    name:'AddShelter',
                    flag:0
                },
                {
                    id:3,
                    name:'FindHospitality',
                    flag:0
                },
                {
                    id:4,
                    name:'AddHospitality',
                    flag:0

                }
            ],
            token:response.Zi.id_token,
            googleEmail:response.w3.U3,
            signInFlag:1

        })
       
        //this.state.token=response.Zi.id_token;
      
       // console.log(response.Zi.id_token);
       // console.log(response.w3.U3);
        

    }


    FindHospitality(){
        this.setState({
            pages:this.state.pages.map((page)=>{
                    if(page.name==='FindHospitality'){
                        return {id:page.id,name:page.name,flag:1}
                    }else{
                        return {id:page.id,name:page.name,flag:0}
                    }
            })

        })


    }




    AddHospitality(){
        this.setState({
            pages:this.state.pages.map((page)=>{
                    if(page.name==='AddHospitality'){
                        return {id:page.id,name:page.name,flag:1}
                    }else{
                        return {id:page.id,name:page.name,flag:0}
                    }
            })

        })

    }

 

    AddShelter(){
        this.setState({
            pages:this.state.pages.map((page)=>{
                    if(page.name==='AddShelter'){
                        return {id:page.id,name:page.name,flag:1}
                    }else{
                        return {id:page.id,name:page.name,flag:0}
                    }
            })

        })

    }



    ShowCloseShelters(){
        this.setState({
            pages:this.state.pages.map((page)=>{
                    if(page.name==='ShowCloseShelters'){
                        return {id:page.id,name:page.name,flag:1}
                    }else{
                        return {id:page.id,name:page.name,flag:0}
                    }
            })

        })
    }

    fromStart(){
        this.setState({
            pages:[
                {

                    id:1,
                    name:'ShowCloseShelters',
                    flag:0
                },
                {
                    id:2,
                    name:'AddShelter',
                    flag:0
                },
                {
                    id:3,
                    name:'FindHospitality',
                    flag:0
                },
                {
                    id:4,
                    name:'AddHospitality',
                    flag:0

                }
            ],
            token:'null',
            googleEmail:'null',
            signInFlag:0
        })

    }


    update(x,y){
        alert(x);
        alert(y);
    }

    run(item,i){
        
        if(item.flag===1 && item.name==='ShowCloseShelters'){
            
            document.getElementById('ShowCloseSheltersBox').style.color="green";
            document.getElementById('AddShelterBox').style.color="black";
            document.getElementById('FindHospitalityBox').style.color="black";
            document.getElementById('AddHospitalityBox').style.color="black";
            return <ShowCloseSheltersFirst key={i} index={i} onChange={this.update}>{this.state.token}</ShowCloseSheltersFirst>
        }else if(item.flag===1 && item.name==='AddShelter'){
            document.getElementById('ShowCloseSheltersBox').style.color="black";
            document.getElementById('AddShelterBox').style.color="green";
            document.getElementById('FindHospitalityBox').style.color="black";
            document.getElementById('AddHospitalityBox').style.color="black";
            return <AddShelterFirst key={i} index={i} onChange={this.update}>{this.state.token}</AddShelterFirst>
        }else if(item.flag===1 && item.name==='AddHospitality'){
            document.getElementById('ShowCloseSheltersBox').style.color="black";
            document.getElementById('AddShelterBox').style.color="black";
            document.getElementById('FindHospitalityBox').style.color="black";
            document.getElementById('AddHospitalityBox').style.color="green";
            return <AddHospitalityFirst key={i} index={i} onChange={this.update}>{this.state.token}</AddHospitalityFirst>
        }else if(item.flag===1 && item.name==='FindHospitality'){
            document.getElementById('ShowCloseSheltersBox').style.color="black";
            document.getElementById('AddShelterBox').style.color="black";
            document.getElementById('FindHospitalityBox').style.color="green";
            document.getElementById('AddHospitalityBox').style.color="black";
            


            return <AddHospitalityFirst key={i} index={i} onChange={this.update}>{this.state.token}</AddHospitalityFirst>
            
/*          
            console.log(this.state.token);
            const proxy1=`https://cors-anywhere.herokuapp.com/`;
            const url1=`https://yonit2.herokuapp.com/FindAllLocations`;
            fetch(`${proxy1}${url1}`,{method: "POST",headers: {'Content-Type': 'application/json'},body: JSON.stringify(shelterData),credentials: "same-origin"} )
            .then((response)=>{
    
                return response.json();
    
            },(error)=>{
    
                alert('error');
            }).then((res)=>{
                return (<p>asdasdsdadas</p>);
    
            },(error)=>{
                console.log(error);
            })
    
 */        

        }
    }

    loadProfile(){
        if(this.state.signInFlag==1){
            return(<section id="logInEmail" onClick={this.fromStart}>{this.state.googleEmail}</section>)

        }else{
            return(<GoogleLogin  clientId="895506418876-jktf38vji4h0e54getonv95ue8p48bn1.apps.googleusercontent.com" buttonText="Login" onSuccess={this.google} onFailure={this.google}/>)
        }

    }

    render(){
        return(
            <section id="all">
             
             <section id="topMenuUp">
                     

                    <section id="logoBoxOut">
                        <section id="logoOut">
                            <section id="logoBoxIn">
                            </section>
                        </section>
                    </section>

                    <section  className="topMenuBoxOutGoogle">


                            
                                <section className="topMenuBoxInGoogle">
                                    <section id="googleLogInBox">
                                        {this.loadProfile()}
                                    </section>
                                </section>
                           

                    </section>

             
             </section>

               

                    

                      
                
             <section id="topMenubuttom">

                    <section  className="topMenuBoxOut">
                        <section  className="topMenuBoxIn">
                            <div  className="buttonBox" id="ShowCloseSheltersBox"  onClick={this.ShowCloseShelters}>Show Close Shelters</div>
                        </section>
                    </section>

                    <section  className="topMenuBoxOut">
                            <section  className="topMenuBoxIn">
                                 <div className="buttonBox" id="AddShelterBox" onClick={this.AddShelter}>Add Shelter</div>
                            </section>
                    </section>

                    <section  className="topMenuBoxOut">
                        <section  className="topMenuBoxIn">
                              <div className="buttonBox" id="FindHospitalityBox" onClick={this.FindHospitality}>Find Hospitality</div>
                        </section>
                    </section>

                    <section className="topMenuBoxOut">
                        <section  className="topMenuBoxIn">
                             <div className="buttonBox" id="AddHospitalityBox" onClick={this.AddHospitality}>Add Hospitality</div>
                        </section>
                    </section>


                </section>

                
                
                         <section>{this.state.pages.map(this.run)}</section>
            </section>
                
        );
    }

}



export default HomePage