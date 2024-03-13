// import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const Content = ({ content }) => {
    const { id, title, category, color, image } = content;

    // I don't understand why it's not working
    // const cardColorClass = `bg-${color}-100`;
    // const categoryColorClass = `bg-${color}-200`;
    // const textColorClass = `text-${color}-500`;
    // const titleColorClass = `text-${color}-600`;


    //I applied it in a new way
    const ColorApply = (title) => {
        if(color==='red'){
            return `${title}-red-`;
        }
        else if(color==='blue'){
            return `${title}-blue-`;
        }
        else if(color==='green'){
            return `${title}-green-`;
        }
    }

    return (
        <div>
            <Link to={`/details/${id}`}>
  
                <div  className={`border  card rounded-md card-compact ${ColorApply('bg')}200 h-auto`}>
                    <figure><img className="image-full w-full bg-cover" src={image} alt={title} /></figure>
                    <div className="card-body">
                        <p><span className={`px-2 py-1 rounded-md  ${ColorApply('bg')}200  ${ColorApply('text')}500 font-semibold`}>{category}</span></p>
                        <h2 className={`card-title text-sm  ${ColorApply('text')}600 font-bold`}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Content.propTypes = {
    content : PropTypes.object
}
export default Content;
