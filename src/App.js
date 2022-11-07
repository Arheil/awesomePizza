import './scss/app.scss';
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import SortPopup from "./components/SortPopup/SortPopup";
import PizzaBlock from "./components/PizzBlock/PizzaBlock";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <SortPopup />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                    <PizzaBlock />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
