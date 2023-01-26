import Navbar from "./Component/navbar"
// import Card from "./Component/card"
function Errorlink(){
    return (
        <>
            <Navbar/>
            <div className="card">
                <i id="danger" class="fa-solid fa-skull-crossbones" ></i>
                <div><h3>404!! Incorect-link</h3></div>
            </div>
        </>
    )
}
export default Errorlink