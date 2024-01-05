

const ItemCard = ({item}) => {
    return (
        <div className="cursor-pointer">
        <img className='rounded-3xl shadow-md h-[12rem] lg:h-[18rem] xl:h-[20rem] w-[100%]' src={item?.ImageUrl} alt="" />

        <p className='text-center mt-3 text-xl text-gray-800'>{item?.Name}</p>

       </div>
    );
};

export default ItemCard;