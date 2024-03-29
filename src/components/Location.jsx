import locationImg from "/src/assets/images/location.jpg";

const Location = () => {
  return (
    <div>
      <div className="bg-[#E7E7E7] flex flex-col sm:flex-row">
        <div className="sm:w-1/2 w-full">
          <h2>Gestion de la location</h2>
        </div>
        <div className="sm:w-1/2 w-full m-auto">
          <img
            src={locationImg}
            alt="location Img"
            className="w-[95%] h-[90%] rounded-3xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
