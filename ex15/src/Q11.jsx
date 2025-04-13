import PropTypes from "prop-types";


function Child(props){
   return(
       <>
           <h2>{props.msg}</h2>
       </>
   )
}


Child.propTypes = {
   message: PropTypes.string.isRequired,
};
export default function Q11(){
   const msg = "Hello, This is parent component with prop types";
   return (
       <>
           <Child msg = {msg}/>
       </>
   )
}
