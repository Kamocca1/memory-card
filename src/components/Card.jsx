export default function Card({ _sprites, index, clickHandler, reloadCards }) {
    return (
        <button
            type="button"
            key={index}
            className=""
            onClick={() => {
                clickHandler(_sprites.id);
                reloadCards();
            }}>
            <img src={_sprites.sprites} alt={_sprites.name} className="" />
            <p className="">{_sprites.name}</p>
        </button>
    );
}
