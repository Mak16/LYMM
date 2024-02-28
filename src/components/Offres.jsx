import Services from "./Services";

const Offres = () => {
  return (
    <div>
      <div
        className={`bg-[url(/src/assets/images/offers-bg.jpg)] w-full h-[40vh] sm:h-[90vh] bg-cover bg-center`}
      >
        <div className="w-[90%] flex flex-col  relative m-auto ">
        <div className="bg-black w-full sm:h-[70vh] h-[35vh] flex items-center flex-col  opacity-75  sm:bottom-20 bottom-8 rounded-t-3xl ">
          <h2 className="text-white flex justify-self-center text-3xl mt-2">Nos offres</h2>
          <Services classServices="text-white mt-2" title="Mise en location" >

          </Services>
        </div>
        <div className="bg-white h-10 w-full mt-"></div>
        </div>
      </div>
    </div>
  );
};

export default Offres;
