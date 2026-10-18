const getTypeLabel = (type) => {
  switch (type) {
    case "transfer_out":
      return "Transfer keluar";
    case "transfer_in":
      return "Transfer masuk";
    case "topup":
      return "Top up";
    default:
      return type || "Transaksi";
  }
};

function ModalHistory({ customer, onClose }) {
  const amount = Number(customer.amount) || 0;
  const baseUrl = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
  const avatarUrl = customer.avatar
    ? /^(https?:|data:)/i.test(customer.avatar)
      ? customer.avatar
      : `${baseUrl}/image/${customer.avatar.replace(/^\/+/, "")}`
    : "";

  return (
    <>
      <header className="px-5">
        <h2 className="text-gray-500">DETAIL TRANSAKSI</h2>
        <hr className="border-t border-gray-300" />
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={`Avatar ${customer.name || "kontak"}`}
            className="mt-5 h-15 w-15 rounded-xl object-cover"
          />
        )}
      </header>

      <div className="flex flex-col gap-3 px-5 py-5">
        <div>
          <h3 className="font-medium">Nama</h3>
          <p className="text-gray-500">{customer.name || "Unknown"}</p>
        </div>
        {customer.phone && (
          <div>
            <h3 className="font-medium">Nomor telepon</h3>
            <p className="text-gray-500">{customer.phone}</p>
          </div>
        )}
        <div>
          <h3 className="font-medium">Jenis transaksi</h3>
          <p className="text-gray-500">{getTypeLabel(customer.type)}</p>
        </div>
        <div>
          <h3 className="font-medium">Nominal</h3>
          <p
            className={`font-semibold lg:text-lg ${amount < 0 ? "text-red-500" : "text-green-600"}`}
          >
            {amount < 0 ? "-" : "+"}Rp{Math.abs(amount).toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      <div className="px-5">
        <button
          type="button"
          className="h-10 w-full cursor-pointer rounded-lg bg-blue-600 font-medium text-white"
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </>
  );
}

export default ModalHistory;
