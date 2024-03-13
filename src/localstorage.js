const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donation'); 

    if(storedDonation){
        return JSON.parse(storedDonation); 
    }
    else{
        return []; 
    }
}


const convertDonation = donation => {
    const donationString = JSON.stringify(donation);
    localStorage.setItem('donation', donationString);
}


const saveDonationId = id => {
    const storedDonation = getStoredDonation(); 
    if (!storedDonation.includes(id)) {
        // If not, push the new ID to the array
        storedDonation.push(id);
        
        // Update the stored donation array
        convertDonation(storedDonation);
    }
}

export {saveDonationId, getStoredDonation};