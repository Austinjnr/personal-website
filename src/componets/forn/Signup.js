function SignIn() {
    return (  
        <section>
            <div className="card" style={{width: "35rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <h2>LogIn</h2>
            <form>
                <div class="mb-">
                    <label for="exampleInputEmail" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail" placeholder="youremail@gmail.com" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPasswword" className="form-lable">Password</label>
                    <input type="password" className="form-control" id="exampleInputPasswword" placeholder="********"></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleInputCheck"></input>
                    <label className="form-check-label" for="exampleCheck1">Check the Box</label>
                </div>
                <buton type="submit" className="btn btn-primary">
                    Sign In
                </buton>
            </form>
            </div>
        </section>
    );
}

export default SignIn;