const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <h1>welcome back!</h1>
    
    }

    return <h1>please sign up</h1>

}

export default Greeting;