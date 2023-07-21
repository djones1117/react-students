
export default function Student({ student }) {
  return (
    <li className={"Student"}>
      <h3>{student.name}</h3>
      <p>{student.bio}</p>
    </li>
  );
}
     
     
     
     
     
     
     
     
     
     
     
      {/* <p>
        Scores:{" "}
        {student.scores.map((score) => (
          <span key={score.date}>{score.score}, </span>
        ))}
      </p>
    </li>
  );
}  */}
