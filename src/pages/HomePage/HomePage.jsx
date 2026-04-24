import Banner from "../../components/Homepage/Banner";
import Friends from "../../components/Homepage/Friends";


const HomePage = () => {
    return (
        <div className="w-11/12 max-w-[1110px] mx-auto">
            <Banner></Banner>
            <Friends></Friends>
        </div>
    );
};

export default HomePage;