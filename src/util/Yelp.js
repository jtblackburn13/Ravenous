const apiKey = '51COllIRNqq6uLZqLVNnkmn48DaHF-N6AiB6TO0oAHc5fOX17dFk4Pkc2p73iLW1qV_zCzmU1vBtYl1Ep4OaK1IFQJ-4Nn9yek0Ve18tjZ-5Qep-Cz-vxlHzcPYBW3Yx';
const Yelp= {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => (
          {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.display_address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        ));
      }
    })
  }
};

export default Yelp;
