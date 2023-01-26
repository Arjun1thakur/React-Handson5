import './CardMain.css'
function ProjCard(){
    let obj=[{
        src:'https://images.hdqwalls.com/wallpapers/hill-station-road-ji.jpg',
        title:'Title of vertical gallery',
        Category:'Travel',
        Date:'Augest 21 2017'},
        {
        src:'https://c1.wallpaperflare.com/preview/870/861/160/kodaikanal-hill-station-hill-india.jpg',
        title:'The Sound cloud You loved is doomed',
        Category:'Travel',
        Date:'Augest 21 2017'},
        {src:'https://images.alphacoders.com/840/84063.jpg',
        title:'The Sound cloud You loved is doomed',
        Category:'Travel',
        Date:'Augest 21 2017'}
    ]
    return (
        <div className='container grid grid_1'>
        {obj.map((data,index)=>{
            return (
            <div className="main" id={`id_${index}`} key={index}>
                <img src={data.src} alt="logo" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.Category} / {data.Date}</p>
                </div>
            </div>
            )
        })}
        </div>
    )
}
export default ProjCard