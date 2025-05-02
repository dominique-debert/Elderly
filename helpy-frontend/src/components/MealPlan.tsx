const MealPlan = () => {

return (
  <>
    <div className="flex flex-col w-full h-full mr-4 mt-8">
      <div className="card bg-base-100 h-full ml-4">
        <h2 className="card-title mb-4">Planification des repas</h2>

        {[
          { id: 1, bg: "bg-pink-50", text: "Matin" },
          { id: 2, bg: "bg-slate-50", text: "Midi" },
        ].map(({ id, bg, text }) => (
          <div key={id} className={`card ${bg} text-neutral-content h-full mb-4 lg:mb-8`}>
            <div className="card-body">
              <h2 className="card-title self-center">{text}</h2>
            </div>
          </div>
        ))}

        {/* Dernière carte avec style particulier */}
        <div className="card bg-gray-50 text-neutral-content h-full">
          <div className="card-body">
            <h2 className="card-title self-center">Soir</h2>
          </div>
        </div>
      </div>
    </div>
  </>  
  );
};

export default MealPlan; 