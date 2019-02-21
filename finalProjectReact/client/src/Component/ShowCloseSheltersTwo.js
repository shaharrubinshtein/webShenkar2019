import React, { Component } from 'react';
import './ShowCloseSheltersTwo.css';



class ShowCloseSheltersTwo extends Component{
    constructor(props){
        super(props);

        this.run=this.run.bind(this);

    }

    run(){

        if(this.props.children=='1'){
            return(<p>there was an error</p>);

        }else if(this.props.children=='2'){
            return(<p>not log in</p>);

        }else if(this.props.children=='3'){
            return(<p>good</p>);

        }else if(this.props.children=='4'){

            return(<p>you did not enter number</p>)
        }
        else{
                
               window.AutoAddLocation(this.props.children);
                return(<p></p>)

                
        }


   }


    render(){

        return(
            <section id="AddShelterTwoAll">

                 {this.run()}
             </section>
        )

    }



}


export default ShowCloseSheltersTwo