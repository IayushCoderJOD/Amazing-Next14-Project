// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
    title: "Contact Page",
    description: "Contact description",
};

const ContactPage = () => {
    // const a = Math.random();

    // console.log(a);

    return (
        <div className="flex flex-col md:flex-row m-5">
            <div className="flex-1 justify-center items-center flex">
                <Image src="/contact.png" alt="" width={400} height={400} className="" />
            </div>
            <div className="flex-1 ml-36 justify-center items-center" >
                <form action="" className="flex flex-col text-black ">
                    <input type="text" className="mt-2 w-[70%] rounded-md p-2 text-white font-medium text-sm bg-blue-900 bg-opacity-20" placeholder="Name and Surname" />
                    <input type="text" className="mt-2 w-[70%] rounded-md p-2 text-white font-medium text-sm bg-blue-900 bg-opacity-20" placeholder="Email Address" />
                    <input type="text" className="mt-2 w-[70%] rounded-md p-2 text-white font-medium text-sm bg-blue-900 bg-opacity-20" placeholder="Phone Number (Optional)" />
                    <textarea
                        name=""
                        id=""
                        className="mt-2 w-[70%] rounded-md p-2 text-white font-medium text-sm bg-blue-900 bg-opacity-20"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    ></textarea>
                    <button className=" bg-blue-700 text-white p-2 mt-2 w-[70%] rounded-xl">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;