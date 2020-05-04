import React, {useState} from "react";
import Base from "../core/Base";
import {Link, Redirect} from "react-router-dom";
import {signin,authenticate,isAuthenticated} from "../auth/helper"



const Signin = () =>{

    //defining state
    const [values, setValues] = useState({
        email:"m@m.com",
        password:"1234",
        error:"",
        loading:false,
        didRedirect:false
    });

     //de-structuring
    const { email, password,error, loading, didRedirect} = values

    const {user} =isAuthenticated();

    const handleChange = name => event=> {
        setValues({...values, error:false, [name]: event.target.value})

    }

    const onSubmit = event =>{
        event.preventDefault()
        setValues({...values, error:false, loading:true})
        signin({email, password})
        .then( data =>{
            if(data.error){
                setValues({...values, error:data.error, loading:false})
            }
            else{
               authenticate(data, ()=>{
                    setValues({
                        ...values,
                        didRedirect:true,
                    })
               })
            }
        })
        .catch(console.log("Error in sign in"))
    }

    const performRedirct = ()=>{
        //TODO: do a redirect here
        if(didRedirect){
            if(user && user.role === 1){
                return <Redirect to="/admin/dashboard"/>;
            }else{
                return <Redirect to="/user/dashboard"/>;
            };
        }
        if(isAuthenticated()){
            return <Redirect to="/" />;
        }
    }


    const signInForm = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label  className="text-light">Email</label>
                            <input onChange={handleChange("email")} value={email} className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label  className="text-light">Password</label>
                            <input onChange={handleChange("password")} value={password} className="form-control" type="password" />
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Signin</button>
                    </form>
                </div>
            </div>
        )

    }

    const errorMessage = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger"
                        style={{display:error ? "": "none"}}
                        > {error}
                  </div>
                </div>
            </div>
        )
    };

    const loadingMessage = () => {
        return(
           loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
           )
        )
    };
    
    return(
        <Base title="sign in page" description="page for user to sign in!">
        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        {performRedirct()}
    <p className="text-white text-center">{JSON.stringify(values)}</p>
       
        </Base>
    )
}


export default Signin;