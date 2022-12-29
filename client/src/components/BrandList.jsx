// Dependencies
import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GolbalContext';

// Components
import SubsidiaryList from '../components/SubsidiaryList';

// Main function
const BrandList = ({ listOfBrandsUnique, monitoringData }) => {
  // Context
  const { editTitle } = useContext(GlobalContext);

  // States
  const [showBrands, setShowBrands] = useState(true); // Show list of brands to select (true) or show selected brand (false)
  const [selectedBrand, setSelectedBrand] = useState();

  // Show selected brand
  function showSelectedBrandUnique(brand) {
    setSelectedBrand(brand);
    // console.log('showSelectedBrandUnique():' + brand);
    brand ? setShowBrands(false) : setShowBrands(true);
    // Edit Title
    brand ? editTitle('Sucursales') : editTitle('Marcas');
  }

  return (
    <Fragment>
      <div className="grid content-start grid-cols-1 gap-1 pb-1 h-full">
        {/* Flow 2: Show list of brand to select */}
        {showBrands &&
          listOfBrandsUnique.map(
            (brand, key) =>
              brand && (
                <div
                  className="w-full btn-outlet"
                  key={key}
                  onClick={() => showSelectedBrandUnique(brand)}
                >
                  {brand}
                </div>
              )
          )}
        {/* Show selected brand */}
        {!showBrands && (
          <div
            className="w-full btn-selected"
            onClick={() => showSelectedBrandUnique()}
          >
            {selectedBrand}
          </div>
        )}
        {/* Flow 2: Select Subsidiary. (if subsidiary = 1, don't show) */}
        {selectedBrand && (
          <SubsidiaryList data={monitoringData} brand={selectedBrand} />
        )}
      </div>
    </Fragment>
  );
};

export default BrandList;
