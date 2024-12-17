'use client'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {MdArrowBackIosNew} from "react-icons/md";

import 'swiper/css';
import {DATABASE} from "@/src/data/data";
import Image from "next/image";

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const DATA_2 = [1, 2, 3, 4, 5, 6, 7, 8]

const SwiperNextButton = () => {
    const swiper = useSwiper();
    return (
        <div className={'absolute z-50 -left-4 rounded-full bg-white p-4 top-36 cursor-pointer shadow-shadows-high border-solid border-2 border-surface-alphaLight'}
             onClick={() => swiper.slideNext()}>
            <MdArrowBackIosNew style={{color: '#FF00A6'}}/>
        </div>
    )
}

const Categories = () => {
    return (
        <div className={'flex w-full flex-wrap max-w-7xl mt-52'}>
            <div className={'w-full my-8 font-bold text-carbon-light text-start '}>
                {'دسته بندی ها'}
            </div>
            <div className={'flex w-full flex-wrap'}>
                {DATABASE.cats.map(item => (
                    <div className={'w-1/2 flex md:w-1/6 mb-8'} key={item.id}>
                        <div
                            className={'w-3/4 h-24 rounded-xl relative shadow-shadows-medium border-solid border-white border-4 cursor-pointer'}>
                            <Image src={item.img} alt={item.title} width={100} height={100}
                                   style={{width: '100%', height: '100%', borderRadius: '12px'}}/>
                            <div
                                className={'flex items-center absolute bottom-0 bg-white rounded-tl-xl rounded-br-xl px-3 py-1 -right-1 text-sm'}>
                                {item.title}
                                <MdArrowBackIosNew style={{color: '#FF00A6', marginRight: '8px'}}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Slider = () => {
    return (
        <div className={'flex w-full flex-wrap max-w-7xl my-16'}>
            <div className={'flex justify-between w-full my-4'}>
                <div>
                    {'تازه‌ها در اسنپ‌فود'}
                </div>
                <div>
                    {'مشاهده همه'}
                </div>
            </div>
            <div className={'flex w-full relative'}>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperNextButton/>
                    {DATA_2.map(item => (
                        <SwiperSlide key={item}>
                            <div className={'w-full flex flex-wrap'}>
                                <div className={'bg-red-500 w-full flex flex-wrap rounded-xl pb-3 cursor-pointer'}>
                                    <div className={'w-full bg-amber-600 h-36 rounded-t-xl relative'}>
                                        <div className={'absolute top-8 bg-white rounded-tl-xl rounded-bl-xl px-4'}>
                                            label
                                        </div>
                                    </div>
                                    <div className={'flex flex-col w-full justify-center items-center -mt-8 z-40'}>
                                        <div className={'w-20 h-20 bg-blue-600 rounded-xl border-4 border-white'}>

                                        </div>
                                        <div className={'mt-4'}>
                                            title
                                        </div>
                                        <div className={'my-1'}>
                                            tag
                                        </div>
                                        <div className={'my-1'}>
                                            description
                                        </div>
                                        <div className={'my-1'}>
                                            delivery
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

const ContactUs = () => {
    return (
        <div className={'flex w-full flex-wrap max-w-7xl my-16'}>
            <div className={'flex w-full bg-amber-800 rounded-xl p-8 justify-between'}>
                <div className={'w-1/2 flex-colm md:w-full'}>
                    <div>
                        {'صاحب کسب و کار هستید؟'}
                    </div>
                    <div>
                        {'با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.'}
                    </div>
                    <div>
                        <button className={'bg-blue-900'}>
                            {'ثبت نام فروشندگان'}
                        </button>
                    </div>
                </div>
                <div className={'w-1/2 hidden justify-end md:flex'}>
                    image
                </div>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className={'w-full flex flex-wrap bg-white p-4 fixed shadow-shadows-small z-50'}>
            <div className={'w-full flex justify-between'}>
                <div>
                    {'logo'}
                </div>
                <div>
                    {'search'}
                </div>
                <div className={'flex'}>
                    <div>
                        {'profile'}
                    </div>
                    <div>
                        {'history'}
                    </div>
                </div>
            </div>
            <div className={'flex w-full mt-2'}>
                {DATABASE.services.map((item, index) => (
                    <div key={index}
                         className={'flex flex-col w-24 px-1 py-4 rounded-xl justify-center items-center ml-4 bg-surface-main border-2 border-solid border-surface-overlay cursor-pointer'}>
                        <div className={'w-12 h-12'}>
                            <Image src={item.img} alt={item.service} width={100} height={100}
                                   style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div className={'mt-4 text-sm'}>
                            {item.service}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className={'flex w-full justify-center flex-wrap'}>
            <Header/>
            <Categories/>
            <Slider/>
            <ContactUs/>
        </div>
    );
}
