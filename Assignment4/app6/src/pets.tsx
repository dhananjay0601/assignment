type animals={
    values:{Name:string,pets:{name:string,type:string}[]}[]
}
const Pets=(props:animals)=>{
    const items=props.values.map(({Name,pets})=>(
        <center key={Name}>
        <h1 >{`${Name}'s pets`}</h1>
        <h2>{`${pets[0].type} named ${pets[0].name}`}</h2>
        <h2>{`${pets[1].type} named ${pets[1].name}`}</h2>

        </center>
    ))
    return(
        <div>
            {items}
        </div>

    )

}
export default Pets;