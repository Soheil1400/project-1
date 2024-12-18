'use client'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {MdArrowBackIosNew, MdOutlineShoppingBag, MdOutlineStar, MdPerson} from "react-icons/md";

import 'swiper/css';
import {DATABASE} from "@/src/data/data";
import Image from "next/image";
import SnnapShop from '../public/images/shop.png'

const PrimarySButton = ({ children }) => {
    return (
        <button className="bg-primary-main text-white  px-3 py-2 flex items-center justify-center rounded-lg text-xl">
            {children}
        </button>
    );
};


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
                <div className={'text-xl font-bold'}>
                    {'تازه‌ها در اسنپ‌فود'}
                </div>
                <div className={'text-secondary-main text-lg font-bold'}>
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
                    {DATABASE.restaurants.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className={'w-full flex flex-wrap'}>
                                <div className={'w-full flex flex-wrap rounded-xl pb-3 cursor-pointer shadow-shadows-small hover:shadow-shadows-high'}>
                                    <div className={'w-full bg-amber-600 h-36 rounded-t-xl relative'}>
                                        <Image src={item.image} alt={item.name} width={100} height={100}
                                               style={{width: '100%', height: '100%', borderRadius: '8px 8px 0 0'}}/>
                                        <div className={'absolute top-8 bg-white rounded-tl-xl rounded-bl-xl px-4 text-sm py-1 text-secondary-main'}>
                                            {item.pay}
                                        </div>
                                    </div>
                                    <div className={'flex flex-col w-full justify-center items-center -mt-8 z-40'}>
                                        <div className={'w-20 h-20 rounded-xl border-4 border-white'}>
                                            <Image src={item.logo} alt={item.name} width={100} height={100}
                                                   style={{width: '100%', height: '100%', borderRadius: '8px'}}/>
                                        </div>
                                        <div className={'mt-4 text-lg font-bold'}>
                                            {item.name}
                                        </div>
                                        <div className={'flex my-1'}>
                                            <MdOutlineStar style={{color: '#FACB0F', marginLeft: '2px'}}/>
                                            {` ${item.star} `}
                                            {` (${item.rate}) `}
                                        </div>
                                        <div className={'my-1 text-sm text-gray5-color'}>
                                            {item.otherCats.map( item => item)}
                                        </div>
                                        <div className={'flex my-1 text-xs mt-3'}>
                                            <Image src={item.delivery.icon} alt={'delivery'} width={16} height={16} style={{marginLeft: 4}}/>
                                            {` ${item.delivery.type} `}
                                            {` ${item.delivery.price} تومان`}
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
            <div className={'flex w-full bg-body-color rounded-xl p-8 justify-between'}>
                <div className={'w-1/2 flex-colm md:w-full'}>
                    <h2 className={'text-3xl font-semibold text-carbon-main'}>
                        {'صاحب کسب و کار هستید؟'}
                    </h2>
                    <h3 className={'text-2xl my-8 text-carbon-main'}>
                        {'با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.'}
                    </h3>
                    <div>
                        <PrimarySButton>
                            <MdOutlineShoppingBag style={{marginLeft: 4}}/>
                            {'ثبت نام فروشندگان'}
                        </PrimarySButton>
                    </div>
                </div>
                <div className={'w-1/2 hidden justify-end md:flex'}>
                    <Image src={SnnapShop} alt={'image'} width={350} height={350} style={{marginTop: '-124px'}}/>
                </div>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className={'w-full flex flex-wrap bg-white p-4 fixed shadow-shadows-small z-50'}>
            <div className={'w-full flex justify-between mb-8'}>
                <div>
                    <Image src={"/images/images-home/logo.svg"} width={68} height={34} alt="logo" />
                </div>
                <div className={'flex'}>
                    <div className={'ml-16'}>
                        <MdPerson style={{fontSize: '24px'}}/>
                    </div>
                    <div className={'flex'}>
                        <MdOutlineShoppingBag  style={{fontSize: '24px'}}/>
                        <p>
                            {'سفارش ها'}
                        </p>
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
