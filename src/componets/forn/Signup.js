function SignIn() {
    return (  
        <section>
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
        </section>
    );
}

export default SignIn;