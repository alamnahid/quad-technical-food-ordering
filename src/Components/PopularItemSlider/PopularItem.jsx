import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ItemCard from '../ItemCard/ItemCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';


const PopularItem = () => {

    const [popularItems, setPopularItems] = useState([])

    const { data: items = [], isLoading } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            return res.data.Items;
        }
    })
    const filteredPopularItems = items.filter(item => item.IsPopular === true);

    useEffect(() => {
        setPopularItems(filteredPopularItems);
    }, [items]);

    console.log(popularItems)

    return (
        <div className='mx-[10%] mt-20'>

            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-medium'>Popular</h1>
                <p className='text-orange-700 font-medium text-xl flex justify-center items-center'>AddMore <IoIosArrowBack className='text-gray-500' /> <IoIosArrowForward className='text-gray-800' /></p>
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
                        slidesPerView: 1, // 1 slide per view on small screens (mobile devices)
                    },
                    768: {
                        slidesPerView: 1.5, // 2 slides per view on tablets
                    },
                    1024: {
                        slidesPerView: 5, // 4 slides per view on desktop devices
                    },
                }}

            >
                {
                    popularItems?.map(item=><SwiperSlide key={item?.Id} className='pb-12'>
                    <ItemCard item={item} />
                </SwiperSlide>)
                }


            </Swiper>



        </div>
    );
};

export default PopularItem;