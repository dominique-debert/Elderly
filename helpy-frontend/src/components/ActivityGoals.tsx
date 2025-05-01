const ActivityGoals = () => {

return (
  <>
    <div className="flex flex-col p-4 w-full">
      <h2 className="card-title font-light">ICI: Objectifs d'activité</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
        {/* Case 1 : prend 2 lignes */}
        <div className="card bg-pink-50 text-neutral-content shadow h-full">
          <div className="card-body">
            <h2 className="card-title self-center">1</h2>
          </div>
        </div>

        {/* Case 2 */}
        <div>
          <div className="card bg-slate-50 text-neutral-content shadow h-full">
            <div className="card-body">
              <h2 className="card-title self-center">2</h2>
            </div>
          </div>
        </div>

        {/* Case 3 */}
        <div>
          <div className="card bg-stone-50 text-neutral-content shadow h-full">
            <div className="card-body">
              <h2 className="card-title self-center">3</h2>
            </div>
          </div>
        </div>

        {/* Case 4 : prend 2 colonnes */}
        <div className="card bg-gray-50 text-neutral-content shadow h-full">
          <div className="card-body">
            <h2 className="card-title self-center">4</h2>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default ActivityGoals;