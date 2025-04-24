const ServiceCard = () => {

return (
    <div className="card w-1/3 bg-base-100 shadow-lg border border-gray-200">
      <div className="card-body">
        <h2 className="card-title text-primary">Services</h2>
        <div className="stats">
          <div className="stat w-full">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;