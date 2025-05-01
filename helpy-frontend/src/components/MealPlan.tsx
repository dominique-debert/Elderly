const MealPlan = () => {

return (
  <>
    <div className="flex flex-col w-full h-full md:mt-4 mr-8">
      <div className="card w-full bg-base-100 ml-4 mr-8 p-4 space-y-4 h-full">
        <h2 className="card-title">Planification des repas</h2>

        {[
          { id: 1, bg: "bg-pink-50" },
          { id: 2, bg: "bg-slate-50" },
          { id: 3, bg: "bg-stone-50" },
          { id: 4, bg: "bg-gray-50" },
        ].map(({ id, bg }) => (
          <div key={id} className={`card ${bg} text-neutral-content`}>
            <div className="card-body">
              <h2 className="card-title self-center">{id}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};


export default MealPlan;