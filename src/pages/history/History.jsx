import { useState } from "react";
import { toast } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalHistory from "./ModalHistory";
import { CiSearch } from "react-icons/ci";
import { RiHistoryFill } from "react-icons/ri";

const DUMMY_TRANSACTIONS = [
  {
    id: 1,
    contact_name: "Budi Santoso",
    phone_number: "081234567801",
    transaction_type: "Transfer",
    original_amount: 350000,
  },
  {
    id: 2,
    contact_name: "Siti Rahma",
    phone_number: "081234567802",
    transaction_type: "Send",
    original_amount: 120000,
  },
  {
    id: 3,
    contact_name: "BCA",
    phone_number: "081234567803",
    transaction_type: "Topup",
    original_amount: 500000,
  },
  {
    id: 4,
    contact_name: "Andi Pratama",
    phone_number: "081234567804",
    transaction_type: "Send",
    original_amount: 75000,
  },
  {
    id: 5,
    contact_name: "Dewi Lestari",
    phone_number: "081234567805",
    transaction_type: "Transfer",
    original_amount: 200000,
  },
];

const PAGE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TOTAL_PAGE = 9;
const ACTIVE_PAGE = 1;

const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="w-15 h-15 shrink-0 rounded-xl bg-gray-200 text-gray-700 flex items-center justify-center font-semibold">
      {initials}
    </div>
  );
};

function History() {
  const [transactions, setTransactions] = useState(DUMMY_TRANSACTIONS);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleClick = (customer) => {
    if (window.innerWidth < 768) {
      setSelectedCustomer(customer);
      setIsOpen(true);
    }
  };

  const handleDelete = (customer) => {
    setTransactions((prev) => prev.filter((t) => t.id !== customer.id));
    toast.success("Berhasil Menghapus histori", { autoClose: 1500 });
  };

  const handleCancelDelete = () => setDeleteTarget(null);

  const handleConfirmDelete = () => {
    handleDelete(deleteTarget);
    setDeleteTarget(null);
    setIsOpen(false);
  };

  return (
    <main className="md:flex flex-col gap-6 md:px-10 md:py-7">
      <div className="hidden md:flex gap-3 cursor-pointer items-center">
        <RiHistoryFill className="text-xl text-blue-600"/>
        <p className="font-bold text-lg font-montserrat">History Transaction</p>
      </div>
      <header className="shrink-0 bg-brand-primary p-3 text-white lg:hidden">
        History
      </header>
      <div className="p-6 md:p-0 md:border md:border-gray-200">
        {/* search */}
        <section className="md:mx-8 md:flex md:justify-between items-center">
          <p className="text-lg md:text-base font-medium md:font-semibold font-montserrat">Find Transaction</p>
          <div
            id="search"
            className="flex pt-2 gap-3.5 max-md:flex max-md:flex-col md:w-80 lg:w-96"
          >
            <div className="relative flex items-center w-full border border-solid border-[#E8E8E8] rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Enter Number Or Full Name"
                className="min-w-0 flex-1 px-5 py-2 outline-none border-none bg-transparent placeholder:text-sm placeholder:text-gray-400"
              />
              <button type="button" className="p-3">
                <CiSearch className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* History user */}
        <section className="md:mx-8 mt-2">
          {transactions.length > 0 ? (
            <table className="w-full border-separate border-spacing-y-3 md:border-spacing-y-4">
              <tbody>
                {transactions.map((data) => {
                  const bg = data.id % 2 === 0 ? "bg-white" : "bg-gray-100";

                  return (
                    <tr
                      key={data.id}
                      className="cursor-pointer md:cursor-default"
                      onClick={() => handleClick(data)}
                    >
                      {/* Foto */}
                      <td
                        className={`hidden md:table-cell w-24 p-4 rounded-l ${bg}`}
                      >
                        <Avatar name={data.contact_name} />
                      </td>

                      {/* Nama */}
                      <td
                        className={`p-4 align-middle rounded-l md:rounded-none md:w-1/3 ${bg}`}
                      >
                        <p className="text-sm md:text-sm lg:text-base font-medium font-montserrat text-gray-600">
                          {data.contact_name}
                        </p>
                        <p className="mt-1 text-sm md:hidden">
                          {data.phone_number}
                        </p>
                      </td>

                      {/* Nomor */}
                      <td
                        className={`hidden md:table-cell p-4 text-gray-600 text-sm md:text-base md:w-1/3 ${bg}`}
                      >
                        {data.phone_number}
                      </td>

                      {/* Nominal */}
                      <td
                        className={`p-4 text-right md:text-left rounded-r md:rounded-none ${bg}`}
                      >
                        {data.transaction_type === "Send" ? (
                          <span className="text-sm text-red-500 md:text-base">
                            -Rp{data.original_amount.toLocaleString("id-ID")}
                          </span>
                        ) : (
                          <span className="text-sm text-green-500 md:text-base">
                            +Rp{data.original_amount.toLocaleString("id-ID")}
                          </span>
                        )}
                      </td>

                      {/* Hapus */}
                      <td
                        className={`hidden md:table-cell w-16 p-4 text-right rounded-r ${bg}`}
                      >
                        <button
                          type="button"
                          aria-label="Hapus transaksi"
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeleteTarget(data);
                          }}
                        >
                          <RiDeleteBin6Line className="text-brand-red" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="mt-3 text-center font-semibold">
              You haven’t made any transactions yet.
            </p>
          )}
        </section>

        {/* Pagination */}
        <div className="mx-5 md:mx-10 my-10 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div>
            <p className="text-xs md:text-sm">{`Show ${ACTIVE_PAGE} History of ${TOTAL_PAGE} Page`}</p>
          </div>
          <div className="pagination flex flex-wrap justify-center items-center sm:gap-3 text-sm sm:text-base">
            <button
              type="button"
              className="px-2 py-1 text-gray-500 cursor-pointer transition-colors duration-200 hover:text-blue-600"
            >
              Prev
            </button>

            {PAGE_NUMBERS.map((num) => (
              <button
                key={num}
                type="button"
                className={`px-2 py-1 cursor-pointer transition-colors duration-200 hover:text-blue-600 ${
                  ACTIVE_PAGE === num
                    ? "text-blue-600 font-medium"
                    : "text-gray-500"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              type="button"
              className="px-2 py-1 font-medium text-gray-900 cursor-pointer transition-colors duration-200 hover:text-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {isOpen && selectedCustomer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-xl bg-white py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHistory
              customer={selectedCustomer}
              setIsOpen={setIsOpen}
              onDelete={setDeleteTarget}
            />
          </div>
        </div>
      )}

      {/* Modal konfirmasi hapus */}
      {deleteTarget && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-5"
          onClick={handleCancelDelete}
        >
          <div
            className="w-full max-w-100 rounded-xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-sm md:text-base text-black">
              Anda yakin ingin menghapus Histori Transaksi ini?
            </h2>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="cursor-pointer rounded bg-gray-400 px-6 py-2 text-white text-sm transition-colors duration-200 hover:bg-gray-500"
                onClick={handleCancelDelete}
              >
                Batal
              </button>
              <button
                type="button"
                className="cursor-pointer rounded bg-red-600 px-6 py-2 text-white text-sm transition-colors duration-200 hover:bg-red-700"
                onClick={handleConfirmDelete}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default History;
