const GeneralMetricsCard = () => {

return (
  <>
    <div className="card w-full bg-base-100 ml-4 pr-4 lg:mb-4 mt-4">
      <div className="flex flex-col w-full h-full">
        <h2 className="card-title mt-4 mb-4">Mesures générales</h2>

        <div className="grid grid-cols-3 grid-rows-2 lg:gap-8 md:gap-4 h-full">
          {[
            { id: 1, bg: "bg-pink-50", className: "row-span-2" },
            { id: 2, bg: "bg-indigo-50" },
            { id: 3, bg: "bg-yellow-50" },
            { id: 4, bg: "bg-blue-50", className: "col-span-2" },
          ].map(({ id, bg, className }) => (
            <div key={id} className={className}>
              <div className={`card ${bg} text-neutral-content h-full`}>
                <div className="card-body">
                  <h2 className="card-title self-center">{id}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default GeneralMetricsCard;