import React, { Component } from 'react';
import './AddShelterTwo.css';



class AddShelterTwo extends Component{
    constructor(props){
        super(props);
        this.show=this.show.bind(this);
        this.run=this.run.bind(this);
        
    }

       
   show(){
        //console.log(this.props.children);
        //console.log(JSON.parse(this.props.children));
        //window.open("https://www.ynet.co.il", "", "_blank");
    
        window.AutoAddLocation(this.props.children);
        
   }
    
   run(){

        if(this.props.children=='1'){
            return(<p>there was an error</p>);

        }else if(this.props.children=='2'){
            return(<p>you add shlter</p>);

        }else if(this.props.children=='3'){
            return(<p>you are not log in</p>);

        }else if(this.props.children=='4'){
            return(<p>you did not enter number</p>);
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


export default AddShelterTwo