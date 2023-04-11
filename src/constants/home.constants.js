import actImg from '/images/act-img.webp';
import cargoImg from '/images/cargo-img.webp';
import flightImg from '/images/flight-img.webp';
import intermodalImg from '/images/intermodal-img.webp';
import logisticsImg from '/images/logistics-img.webp';
import newsOne from '/images/news-1.webp';
import newsTwo from '/images/news-2.webp';
import newsThree from '/images/news-3.webp';
import newsFour from '/images/news-4.webp';

export const NEEDS_LIST = [
    {
        category: 'Shipping',
        list: [
            {
                title: 'ACT WITH CMA CGM+',
                imgSrc: actImg,
            },
            {
                title: 'Oversized cargo',
                imgSrc: cargoImg,
            },
        ],
    },
    {
        category: 'Logistics',
        list: [
            {
                title: 'Logistics services',
                imgSrc: logisticsImg,
            },
            {
                title: 'Intermodal solutions',
                imgSrc: intermodalImg,
            },
        ],
    },
    {
        category: 'Air freight',
        list: [
            {
                title: 'Schedule flight',
                imgSrc: flightImg,
            },
            {
                title: 'Schedule flight',
                imgSrc: logisticsImg,
            },
        ],
    },
];

export const NEWS_LIST = [
    {
        title: '2022 annual financial results: Exceptional annual performance, despite a marked slowdown in business since the fourth quarter',
        imgSrc: newsOne,
        date: '03/03/23',
    },
    {
        title: 'Beginning of the 2023 cashew campaign',
        imgSrc: newsTwo,
        date: '14/02/23',
    },
    {
        title: 'A CMA CGM Foundation humanitarian flight will leave France for Türkiye on Sunday',
        imgSrc: newsThree,
        date: '10/02/23',
    },
    {
        title: 'The CMA CGM Group becomes Official Partner in logistics solutions of the Paris 2024 Olympic and Paralympic Games',
        imgSrc: newsFour,
        date: '03/03/23',
    },
];
