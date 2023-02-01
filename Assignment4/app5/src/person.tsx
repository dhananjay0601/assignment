type result={
    values:{id:number,usname:string,age:number,skill:string}[]
}
const Person=(props:result)=>{
    //const items=props.values.map(())
    const users=props.values.map(({id,usname,age,skill})=>(
        <h1 key={id}>{`I am ${usname}.I am ${age} years old.I know ${skill}`} </h1>
    ))
    return(
        <ul>
{users}
        </ul>
        

    );

}
export default Person;