function Card2Main(){
    let arr=[
        {src:'https://c1.wallpaperflare.com/preview/870/861/160/kodaikanal-hill-station-hill-india.jpg',
        name:'Joshua Tree Overnight Adventure',
        desc:'Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces',
        Category:'Travel',
        Date:'Augest 21 2017'},
        {src:'https://images.alphacoders.com/840/84063.jpg',
        name:'Joshua Tree Overnight Adventure',
        desc:'Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces',
        Category:'Travel',
        Date:'Augest 21 2017'},
        {src:'https://images.hdqwalls.com/wallpapers/hill-station-road-ji.jpg',
        name:'Joshua Tree Overnight Adventure',
        desc:'Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces',
        Category:'Travel',
        Date:'Augest 21 2017'}
    ]
    return (
        <>
            <div className="g try ">
            <h1 className="h1">The Latest</h1>
            <div className="flex">
                {arr.map((data,index)=>{
                return (
                <div className="main0" key={index}  style={{overflow:'hidden'}}>
                    <div><img src={data.src} alt="logo" /></div>
                    <div className="content0">
                        <h2>{data.name}</h2>
                        <p>{data.desc}</p>
                        <h1>{data.title}</h1>
                        <p><span style={{fontWeight:'700'}}>{data.Category}</span> / {data.Date}</p>
                    </div>
                </div>
                )
            })}
            </div>
            </div>
        </>
    )
}
export default Card2Main