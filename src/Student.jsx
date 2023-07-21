import React from "react";
import Score from "./Score";

export default function Student({ student }) {
  return (
    <li className={"Student"}>
      <h3>{student.name}</h3>
      <p>{student.bio}</p>
      <h4>Scores:</h4>
      <ul>
        {student.scores.map((score, index) => (
          <li key={index}>
            <Score score={score} />
          </li>
        ))}
      </ul>
    </li>
  );
}


