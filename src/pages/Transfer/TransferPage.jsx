import { useState } from "react";
import FindPeople from "./FIndPeople";
import PeopleInformation from "./PeopleInformation";
import TransferSummary from "./TransferSummary";

function TransferPage() {
  const [selectedId, setSelectedId] = useState(null);
  const [step, setStep] = useState("findPeople");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [transactionDate, setTransactionDate] = useState("");

  const handleSelectContact = (id) => {
    setSelectedId(id);
    setStep("setNominal");
  };

  const handleSendAgain = () => {
    setSelectedId(null);
    setAmount("");
    setNotes("");
    setTransactionId("");
    setTransactionDate("");
    setStep("findPeople");
  };

  const handleBackDashboard = () => {
    console.log("back to dashboard");
  };

  const handleFinishSuccess = () => {
    setTransactionId(`TRX-${Date.now()}`);
    setTransactionDate(new Date().toISOString());
    setStep("finish");
  };

  return (
    <>
      {step === "findPeople" && (
        <FindPeople onSelectContact={handleSelectContact} />
      )}

      {step === "setNominal" && (
        <PeopleInformation
          selectedId={selectedId}
          amount={amount}
          setAmount={setAmount}
          notes={notes}
          setNotes={setNotes}
          onFinishSuccess={handleFinishSuccess}
          onSendAgain={handleSendAgain}
          onBackDashboard={handleBackDashboard}
        />
      )}

      {step === "finish" && (
        <TransferSummary
          selectedId={selectedId}
          amount={amount}
          notes={notes}
          transactionId={transactionId}
          transactionDate={transactionDate}
          onSendAgain={handleSendAgain}
          onBackDashboard={handleBackDashboard}
        />
      )}
    </>
  );
}

export default TransferPage;
