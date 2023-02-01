import React,{Component} from 'react'
type automobile={
    values:string[];
}
class Cars extends Component<automobile>{
     items=this.props.values.map((val:string)=><li>{val}</li>)
    render(){
        return(
            <div>
                <ul>{this.items}</ul>

            </div>

        );
    }

}
export default Cars;