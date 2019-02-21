import React, { Component } from 'react';
import './AddHospitalityFirst.css';

import './AddShelterTwo.css';

import City from './City';


class AddHospitalityFirst extends Component{
    constructor(props){
        super(props);
      
        this.state = {
            flag: 0,
            lat: '',
            lng: '',
            data:[],
            locations:[]
        }
        this.formClick = this.formClick.bind(this);
        this.getResult = this.getResult.bind(this);
        this.load=this.load.bind(this);
        
         
    }


    

    formClick() {

        if(this.state.flag==0){
            console.log(this.props.children);

            var shelterData={
                token:this.props.children
            };
    
            
            const proxy1=`https://cors-anywhere.herokuapp.com/`;
            const url1=`https://yonit2.herokuapp.com/FindAllLocations`;
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
               
      /*          
                this.setState({
                    flag:1,
                    lat: '',
                    lng: '',
                    data:res
                })
                
    */
            },(error)=>{
                console.log(error);
            })





        }

       



/*
     
        const proxy1=`https://cors-anywhere.herokuapp.com/`;
        const url1=`https://yonit2.herokuapp.com/addShelter`;
        fetch(`${proxy1}${url1}`,{method: "POST",headers: {'Content-Type': 'application/json'},body: JSON.stringify(shelterData),credentials: "same-origin"} )
        .then((response)=>{

            return response.json();

        },(error)=>{

            alert('error');
        }).then((res)=>{
            this.setState({
                flag:1,
                lat: '',
                lng: '',
                data:res
            })

        },(error)=>{
            console.log(error);
        })


*/

    }

    getResult() {
       console.log(this.state.data);
        if (this.state.flag === 1) {
            if(this.state.data=='2'){
                    return(<p>you are not log in</p>)

            }else{

                
            }  
        }
    }

    load(item,i){
        return(<City key={i}>{item}{this.props.children}</City>)


    }

    render(){
        return(
            <section>
                       {this.formClick()}
                       {this.getResult()}

                       <section>
                            {this.state.data.map(this.load)}


                       </section>

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


export default AddHospitalityFirst