import ClickHOC from "./Component/clickHOC"
import DoubleClickHOC from "./Component/DoubleClickHOC"
import HoverHOC from "./Component/HoverHOC"
function Project(){
    return (
        <>
        <div className="card">
            <h1>Higher Order Component  </h1>
            <div className="card0 main0 flex">
                <ClickHOC/>
                <HoverHOC/>
                <DoubleClickHOC/>
            </div>
        </div>
        </>
    )
}
export default Project