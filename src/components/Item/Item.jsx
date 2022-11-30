const Item = ({ prod }) => {
    return (
        <div className="card my-3" style={{ width: '18rem' }}>
            <img src={`../img/${prod.img}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Título de la tarjeta</h5>
                <p className="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
                <button className="btn btn-primary">Botón</button>
            </div>
        </div>
    );
}

export default Item;
