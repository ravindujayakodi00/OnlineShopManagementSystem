import Navbar from "../components/Navbar"
import Decore from "../images/Decore.png"

const Home = () => {
    return(
        <section>
            <div className="Home">
                <div className="decore-img">
                    <img className="decore" src={ Decore } alt="" />
                </div>
                <Navbar/>
                <div className="top-para">
                    <h6>BEST PRODUCTS TO YOUR HOME</h6>  
                    <br/>
                    <h1>Whatever you’ve got in mind, we’ve got inside.</h1>      
                    <br/><br/>
                    <button className="btn btn-dark viewAll">View Products</button>   
                </div>
            </div>
        </section>
        
    )
}

export default Home