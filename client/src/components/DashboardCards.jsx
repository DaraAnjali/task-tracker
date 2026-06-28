const DashboardCards = ({ tasks }) => {

  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const high = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const cards = [
    {
      title: "Total",
      value: total,
      color: "bg-blue-500",
    },
    {
      title: "Pending",
      value: pending,
      color: "bg-yellow-500",
    },
    {
      title: "Completed",
      value: completed,
      color: "bg-green-500",
    },
    {
      title: "High Priority",
      value: high,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mt-8">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`${card.color} text-white rounded-xl p-6 shadow-lg`}
        >
          <h3 className="text-lg">
            {card.title}
          </h3>

          <p className="text-4xl font-bold mt-3">
            {card.value}
          </p>
        </div>

      ))}

    </div>
  );
};

export default DashboardCards;