import { FiSend, FiCheckCircle, FiRepeat, FiHome } from "react-icons/fi";
import { Link } from "react-router";

const contacts = [
  { id: 1, name: "Ghaluh 1", phone: "0815-555-0108" },
  { id: 2, name: "Albert Flores", phone: "0812-555-0108" },
  { id: 3, name: "Bessie Cooper", phone: "0896-555-0108" },
  { id: 4, name: "Jacob Jones", phone: "0871-555-0108" },
  { id: 5, name: "Leslie Alexander", phone: "0830-555-0108" },
  { id: 6, name: "Cody Fisher", phone: "0877-555-0108" },
  { id: 7, name: "Ralph Edwards", phone: "0855-555-0108" },
];

function TransferSummary({
  selectedId,
  amount,
  notes,
  transactionId,
  transactionDate,
  onSendAgain,
  onBackDashboard,
}) {
  const contact = contacts.find((item) => item.id === selectedId);

  const formattedAmount = amount
    ? `Rp ${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
    : "Rp 0";

  const currentDate = transactionDate
    ? new Date(transactionDate).toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "-";

  return (
    <div className="relative mx-auto flex h-dvh w-full flex-col bg-white lg:h-auto lg:min-h-screen">
      <header className="flex h-14 items-center bg-brand-primary text-white lg:hidden">
        Transfer
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto bg-white p-4 lg:overflow-visible lg:p-6">
        <div className="mb-6 hidden lg:block">
          <div className="flex items-center gap-3">
            <FiSend size={20} className="text-brand-primary" />
            <h2 className="text-base font-semibold text-brand-secondary">
              Transfer Money
            </h2>
          </div>

          {/* Stepper */}
          <div className="mt-5 flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 text-white">
                1
              </span>
              <span className="text-gray-500">Find People</span>
            </div>

            <div className="w-16 border-t border-dashed border-gray-300" />

            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 text-white">
                2
              </span>
              <span className="text-gray-500">Set Nominal</span>
            </div>

            <div className="w-16 border-t border-dashed border-gray-300" />

            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-white">
                3
              </span>
              <span className="text-brand-primary">Finish</span>
            </div>
          </div>
        </div>

        {/* Summary card */}
        <div className="w-full rounded-md border border-gray-200 bg-white p-4 lg:p-5">
          <div className="flex flex-col items-center border-b border-gray-200 pb-5">
            <FiCheckCircle size={44} className="text-green-500" />
            <h3 className="mt-3 text-lg font-semibold text-brand-secondary">
              Transfer Success
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Your transfer has been completed successfully
            </p>

            <p className="mt-5 text-sm font-medium text-gray-500">Amount</p>
            <p className="mt-2 max-w-full wrap-break-word text-center text-2xl font-bold text-brand-secondary sm:text-3xl">
              {formattedAmount}
            </p>
          </div>

          {/* Detail */}
          <div className="mx-auto mt-6 grid w-full max-w-350 gap-4">
            <div className="flex items-center justify-between gap-4 border-b border-gray-100 py-4">
              <span className="text-sm text-gray-500">From</span>
              <div className="text-right">
                <p className="text-sm font-medium text-brand-secondary">
                  E-Wallet Balance
                </p>
                <p className="text-xs text-gray-500">0812-0000-1111</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-sm text-gray-500">To</span>
              <div className="text-right">
                <p className="text-sm font-medium text-brand-secondary">
                  {contact?.name || "-"}
                </p>
                <p className="text-xs text-gray-500">{contact?.phone || "-"}</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-sm text-gray-500">Date & Time</span>
              <p className="text-sm font-medium text-brand-secondary">
                {currentDate}
              </p>
            </div>

            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-sm text-gray-500">Transaction ID</span>
              <p className="text-sm font-medium text-brand-secondary">
                {transactionId}
              </p>
            </div>

            <div className="flex items-start justify-between border-b border-gray-100 pb-3">
              <span className="text-sm text-gray-500">Notes</span>
              <p className="max-w-[60%] text-right text-sm font-medium text-brand-secondary">
                {notes || "-"}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Status</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                Completed
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 lg:flex-row">
            <button
              type="button"
              onClick={onSendAgain}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-brand-primary text-sm text-white hover:opacity-90"
            >
              <FiRepeat size={16} />
              <Link to="/transfer">
                Send Again
              </Link>
            </button>

            <button
              type="button"
              onClick={onBackDashboard}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-md border border-brand-primary bg-white text-sm text-brand-primary hover:bg-brand-primary/5"
            >
              <FiHome size={16} />
              <Link to="/dashboard">
                Back To Dashboard
              </Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TransferSummary;
