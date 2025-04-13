function Child(props){
    return(
        <>
            <h2>{props.message}</h2>
        </>
    )
 }
 export default function Q10(){
    const msg = "Hello, This is parent component";
    return (
        <>
            <Child message = {msg}/>
        </>
    )
 }
 