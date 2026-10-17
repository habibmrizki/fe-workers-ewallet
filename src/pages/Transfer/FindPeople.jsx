import { useState } from "react";
import { FiSearch, FiStar, FiSend } from "react-icons/fi";

const contacts = [
  { id: 1, name: "Ghaluh 1", phone: "(239) 555-0108" },
  { id: 2, name: "Albert Flores", phone: "(239) 555-0108" },
  { id: 3, name: "Bessie Cooper", phone: "(239) 555-0108" },
  { id: 4, name: "Jacob Jones", phone: "(239) 555-0108" },
  { id: 5, name: "Leslie Alexander", phone: "(239) 555-0108" },
  { id: 6, name: "Cody Fisher", phone: "(239) 555-0108" },
  { id: 7, name: "Ralph Edwards", phone: "(239) 555-0108" },
];

function FindPeople({ onSelectContact }) {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredContacts = contacts.filter((contact) => {
    const searchValue = search.toLowerCase().trim();

    const searchNumber = search.replace(/\D/g, "");
    const phoneNumber = contact.phone.replace(/\D/g, "");

    const matchName = contact.name.toLowerCase().includes(searchValue);

    const matchPhone =
      searchNumber.length > 0 && phoneNumber.includes(searchNumber);

    return matchName || matchPhone;
  });

  const toggleFavorites = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const selectContact = (contact) => {
    onSelectContact(contact.id);
  };

  return (
    // PERBAIKAN: Gunakan min-h-screen dan w-full tanpa batasan max-w-97.5 pada mobile
    <div className="flex min-h-screen w-full flex-col bg-white">
      <header className="bg-brand-primary p-4 text-white h-14 flex items-center shrink-0 lg:hidden font-medium">
        Transfer
      </header>

      <main className="flex-1 bg-white p-4 sm:p-6 lg:px-10 lg:py-7">
        {/* STEPPER DESKTOP */}
        <div className="mb-5 hidden lg:block">
          <div className="flex items-center gap-3">
            <FiSend size={20} className="text-blue-600" />
            <h2 className="text-lg font-bold font-montserrat text-brand-secondary">
              Transfer Money
            </h2>
          </div>

          <div className="mt-5 flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-white font-medium">
                1
              </span>
              <span className="text-brand-primary font-medium">Find People</span>
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
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 text-white">
                3
              </span>
              <span className="text-gray-500">Finish</span>
            </div>
          </div>
        </div>

        {/* SEARCH & CONTACT LIST CONTAINER */}
        <div className="lg:rounded-xl lg:border lg:border-gray-200 lg:p-6">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-base font-semibold font-montserrat text-brand-secondary">
                Find People
              </h3>

              <p className="mt-1 hidden text-xs text-gray-500 lg:block">
                {filteredContacts.length} Results Found
              </p>
            </div>

            <div className="flex items-center rounded-lg border border-gray-300 focus-within:border-brand-primary lg:w-72">
              <input
                type="text"
                placeholder="Enter Number Or Full Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full p-3 text-xs text-brand-secondary outline-none placeholder:text-gray-400"
              />

              <FiSearch size={18} className="mr-3 shrink-0 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:gap-0">
            {filteredContacts.map((contact, index) => (
              <div
                key={contact.id}
                className={`flex items-center justify-between rounded-lg px-3 py-3 transition-colors hover:bg-brand-primary/5 lg:rounded-none lg:px-5 ${
                  index % 2 === 0 ? "lg:bg-gray-50" : "bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => selectContact(contact)}
                  className="flex min-w-0 flex-1 cursor-pointer items-center gap-4 text-left lg:grid lg:grid-cols-3 lg:gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-semibold text-brand-primary lg:justify-self-center">
                    {contact.name.charAt(0)}
                  </div>

                  <div className="min-w-0 lg:contents">
                    <p className="truncate text-sm font-medium text-brand-secondary lg:text-center">
                      {contact.name}
                    </p>

                    <p className="text-xs text-gray-500 lg:text-center">
                      {contact.phone}
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => toggleFavorites(contact.id)}
                  className="ml-3 shrink-0 cursor-pointer p-2"
                >
                  <FiStar
                    size={20}
                    className={
                      favorites.includes(contact.id)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                </button>
              </div>
            ))}

            {filteredContacts.length === 0 && (
              <p className="py-8 text-center text-sm text-gray-400">
                No contacts found
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default FindPeople;