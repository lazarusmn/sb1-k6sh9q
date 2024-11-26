interface BalanceProps {
  balance: string;
}

export default function Balance({ balance }: BalanceProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-[2px]">
      <div className="relative rounded-[calc(1rem-1px)] bg-gray-800/50 backdrop-blur-xl p-6">
        <h2 className="text-lg font-medium text-gray-200">Available Balance</h2>
        <p className="mt-2 text-3xl font-bold text-white">{balance}</p>
        <div className="mt-4 flex items-center text-sm text-gray-300">
          <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
            +2.5% this week
          </span>
        </div>
      </div>
    </div>
  );
}