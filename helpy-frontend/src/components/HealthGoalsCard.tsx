const HealthGoalsCard = () => {

return (
  <>
    <div className="card w-full bg-base-100 border border-gray-200 m-4">
      <div className="flex flex-col pl-8 pr-8 pt-4 pb-8 w-full h-full">
        <h2 className="card-title mt-4 mb-4">Objectifs de santé</h2>
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
    </div>
  </>
  );
};

export default HealthGoalsCard;