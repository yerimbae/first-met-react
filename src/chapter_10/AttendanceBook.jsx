import React from "react";

const student = [
    {
        id: 1,
        name: "A",
    },
    {
        id: 2,
        name: "B",
    },
    {
        id: 3,
        name: "C",
    },
    {
        id: 4,
        name: "D",
    },
    {
        id: 5,
        name: "E",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {student.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;