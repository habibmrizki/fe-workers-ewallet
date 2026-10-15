import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router";
import { LuSend } from "react-icons/lu";
import { MdOutlineAddCard } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

ChartJS.defaults.font.family = "Montserrat, Inter, sans-serif";
ChartJS.defaults.color = "#4f5665";

const COLOR_INCOME = "#1e293b";
const COLOR_EXPENSE = "#d00000";

const DUMMY_BALANCE = 2500000;

const DUMMY_TRANSACTIONS = [
  {
    id: 1,
    contact_name: "Budi Santoso",
    transaction_type: "Transfer",
    original_amount: 350000,
  },
  {
    id: 2,
    contact_name: "Siti Rahma",
    transaction_type: "Send",
    original_amount: 120000,
  },
  {
    id: 3,
    contact_name: "BCA",
    transaction_type: "Topup",
    original_amount: 500000,
  },
  {
    id: 4,
    contact_name: "Andi Pratama",
    transaction_type: "Send",
    original_amount: 75000,
  },
  {
    id: 5,
    contact_name: "Dewi Lestari",
    transaction_type: "Transfer",
    original_amount: 200000,
  },
  {
    id: 6,
    contact_name: "Mandiri",
    transaction_type: "Topup",
    original_amount: 1000000,
  },
  {
    id: 7,
    contact_name: "Rizky Ramadhan",
    transaction_type: "Send",
    original_amount: 250000,
  },
  {
    id: 8,
    contact_name: "Putri Anggraini",
    transaction_type: "Transfer",
    original_amount: 150000,
  },
];

const DUMMY_CHART = {
  seven_days: {
    labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    expense_data: [120000, 80000, 150000, 60000, 200000, 90000, 110000],
    income_data: [200000, 150000, 100000, 180000, 250000, 70000, 130000],
  },
  five_weeks: {
    labels: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4", "Minggu 5"],
    expense_data: [400000, 350000, 500000, 300000, 450000],
    income_data: [600000, 500000, 550000, 480000, 700000],
  },
  twelve_months: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    expense_data: [
      1200000, 900000, 1500000, 800000, 1100000, 950000, 1300000, 1000000,
      1400000, 1250000, 900000, 1600000,
    ],
    income_data: [
      2000000, 1800000, 2200000, 1700000, 2100000, 1900000, 2300000, 2000000,
      2400000, 2150000, 1800000, 2500000,
    ],
  },
};

