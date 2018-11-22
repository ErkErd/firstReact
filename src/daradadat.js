import React from 'react'

export class Daradadat extends React.Component{
    render(){
        const listvaiables = this.props.mylistprop.map((element,index)=>{
            return(
                <li key={index+1}>
                    {index+1}.element = {element}
                </li>
            );
        })
        return(
            <div>
                yazıyor burda bişiler işte <br></br>
                {this.props.mylistprop}
                {this.props.firstprop}
                <ul>
                {listvaiables}
                </ul>
            </div>
        );
    }
}