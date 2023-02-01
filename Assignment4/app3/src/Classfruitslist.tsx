import React,{ Component } from "react";
type Result={
    values:{name:string}[]
}
class Fruitlist extends Component{
   state:Result={
    values:[{name:"Apple"},{name:"Banana"},{name:"Orange"},{name:"Mango"}],
   }
   items=this.state.values.map(({name:string})=><li>{string}</li>)
   render() {
       return(
        <div>
            <ul>{this.items}</ul>
        </div>
       )
   }
}
export default Fruitlist;