const HealthGoalsCard = () => {

return (
  <>
    <div className="card w-full bg-base-100 ml-4 pr-4 lg:mb-4 mt-8 mr-8">
      <div className="flex flex-col w-full h-full">
        <h2 className="card-title mt-4 mb-4">Objectifs de santé</h2>

        <div className="grid grid-cols-2 grid-rows-2 lg:gap-8 md:gap-4 h-full">
          {[
            { id: 1, bg: "bg-pink-50" },
            { id: 2, bg: "bg-slate-50" },
            { id: 3, bg: "bg-stone-50" },
            { id: 4, bg: "bg-gray-50" },
          ].map(({ id, bg }) => (
            <div key={id} className={`card ${bg} text-neutral-content h-full`}>
              <div className="card-body">
                <h2 className="card-title self-center">{id}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default HealthGoalsCard;