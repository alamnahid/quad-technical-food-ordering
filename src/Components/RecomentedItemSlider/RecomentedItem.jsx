import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ItemCard from '../ItemCard/ItemCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { AddNewCard } from '../AddNewCard/AddNewCard';

const RecomentedItem = () => {
    const [recomenteditem, setrecomenteditem] = useState([])

    const { data: items = [], isLoading } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            return res.data.Items;
        }
    })
    const filteredrecomenteditem = items.filter(item => item.IsRecommended === true);

    useEffect(() => {
        setrecomenteditem(filteredrecomenteditem);
    }, [items]);

    if (isLoading) {
        return <Loading/>
    }
    return (
        <div className='mx-[3%] xl:mx-[10%] mt-20'>

        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-medium'>Recommended</h1>
            <AddNewCard/>
        </div>

        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-12"
            autoplay
            breakpoints={{
                320: {
                    slidesPerView: 2.5,
                },
                768: {
                    slidesPerView: 4, 
                },
                1024: {
                    slidesPerView: 5, 
                },
            }}

        >
            {
                recomenteditem?.map(item=><SwiperSlide key={item?.Id} className='pb-12'>
                <ItemCard item={item} />
            </SwiperSlide>)
            }


        </Swiper>



    </div>
    );
};

export default RecomentedItem;