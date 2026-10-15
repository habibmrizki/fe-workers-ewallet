import { toast } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";

const DEFAULT_CUSTOMER = {
  id: 1,
  contact_name: "Budi Santoso",
  phone_number: "081234567801",
  transaction_type: "Transfer",
  original_amount: 350000,
  status: true,
};

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

function ModalHistory({
  setIsOpen = () => {},
  customer = DEFAULT_CUSTOMER,
  onDelete,
}) {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(customer);
      return;
    }
    toast.success("Berhasil Menghapus histori", { autoClose: 1500 });
    setIsOpen(false);
  };

  const isSuccess = customer.status ?? true;

  return (
    <>
      <header className="px-5">
        <h1 className="text-gray-500">DETAIL TRANSACTION</h1>
        <hr className="border-t border-gray-500" />
        <div className="py-5">
          <Avatar name={customer.contact_name} />
        </div>
      </header>

      {/* pembungkus data user */}
      <div className="px-5 flex flex-col gap-2">
        <div>
          <h1 className="font-medium">Name:</h1>
          <p>{customer.contact_name}</p>
        </div>
        <div>
          {customer.phone_number && (
            <>
              <h1 className="font-medium">Phone:</h1>
              <p>{customer.phone_number}</p>
            </>
          )}
        </div>
        <div>
          <h1 className="font-medium">Status:</h1>
          <p>{isSuccess ? "Transfer Success" : "Transfer Failed"}</p>
        </div>
        <div>
          <h1 className="font-medium">Amount:</h1>
          <p
            className={`font-semibold lg:text-lg ${
              customer.transaction_type === "Send"
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            Rp.{customer.original_amount.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      <div className="px-5 mt-5 flex flex-col gap-5">
        <button
          type="button"
          className="border border-red-600 rounded-lg w-full flex justify-center items-center gap-5 h-10 cursor-pointer"
          onClick={handleDelete}
        >
          <RiDeleteBin6Line className="text-red-600" />
          <p className="text-red-600 font-medium">Delete</p>
        </button>
        <button
          type="button"
          className="bg-blue-600 rounded-lg w-full flex justify-center items-center gap-5 h-10 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <p className="text-white font-medium">Back</p>
        </button>
      </div>
    </>
  );
}

export default ModalHistory;
