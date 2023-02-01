const Fruitslist=(props:any)=>{
    //props.values=props.values.slice(0,2)
    const final=props.values.slice(0,3).map((fruit:any)=>(
        <li>{fruit}</li>
    ))
    return(
        <div>
            <ul>{final}</ul>
        </div>
    );


};
export default Fruitslist;