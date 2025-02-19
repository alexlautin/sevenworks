export default function Login() {
    return(
        <div className = "flex justify-center items-center h-screen bg-gradient-to-b from-navy to-darkRed overflow-hidden">
            <div className = "flex flex-col w-[45%] h-[55%] bg-offWhite rounded-xl shadow-2xl py-4 px-6 gap-1 border-b-4 border-lightGray">
                <h2 className = "text-[44px] font-extrabold text-navy">Welcome Back</h2>
                <div className = "w-[80%] h-[2px] bg-navy"></div>
                <div className = "flex flex-col h-fit gap-1 mt-4">
                    <p className = "text-lightGray text-[20px] font-medium pl-1">Email</p>
                    <input type = "email" placeholder = "example@email.com" 
                    className = "w-[70%] h-[50px] rounded-xl pl-4 shadow-md text-navy invalid:border-darkRed"></input>
                </div>
                <div className = "flex flex-col h-fit gap-1 mt-4 mb-6">
                    <p className = "text-lightGray text-[20px] font-medium pl-1">Password</p>
                    <input type = "text" placeholder = "password" 
                    className = "w-[70%] h-[50px] rounded-xl pl-4 shadow-md text-navy"></input>
                    <a href = "#" className = "flex justify-end text-gray-500 text-[14px] w-[70%]">Forgot Password?</a>
                </div>
                <button className = "text-offWhite text-[20px] bg-lightRed w-fit px-4 py-2 rounded-lg hover:bg-darkRed">Log In</button>
            </div>
        </div>
    );
}