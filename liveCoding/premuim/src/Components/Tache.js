import React, { Component } from 'react'
import axios from 'axios';
 
 

  class Tache extends Component{
    state = {
    
  data:[],
     name:"",  
  id:""
  

  }

   componentDidMount(){

    axios.get("http://127.0.0.1:8000/api/tache").then((res)=>{

      this.setState({

         data:res.data
      })
     
    })

   }


    handelClick=()=>{
    
    
        
        axios.post("http://127.0.0.1:8000/api/tache",this.state).then(res=>{
            
        })


    }
    
    handelChange=(e)=>{
        
        console.log(e.target.value)
        
        this.setState({
            
            name:e.target.value
        }) 
        
        console.log(this.state)
      
    }

    handelDelete=(id)=>{

        axios.delete("http://127.0.0.1:8000/api/tache/"+id).then((res)=>{
          
        window.location.reload(false) 
    
        })
    }
     
   
  render() {
    return (

      <div>
   <input  onChange={this.handelChange} />
   <button id='btnAjouter'  className='btn btn-primary' onClick={this.handelClick} >Ajouter</button>
      <table className='table'>
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
      {this.state.data.map((data)=>(
        <tr   key={data.id} >
         
            <td >{data.name} </td>
            <td onClick={this.handelDelete.bind(this,data.id)}><button>delete</button></td>

            
           
        </tr>
    ))}
</tbody>
</table>
</div>
);
}
}

 

export default  Tache;
