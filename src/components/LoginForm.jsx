import React from "react";

export const LoginForm = () => {

}

const divInputStyle = "m-4 px-4 py-3 flex flex-col mb-4";
const inputStyle = "p-2 border border-blue-900 text-grey-darkest";
const labelStyle = "uppercase mb-2 font-bold text-gray-500";

function buildInputGroup(lbl, lblFor, inputType) {


    return (
        <div className={divInputStyle}>
            <label htmlFor={lblFor} className={labelStyle}>{lbl}</label>

            <input type={inputType} name={lblFor} id={lblFor} className={inputStyle}/>
        </div>
    );
}

export const Contact = () => {

    return (
        <div className="w-full mt-6 p-4">
            <form className="flex justify-center">
                <div className="block border-b-2 border-green-300 w-1/2 md:w-2/3  shadow-md bg-green-50">
                    <h1 className="uppercase text-xl font-bold text-center p-3 text-green-800 mb-4">Contact US</h1>
                    {buildInputGroup('YOUR NAME', 'name', 'text')}
                    {buildInputGroup('Email', 'email', 'email')}

                    <div className={divInputStyle}>
                        <label htmlFor="email" className={labelStyle}>Your Opinion</label>

                        <textarea name="opinion" id="opinion" className={inputStyle}/>
                    </div>
                    <div className={divInputStyle}>
                        <button
                            className="mx-auto bg-green-600 text-white p-4  border rounded hover:text-blue-50 hover:shadow-lg">
                            Send Feedback
                        </button>
                    </div>
                </div>

            </form>

        </div>
    );
}