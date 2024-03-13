// import React from 'react';

import { useContext, useEffect, useState } from "react";
import Content from "./Content";
import { SeachContext } from "../Banner/Banner";

const Contents = () => {


    const searchValue = useContext(SeachContext).toLowerCase();


    const [contents, setContents] = useState([]);
    const [displayShowContents, setDisplayShowContents] = useState([]);



    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => {
                setContents(data)
                setDisplayShowContents(data)
            });
    }, []);

    useEffect(() => {
        displaySearchContents()
    }, [searchValue, contents]);

    const displaySearchContents = () => {

        let seacrchContents = contents;

        if (searchValue === 'health' || searchValue === 'he' || searchValue === 'helth' || searchValue === 'th' ||searchValue === 'heal' || searchValue === 'h' ) {
            seacrchContents = contents.filter(content => content.category.includes('Health'));
        }
        else if (searchValue === 'education' || searchValue === 'edu' || searchValue === 'educat' || searchValue === 'tion' || searchValue === 'ed' || searchValue === 'e' ) {
            seacrchContents = contents.filter(content => content.category.includes('Education'));
        }
        else if (searchValue === 'food' || searchValue === 'f' || searchValue === 'fo' || searchValue === 'foo'  ) {
            seacrchContents = contents.filter(content => content.category.includes('Food'));
        }
        else if (searchValue === 'clothing' || searchValue === 'cloth' || searchValue === 'clo' || searchValue === 'c' || searchValue === 'cloth' || searchValue === 'thing'  ) {
            seacrchContents = contents.filter(content => content.category.includes('Clothing'));
        }

        setDisplayShowContents(seacrchContents);


    }




    return (
        <div id="contents" className="mx-4 md:max-w-6xl md:mx-auto mt-24 md:mt-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    displayShowContents.map(content => <Content content={content} key={content.id}></Content>)
                }
            </div>

        </div>
    );
};

export default Contents;