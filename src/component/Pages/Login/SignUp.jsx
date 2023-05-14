import loginImg from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';


const handleSignUp = (event) => {
    event.preventDefault();
}
const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex-col lg:flex-row">
                <div className="w-1/2 mr-5">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h1 className="text-4xl mb-4 font-bold">Sign Up now!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value='Login' />
                            </div>
                        </form>
                        <p className='py-4 mx-auto'>Already have an account?<Link className="font-bold text-red-600" to='/login'>Login</Link> </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;