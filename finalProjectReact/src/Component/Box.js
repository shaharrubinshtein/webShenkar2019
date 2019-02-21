import React, { Component } from 'react';



class Box extends Component{
    constructor(props){
        super(props);

        this.save=this.save.bind(this);
    }

    save(e){
        e.preventDefault();
        this.props.onChange(1,this.props.index);
    }

    render(){
        return(
            <section>
            <p>this is {this.props.index}</p>
            <button onClick={this.save}>click</button>


            </section>

        );
        



    }

}



export default Box