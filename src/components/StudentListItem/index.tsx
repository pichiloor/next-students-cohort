import Link from "next/link";

const StudentItem = (props: any) => {
  const student = props.student;
  return (
    <div className="card" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s", width: "20%", padding: "5px 5px " }}>
      <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
      <div className="container" style={{ padding: "2px 16px" }}>
        <h4><b><Link href={`/student/${student.id}`}>
          <a>{student?.first_name ?? ""} {student?.last_name ?? ""}</a>
        </Link></b></h4>
        <p>{student?.title ?? ""}</p>
      </div>
    </div>

  );
}

export default StudentItem;
