export default function Card({ _sprites, index, clickHandler, reloadCards }) {
    return (
        <button
            type="button"
            key={index}
            className="card"
            onClick={() => {
                clickHandler(_sprites.id);
                reloadCards();
            }}>
            <div className="card-media">
                <img
                    src={_sprites.sprites}
                    alt={_sprites.name}
                    className="card-img"
                />
            </div>
            <p className="card-title">{_sprites.name}</p>
        </button>
    );
}
