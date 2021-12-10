import Link from "next/link";

const StudentItem = (props: any) => {
  const student = props.student;
  return (
    <Link href={`/student/${student.id}`}>
      <a>{student?.first_name ?? ""} {student?.last_name ?? ""}</a>
    </Link>
  );
}

export default StudentItem;
