import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <section className="flex justify-center items-center h-full">
            <div className="card lg:card-side bg-base-300 shadow-xl ">
                <div className="flex justify-center items-center rounded-lg ">
                    <img src="testCover.jpeg" className="rounded-l-lg h-full w-80 2xl:w-96" />
                </div>
                <div className="card-body items-center text-center">
                    <h1 className="font-bold text-xl hidden 2xl:block">Welcome Back</h1>
                    <LoginForm/>
                </div>
            </div>
        </section>
    );
}

export default Login;