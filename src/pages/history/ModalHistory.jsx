import { RiDeleteBin6Line } from "react-icons/ri";

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

function ModalHistory({ customer, onClose, onDelete }) {
  const amount = Number(customer.amount) || 0;
  const getAvatarUrl = (avatar) => {
    if (!avatar) return "";
    if (/^(https?:|data:)/i.test(avatar)) return avatar;
    const clean = avatar.replace(/^\/+/, "").replace(/^public\//, "");
    const staticLogos = [
      "dana.svg",
      "bca.svg",
      "shopee-pay.png",
      "gopay.svg",
      "ovo.svg",
      "bri.svg",
      "bni.svg",
      "mandiri.svg",
    ];
    if (staticLogos.some((logo) => clean.toLowerCase().endsWith(logo))) {
      return `/${clean}`;
    }
    const baseUrl = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
    return `${baseUrl}/image/${clean.replace(/^image\//, "")}`;
  };

  const avatarUrl = getAvatarUrl(customer.avatar);

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
            onError={(event) => {
              const clean = customer.avatar
                ?.replace(/^\/+/, "")
                .replace(/^public\//, "");
              if (clean && !event.currentTarget.src.endsWith(`/${clean}`)) {
                event.currentTarget.src = `/${clean}`;
              } else {
                event.currentTarget.hidden = true;
              }
            }}
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

      <div className="flex flex-col gap-3 px-5">
        <button
          type="button"
          className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-600 font-medium text-red-600 hover:bg-red-50"
          onClick={onDelete}
        >
          <RiDeleteBin6Line aria-hidden="true" />
          Hapus dari riwayat
        </button>
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
