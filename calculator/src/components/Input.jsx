import './Input.css'

export function Input({ value }) {
    return (
        <>
         <input 
            className='input'
            type="text"
            value={value}
            readOnly
            ></input>
        </>
    );
}