import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/Carouselitem';
import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';

import '../assets/styles/App.scss';



const Home = ({ myList, trends, originals }) => {
    return(
        <>
            <Header/>
            <Search isHome />
            {myList.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        {myList.map(item =>
                            <CarouselItem 
                                key={item.id} 
                                {...item} 
                                isList
                            />
                        )}
                    </Carousel>
                </Categories>
            }
            
            <Categories title="Tendencias">
                <Carousel>
                    {trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi video">
                <Carousel>
                    {originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
        </>
    );
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);