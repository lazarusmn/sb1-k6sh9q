const transactions = [
  {
    type: "Received Tip",
    amount: "R 50.00",
    date: "2024-03-20 14:30"
  },
  {
    type: "Sent Tip",
    amount: "R 20.00",
    date: "2024-03-20 12:15"
  },
  {
    type: "Withdrawal",
    amount: "R 100.00",
    date: "2024-03-19 16:45"
  }
];

export default function RecentTransactions() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="card">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">{transaction.type}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <p className="text-blue-500 font-bold">{transaction.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}