const Avatar = ({ name, isBank }) => {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center font-semibold text-sm ${
        isBank
          ? "bg-brand-secondary text-white"
          : "bg-gray-200 text-brand-secondary"
      }`}
    >
      {initials}
    </div>
  );
};

const Dashboard = () => {
  const balance = DUMMY_BALANCE;
  const transactions = DUMMY_TRANSACTIONS;

  const [filter, setFilter] = useState("All");
  const [range, setRange] = useState("seven_days");

  const chart = DUMMY_CHART[range];

  const handleDropDownRange = (event) => setRange(event.target.value);
  const handleDropDownFilter = (event) => setFilter(event.target.value);

  // option chart JS
  const allDatasets = [
    {
      label: "Expense",
      data: chart.expense_data,
      backgroundColor: COLOR_EXPENSE,
      borderRadius: 8,
    },
    {
      label: "Income",
      data: chart.income_data,
      backgroundColor: COLOR_INCOME,
      borderRadius: 8,
    },
  ];

  const filteredDatasets =
    filter === "All"
      ? allDatasets
      : allDatasets.filter((d) => d.label === filter);

  const allDataValues = allDatasets.flatMap((dataset) => dataset.data);
  const maxDataValue = Math.max(0, ...allDataValues);
  const stepSize = Math.max(50000, Math.ceil(maxDataValue / 5 / 50000) * 50000);
  const maxScale = Math.ceil((maxDataValue * 1.1) / stepSize) * stepSize;

  const data = {
    labels: chart.labels,
    datasets: filteredDatasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: maxScale,
        ticks: {
          stepSize: stepSize,
          callback: (value) => `Rp${value.toLocaleString("id-ID")}`,
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const income = transactions.reduce(
    (total, d) =>
      d.transaction_type === "Transfer" ? total + d.original_amount : total,
    0,
  );

  const expense = transactions.reduce(
    (total, d) =>
      d.transaction_type === "Send" ? total + d.original_amount : total,
    0,
  );

  const selectClass =
    "appearance-none w-full bg-white border border-gray-300 hover:border-brand-background focus:border-brand-secondary text-brand-secondary py-2 pl-4 pr-10 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-background/40";

  return (
    <section className="font-montserrat text-brand-secondary">
      <div className="bagian-top md:pt-8 px-6 flex flex-col md:flex-row gap-8">
        {/* Card kiri */}
        <div className="border border-gray-300 rounded-lg w-full md:w-[30%] flex-col gap-3 p-6 hidden md:flex">
          <div className="flex items-center gap-2.5 text-brand-charcoal">
            <IoWalletOutline className="text-xl shrink-0" />
            <span>Balance</span>
          </div>
          <div className="font-jakarta font-semibold text-xl">
            Rp {balance.toLocaleString("id-ID")}
          </div>
          <div className="flex flex-wrap gap-7 gap-y-4">
            <div>
              <p className="text-brand-charcoal">Income</p>
              <div className="flex gap-2 items-center">
                <span className="text-brand-green">
                  Rp {income.toLocaleString("id-ID")}
                </span>
                <span className="text-brand-green">+2%</span>
                <FaArrowTrendUp className="text-brand-green" />
              </div>
            </div>
            <div>
              <p className="text-brand-charcoal">Expense</p>
              <div className="flex items-center gap-2">
                <span className="text-brand-red">
                  Rp {expense.toLocaleString("id-ID")}
                </span>
                <span className="text-brand-red">+2%</span>
                <FaArrowTrendDown className="text-brand-red" />
              </div>
            </div>
          </div>
        </div>

        {/* Fast Service */}
        <div className="border border-gray-300 rounded-lg w-full md:w-[70%] justify-between items-center p-4 gap-3 hidden md:flex">
          <div className="font-jakarta font-semibold text-[16px]">
            Fast Service
          </div>
          <div className="flex gap-4">
            <Link
              type="button"
              className="bg-brand-secondary hover:bg-brand-secondary transition-colors flex h-11.25 p-2.5 items-center justify-center gap-2.5 rounded-md cursor-pointer"
              to="/top-up"
            >
              <MdOutlineAddCard className="text-white" />
              <span className="text-white">Top Up</span>
            </Link>
            <Link
              type="button"
              className="bg-brand-secondary hover:bg-brand-secondary transition-colors flex h-11.25 p-2.5 items-center justify-center gap-2.5 rounded-md cursor-pointer"
              to="/transfer"
            >
              <LuSend className="text-white" />
              <span className="text-white">Transfer</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Balance Mobile */}
      <div className="bg-brand-secondary w-full h-52rounded-none p-5 relative overflow-hidden block md:hidden">
        <div className="relative bg-white rounded-2xl h-39.5 p-5 overflow-hidden">
          <div className="flex justify-between items-center relative z-10">
            <div className="flex flex-col gap-2">
              <div className="text-sm text-brand-charcoal">Balance</div>
              <div className="font-jakarta text-xl font-semibold">
                Rp {balance.toLocaleString("id-ID")}
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-2.5">
                <Link
                  type="button"
                  className="bg-brand-secondary h-12 w-12 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                  to="/top-up"
                >
                  <LuPlus className="text-white" />
                </Link>
                <div>Top Up</div>
              </div>
              <div className="flex flex-col items-center gap-2.5">
                <Link
                  type="button"
                  className="bg-brand-secondary h-12 w-12 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                  to="/transfer"
                >
                  <LuSend className="text-white" />
                </Link>
                <div>Transfer</div>
              </div>
            </div>
          </div>
          {/* Wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
            <svg
              className="relative block w-full h-25"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#0F172A1A"
                d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,112C672,128,768,192,864,224C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 py-8 px-6 w-full">
        {/* Chart Section */}
        <div className="lg:col-span-7 chart p-4 rounded-2xl border border-gray-300 w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-jakarta text-lg font-semibold text-brand-secondary">
              Financial Chart
            </h2>

            <div className="flex gap-2">
              {/* Range Dropdown */}
              <div className="relative inline-block w-48">
                <select
                  value={range}
                  onChange={handleDropDownRange}
                  className={selectClass}
                >
                  <option value="seven_days">7 Days</option>
                  <option value="five_weeks">5 Weeks</option>
                  <option value="twelve_months">12 Months</option>
                </select>

                {/* Dropdown arrow icon */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-brand-charcoal">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Filter Dropdown */}
              <div className="relative inline-block">
                <select
                  value={filter}
                  onChange={handleDropDownFilter}
                  className={selectClass}
                >
                  <option value="All">All</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>
            </div>
          </div>
          <Bar data={data} options={options} />
        </div>

        {/* Transaction History */}
        <div className="lg:col-span-3 transaction-history flex flex-col">
          {/* List transaksi */}
          <div className="flex flex-col gap-5 p-2 min-h-100 max-h-100 overflow-y-scroll border border-gray-300 rounded-lg rounded-b-lg">
            <div className="flex flex-row justify-between items-center rounded-lg rounded-t-lg p-4">
              <div className="font-jakarta font-semibold">
                Transaction History
              </div>
              <Link
                type="button"
                className="cursor-pointer text-brand-background hover:text-brand-secondary transition-colors"
                to="/history"
              >
                See All
              </Link>
            </div>

            {transactions.length > 0 ? (
              transactions.map((item) => (
                <div
                  key={item.id}
                  className="divide-y divide-gray-200 bg-white rounded-b-lg"
                >
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <Avatar
                        name={item.contact_name}
                        isBank={item.transaction_type === "Topup"}
                      />
                      <div className="flex flex-col gap-1">
                        <div className="font-medium text-brand-secondary">
                          {item.contact_name}
                        </div>
                        <div className="text-sm text-brand-charcoal">
                          {item.transaction_type}
                        </div>
                      </div>
                    </div>
                    {item.transaction_type === "Send" ? (
                      <p className="text-brand-red">
                        -Rp{item.original_amount.toLocaleString("id-ID")}
                      </p>
                    ) : (
                      <p className="text-brand-green">
                        +Rp{item.original_amount.toLocaleString("id-ID")}
                      </p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-brand-charcoal">
                You haven’t made any transactions yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
