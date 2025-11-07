import { useState, useEffect } from "react";


const questions = ["apple", "banana"];


export function Questions() {

    const [cuurentQuestion, setCurrentQuestion] = useState("");

    useEffect(() => {
        setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)]);
    }, []);


    return (
        <>
            <div>

            </div>
        </>
    );
}