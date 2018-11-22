import React from 'react';

export class Form extends React.Component{
    yapbirseyler(e){
        e.preventDefault();
        const deger = document.getElementById("input").value;
        console.log(deger);
        this.props.yeniliste(deger);
    }
    
    render(){
        return(
            <div>
                <form onSubmit={e=>this.yapbirseyler(e)}>
                    <input type="text" id="input">

                    </input>
                </form>

                <button onClick={this.yapbirseyler.bind(this)}>Gönder</button>
            </div>
        )
    }
}