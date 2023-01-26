import './ProjNav.css'
function Navbar(){
    return (
        <>
            <div className="nav flex">
                <div className="top flex">
                    <span className='span'>The </span>
                    <span className='siren'>Siren</span>
                </div>
                <div className="bottom flex">
                    <div className='btn'>Home</div>
                    <div className='btn'>Bollywood</div>
                    <div className="btn">Technology</div>
                    <div className="btn">Hollywood</div>
                    <div className="btn">Fitness</div>
                    <div className="btn">Food</div>
                </div>
            </div>
        </>
    )
}
export default Navbar