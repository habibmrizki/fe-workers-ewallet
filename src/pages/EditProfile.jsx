import { useState } from "react";
import { LuMail, LuPhone, LuSquarePen, LuTrash2, LuUser, LuUsersRound  } from "react-icons/lu";
import ChangePinModal from "../modals/ChangePinModal";
import ChangePasswordModal from "../modals/ChangePasswordModal";

function EditProfile() {
  const [show, setShow] = useState(false);
  const [changePassModal, setChangePassModal] = useState(false)
    const [previewAvatar, setPreviewAvatar] = useState(null)
    const HandleUpdateAvatar = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const avatar = form.get("avatar")
        console.log(avatar)
    }

    const handleDeleteAvatar = () => {
        setPreviewAvatar(null)
    }
    
  return (
    <main className="flex flex-col md:gap-6 md:px-10 md:py-7">
      <div className="hidden md:flex gap-3 items-center">
        <LuUsersRound className="text-xl text-blue-500"/>
        <p className="text-lg font-montserrat font-bold">Profile</p>
      </div>
      <header className="shrink-0 bg-brand-primary p-3 text-white lg:hidden">
        Profile
      </header>
      <div className="flex flex-col gap-5 p-6 md:border border-gray-200">
        <h2 className="font-montserrat font-medium lg:font-semibold text-lg">
          Profile Picture
        </h2>
        <form onSubmit={HandleUpdateAvatar} className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="border rounded-lg border-gray-300">
              <img
                className="w-30 h-20 md:w-40 md:h-30 lg:w-50 lg:h-40"
                src={previewAvatar || "/profile-default.svg"}
                alt="default user"
              />
            </div>
            <div className="w-full flex flex-col gap-2 sm:max-w-3xs">
              <label htmlFor="avatar" className="font-montserrat flex items-center justify-center gap-2 cursor-pointer px-4 py-2 md:py-2.5 border w-full rounded-lg text-white bg-blue-700">
                <LuSquarePen className="text-sm"/>
                <span className="text-sm font-montserrat">Change Image</span>
                      <input
                        hidden
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (!file) return;
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setPreviewAvatar(reader.result);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        type="file"
                        id="avatar"
                        name="avatar"
                      />
              </label>
              <button onClick={handleDeleteAvatar} className="font-montserrat flex items-center justify-center gap-2 cursor-pointer px-4 py-1 md:py-2.5  border w-full rounded-lg border-brand-red text-brand-red">
                <LuTrash2 className="text-sm"/>
                <span className="text-sm font-montserrat">Delete Image</span>
              </button>
            </div>
          </div>
          <p className="text-sm py-2 text-gray-500 font-montserrat ">
            The Profile Picture must be 512 x 512 pixels or less
          </p>
          <div className="relative flex flex-col gap-2">
            <label htmlFor="fullName" className="text-sm font-medium font-montserrat">
              Full Name
            </label>

            <div className="relative">
              <LuUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3.5 placeholder:text-gray-300"
                type="fullName"
                id="fullName"
                placeholder="Enter Full Name"
              />
            </div>
          </div>
          <div className="relative flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium font-montserrat">
              Phone
            </label>
            <div className="relative">
              <LuPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3.5 placeholder:text-gray-300"
                type="phone"
                id="phone"
                placeholder="Include 62, ex: 6281374890022"
              />
            </div>
          </div>
          <div className="relative flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium font-montserrat">
              Email
            </label>

            <div className="relative">
              <LuMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3.5 placeholder:text-gray-300"
                type="email"
                id="email"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div className="py-2">
            <p>Password</p>
            <button onClick={()=> setChangePassModal(true)} className="text-blue-800 pt-2 cursor-pointer hover:text-blue-500">
              Change Password
            </button>
          </div>
          <div className="py-2">
            <p>Pin</p>
            <button
              onClick={() => setShow(true)}
              className="text-blue-800 pt-2 cursor-pointer hover:text-blue-500"
            >
              Change Pin
            </button>
          </div>
          <button className="bg-blue-700 w-full text-white rounded-md px-4 py-1.5 cursor-pointer">
            Submit
          </button>
        </form>
        <ChangePasswordModal isShowModal={changePassModal} setShowModal={setChangePassModal}/>
        <ChangePinModal isShowModal={show} setIsShowModal={setShow} />
      </div>
    </main>
  );
}

export default EditProfile;
