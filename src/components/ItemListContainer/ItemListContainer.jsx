import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import consultarBDD from "../../assets/funciones";

const ItemListContainer = ({greeting}) => {

    consultarBDD().then(productos => console.log(productos));
    return (
        <div className="container-xl">
            <p className="">{greeting}</p>
            <ItemCount stock={5}/>
        </div>
    );
}

export default ItemListContainer;
