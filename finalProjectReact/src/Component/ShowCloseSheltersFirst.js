import React, { Component } from 'react';
import './ShowCloseSheltersFirst.css';




import ShowCloseSheltersTwo from './ShowCloseSheltersTwo';
import './AddShelterTwo.css';





class ShowCloseSheltersFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: 0,
            lat: '',
            lng: '',
            data:'aaa'
          
        }

        this.formClick = this.formClick.bind(this);
        this.getResult = this.getResult.bind(this);

    }


    formClick() {
       



        var shelterData={
            lat:document.getElementById('AddShelterFirstLatValue').value,
            lng:document.getElementById('AddShelterFirstLngValue').value,
            token:this.props.children
        };
    
        const proxy1=`https://cors-anywhere.herokuapp.com/`;
        const url1=`https://yonit2.herokuapp.com/findCloseShelters`;
        fetch(`${proxy1}${url1}`,{method: "POST",headers: {'Content-Type': 'application/json'},body: JSON.stringify(shelterData),credentials: "same-origin"} )
        .then((response)=>{
            return response.json();
        },(error)=>{
            alert('error');

        }).then((res)=>{
            console.log('here');
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

    getResult() { 
        if (this.state.flag === 1) {
            return (<ShowCloseSheltersTwo>{this.state.data}</ShowCloseSheltersTwo>)
        }
    }


    render() {
        return (

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
                                <button id="AddShelterFirstFormButton" onClick={this.formClick}>SHOW</button>
                        </section>
                </section>
            </section>

              
            <section>
                {this.getResult()}
            </section>

        </section>



        )

    }



}



export default ShowCloseSheltersFirst