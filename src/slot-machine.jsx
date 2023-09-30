const Slot=(props)=>{

    let x= props.x
    let y=props.y
    let z=props.z


if(x===y&&y===z){
    return(
        <>
    <div className="Matching">
    <h1>{x} {y} {z} </h1><br />
    <h3>It is a Matching pair</h3>
    <hr />
    <br />
    </div>
    </>
    )
}
else {
    return(
        <>
        <div className="NotMatch">
            <h1> {x} {y} {z} </h1><br />
        <h3>It is not a Matching pair</h3>
        <hr />
        <br />
        </div>
        </>
    )
}
}
export default Slot;