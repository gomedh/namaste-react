import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    return (
        <div>
            {items.map((item) => {
                return (
                        <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 text-left flex items-start justify-between">
                            <div className="flex flex-col">
                                <span>{item.card.info.name}</span>
                                <span className="text-gray-700">₹{item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                                <div className="py-2 text-gray-700 max-w-xs">
                                    <p className="text-xs">{item.card.info.description}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={CDN_URL+item.card.info.imageId} className="w-24 h-auto" alt={item.card.info.name}></img>
                                <button className="mt-2 shadow-lg bg-blue-400 text-white py-1 px-4 rounded-lg hover:bg-blue-600">Add +</button>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}

export default ItemList;