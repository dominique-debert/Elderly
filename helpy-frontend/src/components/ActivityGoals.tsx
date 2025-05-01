const ActivityGoals = () => {

return (
  <>
    <div className="flex flex-col w-full h-full ml-8 lg:mb-4 mt-4">
      <div className="card w-full bg-base-100 h-full">
        <h2 className="card-title mb-4">Objectifs d'activité</h2>

        <div className="grid grid-cols-2 grid-rows-2 lg:gap-8 md:gap-4 h-full">
          {[
            { id: 1, bg: "bg-pink-50" },
            { id: 2, bg: "bg-slate-50", className: "md:mr-8" },
            { id: 3, bg: "bg-stone-50" },
            { id: 4, bg: "bg-gray-50", className: "md:mr-8" },
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

export default ActivityGoals;