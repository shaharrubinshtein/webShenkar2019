import React, { Component } from 'react';
import './AddHospitalityFirst.css';

import './AddShelterTwo.css';

import './City.css';

import House from './House';

class City extends Component{
    constructor(props){
        super(props);
      
        this.state = {
            flag: 0,
            locations:[],
            data:[]
        }
        this.formClick = this.formClick.bind(this);
        this.getResult = this.getResult.bind(this);
        
         
    }
  

    formClick() {
/*
        if(this.state.flag==1){



            console.log(this.props.children);

            var shelterData={
                place:this.props.children[0],
                token:this.props.children[1]
            };
    
            
            const proxy1=`https://cors-anywhere.herokuapp.com/`;
            const url1=`https://yonit2.herokuapp.com/AllHouse`;
            fetch(`${proxy1}${url1}`,{method: "POST",headers: {'Content-Type': 'application/json'},body: JSON.stringify(shelterData),credentials: "same-origin"} )
            .then((response)=>{
    
                return response.json();
    
            },(error)=>{
    
                alert('error');
            }).then((res)=>{    
                    //console.log(res);

                    this.setState({
                        flag:1,
                        lat: '',
                        lng: '',
                        data:[...res]
                    })    
               
           
                this.setState({
                    flag:1,
                    lat: '',
                    lng: '',
                    data:res
                })
                
    
            },(error)=>{
                console.log(error);
            })












        }



*/
        console.log('click');
        if(this.state.flag==1){
            return(<House key={1}>{this.props.children[1]}</House>);

        }else{

            return(<p>{this.props.children[0]}</p>);
        }


    
    }

    getResult() {




      alert(this.props.children[0]);
     
    }

    render(){
        return(
            <section className="location" onClick={this.getResult}>

                        {this.props.children[0]}

                      
                        
            </section>
         

        )


/*

        return(
            <section id="AddShelterFirstAll">

                <section id="AddShelterFirstFormOut">

                    <form id="AddShelterForm">

                            <section id="AddShelterFormTopBoxTextOut">
                                <section id="AddShelterFormTopBoxTextIn">
                                Latitude
                                </section>
                            </section>

                            <section id="AddShelterFormTopBoxInputOut">
                                <section id="AddShelterFormTopBoxInputIn">
                                    <input type="text" id="AddShelterFirstLatValue"></input>
                                  
                                </section>
                            
                            </section>

                            <section id="space"></section>
                            <section id="AddShelterFormTopBoxTextOut">
                                <section id="AddShelterFormTopBoxTextIn">
                                Longitude
                                </section>
                            </section>

                            <section id="AddShelterFormTopBoxInputOut">
                                <section id="AddShelterFormTopBoxInputIn">
                                     <input type="text" id="AddShelterFirstLngValue"></input>
                                
                                </section>
                            
                            </section>
                

                     
                                
                       
                        
                       
                                 
                      


                    </form>





                    <section id="AddShelterFirstFormButtonOut">
                    
                            <section  className="AddShelterFirstFormBox">
                                    <button id="AddShelterFirstFormButton" onClick={this.formClick}>ADD</button>
                            </section>
                    </section>
                </section>

                  
                <section>
                    {this.getResult()}
                </section>
                
            </section>



        )
*/

    }


    
}


export default City