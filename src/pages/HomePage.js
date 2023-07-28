import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar.js";
import './HomePage.css'
function HomePage(){
    return(
        <>
        <Header/>
        <SearchBar/>
        <EmployeeList/>
        
        </>
    )
}

export default HomePage;