import { useState } from "react";
import FindPeople from "./FIndPeople";
import PeopleInformation from "./PeopleInformation";

function TransferPage() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {selectedId === null ? (
        <FindPeople onSelectContact={setSelectedId} />
      ) : (
        <PeopleInformation selectedId={selectedId} />
      )}
    </>
  );
}

export default TransferPage;
