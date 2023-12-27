
const Card = ({ item }) => {
    console.log(item);
    return (
        <div className="m-p p-5 border-[2px] border-red-300 bg-gray-400">
            <h1 className="text-green-600">{item?.title}</h1>
        </div>
    );
};

export default Card;