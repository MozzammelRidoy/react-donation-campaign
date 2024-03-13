import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { saveDonationId } from "../../localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const navigate = useNavigate(); 
    const contents = useLoaderData();
    const { id } = useParams();
    const cardIdInt = parseInt(id);

    const content = contents.find(content => content.id === cardIdInt);
    const { title, description, donate_price, image} = content;

    const handleDonation = (id) =>{
        saveDonationId(id);
        toast('Your Donation has been Successful. Thank You')
    }
    const handleGoBack = () => {
            navigate(-1);
    }

    // const ColorApply = (title) => {
    //     if(color==='red'){
    //         return `${title}-red-`;
    //     }
    //     else if(color==='blue'){
    //         return `${title}-blue-`;
    //     }
    //     else if(color==='green'){
    //         return `${title}-green-`;
    // //     }
    // }

    return (
        <div className="md:max-w-6xl md:mx-auto mx-2 ">
            <div className="mb-10">
                <div className="mb-5 relative">
                    <div className=""><img className="w-full h-full object-cover rounded-t-2xl sm:w-screen sm:h-screen" src={image} alt="" /></div>
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-3 md:py-7 px-3">
                        <button onClick={()=> handleDonation(content.id)} className={`font-semibold backdrop-opacity-15 bg-red-500 rounded-md text-white px-2 md:px-4 py-1 md:py-2 hover:bg-green-500`}>Donate ${donate_price}</button>

                        
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold ">{title}</h2>
                    <p className="mt-3  text-justify">{description}</p>
                </div>

                <div className="text-center mt-8">
                <Link to='/'> <button onClick={handleGoBack} className="font-semibold backdrop-opacity-15 bg-black rounded-md text-white px-2 md:px-4 py-1 md:py-2 hover:bg-red-800 " >Go Back</button>
                        </Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Details;