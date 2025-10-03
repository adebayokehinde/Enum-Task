import logo from "../assets/Enum_Logo_Blue-removebg-preview 2.png";
// import Style from ".dashboard.module.css"
function Dashboard() {
    return(
        <>
            <div className="h-screen w-64 bg--600 text-white flex flex-col p-6">
                <img src={logo} alt="Logo"  className="w-20 h-5"/>
            </div>
             <div className="fixed top-0 left-0 h-full w-5"></div>

        </>
    )
}
export default Dashboard;