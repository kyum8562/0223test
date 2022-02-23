import React, {useState, useEffect} from 'react';

function GuGuDan (){

    // const GuGuDan = () => {
    //     // 구조분해 문법
    //     const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    //     const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    //     const [value, setValue] = useState('');
    //     const [result, setResult] = useState('');
    //     // const inputRef = useRef(null);

    //     const onSubmit = (e) => {
    //         e.preventDefault();
    //         if(parseInt(value) === first* second){
    //             setResult('정답입니다 :) ' + value);
    //             setFirst(Math.ceil(Math.random() * 9));
    //             setSecond(Math.ceil(Math.random() * 9));
    //             setValue('');
    //             // inputRef.current.focus();
    //         }
    //         else{
    //             setResult('틀렸습니다 :(');
    //             setValue('');
    //             // inputRef.current.focus();
    //         }
    //     };

    //     const onChange = (e) => {
    //         setValue(e.target.value);
    //     };

    //     return (
    //         <div>
    //             <div>{first} X {second} = </div>
    //             <form onSubmit = {onSubmit}>
    //                 <input  onChange={onChange}type="number" value = {value} />
    //                 <button>입력</button>
    //             </form>
    //             <div>{result}</div>
    //         </div>
    //     );
    // }
}
export default GuGuDan;
