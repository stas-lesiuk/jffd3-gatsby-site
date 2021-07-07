import React from 'react';

import { newsSection, newsItem } from './NewsPage.module.css';
import Header from '../components/header';

const news = [
    {
        title: 'Title 1',
        text: 'Breaing news from Lorem Ipsum ...',
        publishDate: '2021-07-02'
    },
    {
        title: 'Title 2',
        text: 'Breaing news from Lorem Ipsum ...',
        publishDate: '2021-06-30'
    },
    {
        title: 'Title 3',
        text: 'Breaing news from Lorem Ipsum ...',
        publishDate: '2021-06-20'
    }
];

const NewsPage = () => {
    return (
        <div>
            <Header />
            <h1>News page</h1>
            <section className={newsSection}>
                {
                    news.map(item => <article key={item.title} className={newsItem}>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <i>{item.publishDate}</i>
                    </article>)
                }
            </section>
        </div>
    );
};

export default NewsPage;