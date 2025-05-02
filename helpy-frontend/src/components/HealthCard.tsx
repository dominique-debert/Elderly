const HealthCard = () => {

return (
    <div className="card mb-4 lg:mt-0 bg-base-100 border border-gray-200 ml-4 mr-4">
      <div className="card-body">
        <h2 className="card-title text-primary">Santé</h2>
        <div className="stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCard;