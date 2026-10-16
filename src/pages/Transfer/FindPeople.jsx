import { useState } from "react";
import {
  FiSearch,
  FiStar,
  FiGrid,
  FiSend,
  FiClock,
  FiPlusCircle,
  FiUser,
} from "react-icons/fi";

// Dummy data
const contacts = [
  { id: 1, name: "Ghaluh 1", phone: "(239) 555-0108" },
  { id: 2, name: "Albert Flores", phone: "(239) 555-0108" },
  { id: 3, name: "Bessie Cooper", phone: "(239) 555-0108" },
  { id: 4, name: "Jacob Jones", phone: "(239) 555-0108" },
  { id: 5, name: "Leslie Alexander", phone: "(239) 555-0108" },
  { id: 6, name: "Cody Fisher", phone: "(239) 555-0108" },
  { id: 7, name: "Ralph Edwards", phone: "(239) 555-0108" },
];

const navigation = [
  { name: "Dashboard", icon: FiGrid },
  { name: "Transfer", icon: FiSend },
  { name: "History", icon: FiClock },
  { name: "Top Up", icon: FiPlusCircle },
  { name: "Profile", icon: FiUser },
];

function FindPeople({ onSelectContact }) {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredContacts = contacts.filter((contact) =>
    `${contact.name} ${contact.phone}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

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
    <div className="mx-auto flex h-dvh w-full max-w-97.5 flex-col bg-white lg:h-auto lg:max-w-none">
      <header className="shrink-0 bg-brand-primary p-3 text-white lg:hidden">
        Transfer
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto bg-white p-4 lg:overflow-visible lg:p-6">
        <div className="mb-5 hidden lg:block">
          <div className="flex items-center gap-3">
            <FiSend size={20} className="text-brand-primary" />

            <h2 className="text-base font-semibold text-brand-secondary">
              Transfer Money
            </h2>
          </div>

          <div className="mt-5 flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-white">
                1
              </span>
              <span className="text-brand-primary">Find People</span>
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

        <div className="lg:rounded-md lg:border lg:border-gray-200 lg:p-6">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-bold text-brand-secondary">Find People</h3>

              <p className="mt-1 hidden text-xs text-gray-500 lg:block">
                {filteredContacts.length} Results Found
              </p>
            </div>

            <div className="flex items-center rounded-md border border-gray-300 focus-within:border-brand-primary lg:w-72">
              <input
                type="text"
                placeholder="Enter Number Or Full Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-11 w-full p-3 text-xs text-brand-secondary outline-none placeholder:text-gray-400 lg:h-10"
              />

              <FiSearch size={20} className="mr-3 shrink-0 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:gap-0">
            {filteredContacts.map((contact, index) => (
              <div
                key={contact.id}
                className={`flex items-center justify-between rounded-md px-3 py-3 transition-colors hover:bg-brand-primary/5 lg:rounded-none lg:px-5 ${
                  index % 2 === 0 ? "lg:bg-gray-50" : "bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => selectContact(contact)}
                  className="flex min-w-0 flex-1 cursor-pointer items-center gap-5 text-left lg:grid lg:grid-cols-3 lg:gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-100 text-sm font-semibold text-brand-primary lg:justify-self-center">
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
                        : "text-gray-500"
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

      <nav className="mt-auto grid shrink-0 grid-cols-5 border-t border-gray-100 bg-white px-2 py-3 lg:hidden">
        {navigation.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className={`flex flex-col items-center justify-center gap-1 ${
              name === "Transfer" ? "text-brand-primary" : "text-gray-400"
            }`}
          >
            <Icon size={19} />
            <span className="text-[10px]">{name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default FindPeople;
