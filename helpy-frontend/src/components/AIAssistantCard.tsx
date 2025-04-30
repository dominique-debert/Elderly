const AIAssistantCard = () => {

return (
  <>
    <div className="flex flex-col p-4 w-full">
      <h2 className="font-light">ICI: Assistant IA</h2>
      <div className="card w-full">
        <figure className="rounded-xl relative glass">
          <img src="/images/brain.png" alt="brain" className="w-full p-20" />
          <div className="absolute left-1/2 top-1/2">
            <button className="btn btn-red-100 text-gray-400 hover:bg-primary/30 rounded-lg">1</button>
          </div>
        </figure>
      </div>
    </div>
  </>
  );
};

export default AIAssistantCard;