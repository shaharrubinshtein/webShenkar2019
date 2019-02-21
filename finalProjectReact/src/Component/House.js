import React, { Component } from 'react';
import './AddHospitalityFirst.css';

import './AddShelterTwo.css';

import './City.css';

class Hose extends Component{
    constructor(props){
        super(props);
      
        this.state = {
            flag: 0,
            locations:[]
        }
        this.formClick = this.formClick.bind(this);
        this.getResult = this.getResult.bind(this);
        
         
    }


    

    formClick() {
        




    }

    getResult() {
      
    }

    render(){
        return(
            <section className="location" >



                            house 
                     
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


export default Hose