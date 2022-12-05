import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ item }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`../img/${item.img}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                        <p className="card-text">Marca: {item.marca}</p>
                        <p className="card-text">Modelo: {item.modelo}</p>
                        <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className="card-text">Stock: {item.stock}</p>
                        <ItemCount stock={item.stock}/>
                        <button className="btn btn-primary">Finalizar compra</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
