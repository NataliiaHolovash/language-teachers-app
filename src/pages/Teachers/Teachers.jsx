import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";


const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [expanded, setExpanded] = useState(null);


useEffect(() => {
  console.log("teachers state:", teachers);
  const fetchTeachers = async () => {
    const snapshot = await get(ref(db, "teachers"));

    if (snapshot.exists()) {
      const data = snapshot.val();
      setTeachers(Object.values(data));
    } else {
      console.log("No data");
    }
  };

  fetchTeachers();
}, []);
const visibleTeachers = teachers.slice(0, visibleCount);


return (
  <div>
    <h2>Teachers page</h2>

    {visibleTeachers.map((teacher, index) => {
  const isOpen = expanded === index;

  return (
    <div key={index}>
      <img src={teacher.avatar_url} width="80" />

      <h3>
        {teacher.name} {teacher.surname}
      </h3>

      <p>Languages: {teacher.languages.join(", ")}</p>

      <p>Levels: {teacher.levels.join(", ")}</p>

      <p>Rating: {teacher.rating}</p>

      <p>Price: {teacher.price_per_hour}$ / hour</p>

      <p>Lessons done: {teacher.lessons_done}</p>

      {/* READ MORE */}
      {isOpen && (
        <>
          <p>{teacher.lesson_info}</p>
          <p>{teacher.experience}</p>

          {teacher.conditions.map((c, i) => (
            <p key={i}>{c}</p>
          ))}

          {teacher.reviews?.map((r, i) => (
            <div key={i}>
              <b>{r.reviewer_name}</b>
              <p>Rating: {r.reviewer_rating}</p>
              <p>{r.comment}</p>
            </div>
          ))}
        </>
      )}

      <button
        onClick={() =>
          setExpanded(isOpen ? null : index)
        }
      >
        {isOpen ? "Hide" : "Read more"}
      </button>

      <hr />
    </div>
  );
})}

{visibleCount < teachers.length && (
  <button onClick={() => setVisibleCount(v => v + 4)}>
    Load more
  </button>
)}

  </div>
);

};
export default Teachers;